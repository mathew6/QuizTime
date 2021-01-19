Survey
    .StylesManager
    .applyTheme("modern");

// get JSON data from "create_quiz" Lambda print output
var json = {
    "title": "HIMYM Quiz (by Tony V Productions)",
    "showProgressBar": "bottom",
    "startSurveyText": "Start Quiz",
    "pages": [
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q1",
                    "title": "Ted works as a(n)",
                    "choices": [
                        "News Anchor",
                        "Lawyer",
                        "Plumber",
                        "Architect"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q2",
                    "title": "Which city does Lily go to to study art?",
                    "choices": [
                        "San Francisco",
                        "New York City",
                        "Atlanta",
                        "Los Angeles"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q3",
                    "title": "What word does Lily not like?",
                    "choices": [
                        "Beau",
                        "Salamander",
                        "Moist",
                        "Smack"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q4",
                    "title": "Where did Lily and Marshall meet?",
                    "choices": [
                        "MacLaren's Pub",
                        "College",
                        "Elementary School",
                        "The Subway"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q5",
                    "title": "Who plays the piano at the first Slapsgiving?",
                    "choices": [
                        "Ted",
                        "Marshall",
                        "Barney",
                        "Lily"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q6",
                    "title": "What is Stella's profession?",
                    "choices": [
                        "Opthamologist",
                        "Orthopedic Surgeon",
                        "Neurologist",
                        "Dermatologist"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q7",
                    "title": "What did Ted steal from the restaurant for Robin?",
                    "choices": [
                        "A Red Ribbon",
                        "A Blue French Horn",
                        "A Green Goblet",
                        "A Yellow Translucent Heart"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q8",
                    "title": "Where does Ted take his little sister to when she visits him in NYC?",
                    "choices": [
                        "The Brooklyn Bridge",
                        "The Manhattan Bridge",
                        "The Statue of Liberty",
                        "The Empire State Building"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q9",
                    "title": "What color is Ted's wife's umbrella?",
                    "choices": [
                        "Yellow",
                        "Blue",
                        "Pink",
                        "Red"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q10",
                    "title": "Where does Robin go after she breaks up with Ted?",
                    "choices": [
                        "Colombia",
                        "Argentina",
                        "Ethiopia",
                        "South Africa"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q11",
                    "title": "What movie does Ted ask Stella to watch to see if she will like it?",
                    "choices": [
                        "Harry Potter",
                        "Lord of the Rings",
                        "Star Wars",
                        "Star Trek"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q12",
                    "title": "What is Marshall's dream company to work for?",
                    "choices": [
                        "The NDRC",
                        "The NRDC",
                        "The LDRC",
                        "The LRDC"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q13",
                    "title": "What is the name of the bank that Barney and Marshall work for?",
                    "choices": [
                        "Goliath National Bank",
                        "Monster National Bank",
                        "The Bank of New York City",
                        "The Bank of the Upper East Side"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q14",
                    "title": "What does Barney do for work?",
                    "choices": [
                        "PLEASE",
                        "AND",
                        "THANKS",
                        "BUDDY"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q15",
                    "title": "Where do Marshall and Lily buy their first home?",
                    "choices": [
                        "Dowisetrepla",
                        "Rowdownisepla",
                        "Smellstankarepla",
                        "Yuckrankatrepla"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q16",
                    "title": "Who stays with Barney for some time to act as his fake wife and scare off his one night stands?",
                    "choices": [
                        "Robin",
                        "Lily",
                        "Stella",
                        "Janet"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q17",
                    "title": "Who has not dated Robin?",
                    "choices": [
                        "Ted",
                        "Barney",
                        "Marshall",
                        "Gael"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q18",
                    "title": "What was the name of Robin's co-star on her famous Canadian TV show?",
                    "choices": [
                        "Rachel Flowers",
                        "Felicia Festivities",
                        "Heather Sparkles",
                        "Jessica Glitter"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q19",
                    "title": "What is Marshall's favorite football team?",
                    "choices": [
                        "The Browns",
                        "The Giants",
                        "The 49ers",
                        "The Vikings"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q20",
                    "title": "What do Marshall and Lily call each other?",
                    "choices": [
                        "Marshie and Liliana",
                        "Marshie and Lilypad",
                        "Marshmallow and Liliana",
                        "Marshmallow and Lilypad"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q21",
                    "title": "Which of the following would you find in Barney's apartment?",
                    "choices": [
                        "A Full-size Storm Trooper Figure",
                        "A Full-size Gandalf the Great Figure",
                        "A Full-size Johnny Lawrence Figure",
                        "A Full-size Joker Figure"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q22",
                    "title": "What did Ted call his invention that helped him not find out the score of the Superbowl game?",
                    "choices": [
                        "Sensory Deprivator 100",
                        "Sensory Deprivator 500",
                        "Sensory Deprivator 1000",
                        "Sensory Deprivator 5000"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q23",
                    "title": "In the episode where the characters race to see who's mode of transport is fastest, what does Marshall do?",
                    "choices": [
                        "He runs",
                        "He takes a cab",
                        "He takes the subway",
                        "He takes an airplane"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q24",
                    "title": "What was the name of Ted's on-again off-again girlfriend from college?",
                    "choices": [
                        "Louise",
                        "Deborah",
                        "Hannah",
                        "Karen"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q25",
                    "title": "What is the term that Barney uses to describe his inability to talk properly to women?",
                    "choices": [
                        "The Snips",
                        "The Yips",
                        "The Snays",
                        "The Yays"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q26",
                    "title": "What does Robin own from her past boyfriends that annoys Ted?",
                    "choices": [
                        "Shavers",
                        "Toothbrushes",
                        "Cats",
                        "Dogs"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q27",
                    "title": "What is the name of the drink that causes Ted to totally forget the night and end up with a pineapple in his bed?",
                    "choices": [
                        "Red Venom",
                        "Red Beast",
                        "Red Dragon",
                        "Red Banshee"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q28",
                    "title": "What is the name of the play that Barney forces his friends to watch?",
                    "choices": [
                        "Worst Play Ever",
                        "Eat it, Lily",
                        "Suck it, Lily",
                        "Barney's Carnival of Horrors"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q29",
                    "title": "Where is Nate, one of Robin's ex-boyfriends, from?",
                    "choices": [
                        "Labrador",
                        "Newfoundland",
                        "Prince Edwards island",
                        "Nova Scotia"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q30",
                    "title": "What is the name of the gym that the characters go to for a week to try to get in shape?",
                    "choices": [
                        "Total Insane Fitness",
                        "Total Rip Fitness",
                        "Gigantic Gains",
                        "Resolutions Resolver"
                    ]
                }
            ]
        },
        {
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
    ],
    "showQuestionNumbers": "on",
    "completedHtml": "<h4 id=\"result\">Your Score is Loading....</h4>"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        post_data = {"quiz_name": "HIMYM-Quiz", "data": result.data}
        // console.log('result', JSON.stringify(post_data));
        let endpoint = "https://3ed94zmyfc.execute-api.us-east-1.amazonaws.com/score_quiz";
        $.ajax({
            url: endpoint,
            type: "POST",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(post_data),
            success: function(data){
                // console.log(`POST complete!!! ${JSON.stringify(data)}`);
                let score = data["score"];
                document
                    .querySelector('#result')
                    .textContent = score;
                CreateTableFromJSON(data["leaderboard"], "Leaderboard", "leaderboardTable");
                CreateTableFromJSON(data["questions"], "Quiz Results", "quizResultTable");
            }
        });
    });

$("#surveyElement").Survey({model: survey});

// Create Results Table
function CreateTableFromJSON(json_obj, title, element_id) {
    // extract values for HTML headers
    var col = [];
    for (var i = 0; i < json_obj.length; i++) {
        for (var key in json_obj[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // create dynamic table
    var table = document.createElement("table");

    // add table caption (title)
    var caption = document.createElement("caption")
    caption.innerHTML = title
    table.appendChild(caption)

    // create HTML table header row
    var tr = table.insertRow(-1);
    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th"); // add table header to row
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    // add each JSON question block data to table rows
    for (var i = 0; i < json_obj.length; i++) {
        tr = table.insertRow(-1);
        // add column for each key in JSON question block
        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = json_obj[i][col[j]];
        }
    }

    // add table to quizResultTable div
    var divContainer = document.getElementById(element_id);
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function quizDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}
  
// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
}