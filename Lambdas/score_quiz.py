import json
import boto3
from boto3.dynamodb.conditions import Key

OLD_QUIZZES = ["Modern-Family-Quiz", "The-Office-Quiz", "Harry-Potter-Quiz"]

# Lambda Handler to score quiz provided as event
def lambda_handler(event, context):
    print('Event:', event)

    # quiz info
    body = json.loads(event['body'])
    responses = body['data']
    quiz_name = body['quiz_name']
    leaderboard_name = quiz_name + '-Leaderboard'
    username = responses['name']

    # dynamo db question/answer and leaderboard tables
    dynamo_resource = boto3.resource('dynamodb')
    answers_table = dynamo_resource.Table(quiz_name)
    leaderboard_table = dynamo_resource.Table(leaderboard_name)

    # get all questions and answers from Dynamo DB table
    answers = sort_list_by(get_table_items(answers_table), 'num', False)

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

    # user score
    score = f"{num_correct} / {num_questions}"
    display_score = "SCORE: " + score
    json_return["score"] = display_score

    # update the leaderboard
    if quiz_name not in OLD_QUIZZES:
        new_user_result = {"Name": username, "num_correct": num_correct, "num_questions": num_questions, "Score": score}
        leaderboard_table.put_item(Item=new_user_result)
    ranked_leader_list = rank(sort_list_by(get_table_items(leaderboard_table), 'num_correct', True))
    json_return["leaderboard"] = ranked_leader_list

    print('JSON Return:', json_return)
    return {
        'statusCode': 200,
        'body': json.dumps(json_return)
    }

# get all values in Dynamo table
def get_table_items(table):
    response = table.scan()
    items_list = response.get('Items', [])

    return items_list

# sort list by key
def sort_list_by(items_list, sort_key, reverse_bool):
    return sorted(items_list, key=lambda x: x[sort_key], reverse=reverse_bool)

# add rank to items list
def rank(items_list):
    ranked_list = []
    curr_rank = 0
    prev_num_correct = None

    for item in items_list:
        print('item', item)
        if item['num_correct'] != prev_num_correct:
            curr_rank += 1

        ranked_list.append({"Rank": str(curr_rank), "Name": item["Name"], "Score": item["Score"]})
        prev_num_correct = item['num_correct']
    
    return ranked_list
