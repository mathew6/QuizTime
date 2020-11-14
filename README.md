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
