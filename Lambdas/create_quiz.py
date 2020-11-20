import json
import boto3
from botocore.exceptions import ClientError

# Lambda Handler to create new quiz (store Q&A in Dynamo and generate frontend Qs)
def lambda_handler(event, context):
    # NEW table name that you want to create
    NEW_TABLE_NAME = 'The-Office-Quiz'

    # dynamo db resource
    dynamo_resource = boto3.resource('dynamodb')

    # create dynamo question/answer table
    new_table = create_question_table(dynamo_resource, NEW_TABLE_NAME)

    # create dynamo leaderboard table
    create_leaderboard_table(dynamo_resource, NEW_TABLE_NAME)

    # generate frontend json with questions/answers
    create_questions(new_table, NEW_TABLE_NAME, event)

    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }

def create_question_table(dynamo_resource, new_table_name):
    try:
        table = dynamo_resource.create_table(
            TableName=new_table_name,
            KeySchema=[
                {
                    'AttributeName': 'question_num',
                    'KeyType': 'HASH'  # Partition key
                }
            ],
            AttributeDefinitions=[
                {
                    'AttributeName': 'question_num',
                    'AttributeType': 'S'
                }
            ],
            ProvisionedThroughput={
                'ReadCapacityUnits': 5,
                'WriteCapacityUnits': 5
            }
        )
        table.meta.client.get_waiter('table_exists').wait(TableName=new_table_name)
    except ClientError:
        print('Questions Table EXISTS... returning existing table:', new_table_name)
        table = dynamo_resource.Table(new_table_name)
    
    return table

def create_leaderboard_table(dynamo_resource, new_table_name):
    leaderboard_table_name = new_table_name + '-Leaderboard'
    try:
        table = dynamo_resource.create_table(
            TableName=leaderboard_table_name,
            KeySchema=[
                {
                    'AttributeName': 'name',
                    'KeyType': 'HASH'  # Partition key
                }
            ],
            AttributeDefinitions=[
                {
                    'AttributeName': 'name',
                    'AttributeType': 'S'
                }
            ],
            ProvisionedThroughput={
                'ReadCapacityUnits': 5,
                'WriteCapacityUnits': 5
            }
        )
        table.meta.client.get_waiter('table_exists').wait(TableName=leaderboard_table_name)
    except ClientError:
        print('Leaderboard Table EXISTS... returning existing table:', leaderboard_table_name)
        pass

def create_questions(new_table, table_name, items):
    pages = []
    for item in items:
        page = create_page(item)
        pages.append(page)
        new_table.put_item(Item=item)
    pages.append(name_request_question())
    frontend_json = generate_frontend_json(table_name, pages)

    # write frontend JSON questions to S3 bucket: json-questions
    s3 = boto3.resource('s3')
    s3object = s3.Object('json-questions', f'{table_name}.json')

    s3object.put(
        Body=(bytes(json.dumps(frontend_json).encode('UTF-8')))
    )

def create_page(item):
    page = {
        "questions": [
            {
                "type": "radiogroup",
                "name": item['question_num'],
                "title": item['question'],
                "choices": [
                    item['a'],
                    item['b'],
                    item['c'],
                    item['d']
                ]
            },
        ]
    }
    return page

def name_request_question():
    page = {
        "questions": [
            {
                "name": "name",
                "type": "text",
                "title": "Please enter your nickname:",
                "placeHolder": "Insert Nickname Here...",
                "isRequired": "true"
            }
        ]
    }
    return page

def generate_frontend_json(table_name, pages):
    frontend_json = {
        "title": table_name.replace("-", " "),
        "showProgressBar": "bottom",
        "startSurveyText": "Start Quiz",
        "pages": pages,
        "showQuestionNumbers": "on",
        "completedHtml": "<h4 id=\"result\">Your Score is Loading....</h4>"
    }
    return frontend_json
