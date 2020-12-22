# QuizTime
**Website URL**: www.taixpress.com

A fun website just for sitcom/movie trivia (using only AWS resources on the Free Tier)

Frontend:
- Hosted with AWS S3 using only HTML, CSS, JS (SurveyJS and JQuery libraries used)
- Used Route 53 to make S3 data publicly viewable

API Connection:
- Used AWS API Gateway that accepts GET/POST requests (for getting leaderboard and scoring quiz data)

Backend:
- Used AWS Lambda functions that process the GET/POST requests
- Used Dynamo DB to store quiz data and leaderboard stats

How to Add New Quizzes
- Run "create_quiz" Lambda function (with NEW_TABLE_NAME equal to the new name and questions in JSON format as the event)
- Add a directory with name "{quiz}" to QuizTime repo (e.g. modern_family)
- Copy over HTML and JS file from existing quiz directory and update the names to work with new quiz
- Update leaderboard_name_list in "get_leaderboard" Lambda with new quiz name
- Add new div with new leaderboard to leaderboard.html and new CreateTableFromJSON call to leaderboard.js
- Add a picture for the new quiz in Pictures directory (and then refer to the new picture in index.html)
- Update navbar for ALL HTML files (add the new quiz page to the list)