import json
import boto3
from boto3.dynamodb.conditions import Key

def lambda_handler(event, context):
    print('event', event)

    # quiz info
    body = json.loads(event['body'])
    quiz_name = body['quiz_name']
    responses = body['data']
    name = responses['name']
    leaderboard_name = quiz_name + '-Leaderboard'

    # dynamo db question/answer and leaderboard tables
    dynamo_resource = boto3.resource('dynamodb')
    questions_table = dynamo_resource.Table(quiz_name)
    leaderboard_table = dynamo_resource.Table(leaderboard_name)

    # get all questions and answers from Dynamo DB table
    answers = get_answers(questions_table)

    json_return = {"score": "-", "leaderboard": [], "questions": []}
    num_correct = 0
    num_questions = 0
    # iterate through all questions/answers and compare to user responses
    for item in answers:
        q_num = item['num']
        question_num = item['question_num']
        question = item['question']
        answer = item['answer']

        a = item['a']
        b = item['b']
        c = item['c']
        d = item['d']

        is_correct = "WRONG"
        user_answer = "User Skipped..."
        if question_num in responses:
            user_answer = responses[question_num]
            if responses[question_num] == answer:
                is_correct = "CORRECT"
                num_correct += 1

        json_return["questions"].append({"Question Number": str(q_num), "Question": question, "Result": is_correct, "Correct Answer": answer, "Your Answer": user_answer, "Choices": [a, b, c, d]})
        num_questions += 1

    score = f"SCORE: {num_correct} / {num_questions}"
    json_return["score"] = score

    # update the leaderboard
    sorted_leader_list = update_leaderboard(leaderboard_table, name, num_correct, num_questions)
    json_return["leaderboard"] = format_leaderboard(sorted_leader_list)

    return {
        'statusCode': 200,
        'body': json.dumps(json_return)
    }

# put item in Dynamo DB
def put_item(table, item):
    table.put_item(Item=item)

# get item from Dynamo DB
def get_item(table, key):
    response = table.get_item(
        Key=key
    )
    return response['Item']

# get all values in Dynamo Questions table
def get_answers(table):
    response = table.scan()
    items_list = response.get('Items', [])
    sorted_items_list = sorted(items_list, key=lambda x: x['num'])

    return sorted_items_list

# update Dynamo Leaderboard table depending on score
def update_leaderboard(leaderboard_table, name, num_correct, num_questions):
    leaderboard = get_leaderboard(leaderboard_table)
    temp_leader_list = []
    new_user_info = {"name": name, "num_correct": num_correct, "num_questions": num_questions}
    temp_leader_list.append(new_user_info)
    temp_leader_list.extend(leaderboard) # append the leaderboard items to list
    
    # get the leaders (maximum 5)
    sorted_leader_list = sorted(temp_leader_list, key=lambda x: x['num_correct'])
    if len(sorted_leader_list) > 5:
        # if user is better than worst leader, remove 6th place from dynamo
        if sorted_leader_list[0]['name'] != name:
            leaderboard_table.delete_item(
                Key={
                    'name': sorted_leader_list[0]['name']
                }
            )
            leaderboard_table.put_item(Item=new_user_info) # add new user to leaderboard
        # remove 6th place from list
        del sorted_leader_list[0]
    else:
        leaderboard_table.put_item(Item=new_user_info) # add new user to leaderboard

    # return leader list (max 5)
    return sorted_leader_list

# get all values in Dynamo Leaderboard table
def get_leaderboard(table):
    response = table.scan()
    items_list = response.get('Items', [])

    return items_list

def format_leaderboard(leader_list):
    formatted_leader_list = []
    list_length = len(leader_list)
    for i, item in enumerate(leader_list):
        # format score as a string (ex. "24 / 25")
        score = f"{item['num_correct']} / {item['num_questions']}"

        # Add user to leader list (ex. "Rank": 1, "Name": "Mathew", "Score": 24 / 25)
        formatted_leader_list.insert(0, {"Rank": str(list_length-i), "Name": item['name'], "Score": score})

    return formatted_leader_list