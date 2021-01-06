import json
import boto3

# Lambda Handler to get the leaderboard list (from Dynamo DB)
def lambda_handler(event, context):
    # leaderboard names
    leaderboard_name_list = [
        'Modern-Family-Quiz-Leaderboard',
        'The-Office-Quiz-Leaderboard',
        'Harry-Potter-Quiz-Leaderboard',
        'Captain-America-Quiz-Leaderboard',
        'Guardians-of-the-Galaxy-Vol1-Quiz-Leaderboard',
        'Star-Wars-Original-Trilogy-Quiz-Leaderboard'
    ]

    # json return object (with leaderboards)
    json_return = {}

    # dynamo db resource
    dynamo_resource = boto3.resource('dynamodb')
    
    # iterate through each leaderboard
    for leaderboard_name in leaderboard_name_list:
        # rank and sort leaderboard
        leaderboard_table = dynamo_resource.Table(leaderboard_name)
        unsorted_leaderboard = get_table_items(leaderboard_table)
        leaderboard = rank(sort_list_by(unsorted_leaderboard, 'num_correct', True))
        
        # add leaderboard to json return object
        json_return[leaderboard_name] = leaderboard

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