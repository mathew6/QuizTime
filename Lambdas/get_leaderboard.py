import json
import boto3

def lambda_handler(event, context):
    # leaderboard names
    leaderboard_name_list = [
        'Modern-Family-Quiz-Leaderboard',
        'The-Office-Quiz-Leaderboard'
    ]

    # json return object (with leaderboards)
    json_return = {}

    # dynamo db resource
    dynamo_resource = boto3.resource('dynamodb')
    
    for leaderboard_name in leaderboard_name_list:
        leaderboard_table = dynamo_resource.Table(leaderboard_name)
        unsorted_leaderboard = get_leaderboard(leaderboard_table)
        leaderboard = format_leaderboard(sort_leaderboard(unsorted_leaderboard))
        
        json_return[leaderboard_name] = leaderboard
    
    print('json_return', json_return)

    return {
        'statusCode': 200,
        'body': json.dumps(json_return)
    }

# get all values in Dynamo Leaderboard table
def get_leaderboard(table):
    response = table.scan()
    leader_list = response.get('Items', [])

    return leader_list

def sort_leaderboard(leader_list):
    return sorted(leader_list, key=lambda x: x['num_correct'])

def format_leaderboard(leader_list):
    formatted_leader_list = []
    list_length = len(leader_list)
    for i, item in enumerate(leader_list):
        # format score as a string (ex. "24 / 25")
        score = f"{item['num_correct']} / {item['num_questions']}"

        # Add user to leader list (ex. "Rank": 1, "Name": "Mathew", "Score": 24 / 25)
        formatted_leader_list.insert(0, {"Rank": str(list_length-i), "Name": item['name'], "Score": score})

    return formatted_leader_list
