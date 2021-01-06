Survey
    .StylesManager
    .applyTheme("modern");

// get JSON data from "create_quiz" Lambda print output
var json = {
    "title": "Star Wars Original Trilogy Quiz (By Big D Kosta)",
    "showProgressBar": "bottom",
    "startSurveyText": "Start Quiz",
    "pages": [
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q1",
                    "title": "What is given to R2D2 by Leia before they get captured by Darth Vader?",
                    "choices": [
                        "Obi-won's lightsaber",
                        "Luke's lightsaber",
                        "The location of the Death Star",
                        "The Death Star plans"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q2",
                    "title": "Who is the commanding officer on the Death Star?",
                    "choices": [
                        "Darth Vader",
                        "The Emperor",
                        "Grand Moff Tarkin",
                        "Jabba"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q3",
                    "title": "Who sells R2D2 and C3PO to Luke and Owen Lars?",
                    "choices": [
                        "Obi-won",
                        "Leia",
                        "Han",
                        "Jawas"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q4",
                    "title": "What planet is Leia from, which gets blown up by the Death Star?",
                    "choices": [
                        "Tatooine",
                        "Alderaan",
                        "Coruscant",
                        "Endor"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q5",
                    "title": "What were the occupations of Owen and Beru Lars, Luke's adopted parents?",
                    "choices": [
                        "Merchants",
                        "Moisture farmers",
                        "Clone Wars veterans",
                        "Engineers"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q6",
                    "title": "Who shot first?",
                    "choices": [
                        "Han",
                        "Greedo",
                        "Who cares?",
                        "George Lucas doesn't even know"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q7",
                    "title": "How do Obi-won and Luke make it past the stormtroopers in Mos Eisley?",
                    "choices": [
                        "They sneak in on the Millennium Falcon",
                        "They kill all the stormtroopers",
                        "Obi-won uses jedi mind tricks on the patrol",
                        "They get saved by Han and Chewbacca"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q8",
                    "title": "How many parsecs did Han Solo claim the Millennium Falcon made the Kessel Run in?",
                    "choices": [
                        "5",
                        "7",
                        "12",
                        "20"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q9",
                    "title": "Who says 'If you strike me down I shall become more powerful than you could possibly imagine'?",
                    "choices": [
                        "Darth Vader",
                        "Obi-won",
                        "Luke",
                        "The Emperor"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q10",
                    "title": "What was Luke's callsign during the Death Star run at the end of the original movie",
                    "choices": [
                        "Red One",
                        "Red Three",
                        "Red Four",
                        "Red Five"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q11",
                    "title": "What dead species does Han put Luke in to keep him alive on Hoth?",
                    "choices": [
                        "Jawa",
                        "Wookie",
                        "Wampa Wampa",
                        "Tauntaun"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q12",
                    "title": "Who does Leia call a 'Stuck-up, half-witted, scruffy-looking, nerf-herder'?",
                    "choices": [
                        "Han",
                        "Luke",
                        "Chewbacca",
                        "C3PO"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q13",
                    "title": "Who does Leia kiss on Hoth?",
                    "choices": [
                        "Han",
                        "Luke",
                        "Chewbacca",
                        "C3PO"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q14",
                    "title": "What planet does Yoda live in hiding on?",
                    "choices": [
                        "Tatooine",
                        "Hoth",
                        "Bespin",
                        "Dagobah"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q15",
                    "title": "Who else besides Yoda helps Luke with training?",
                    "choices": [
                        "Han",
                        "Leia",
                        "Obi-won's ghost",
                        "Lando"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q16",
                    "title": "What does Luke see in the cave while training with Yoda?",
                    "choices": [
                        "A vision of him losing his arm",
                        "Leia turning to the dark side",
                        "Darth Vader",
                        "His friends in trouble on Cloud City"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q17",
                    "title": "Who says 'Punch it Chewie'?",
                    "choices": [
                        "Han",
                        "Luke",
                        "Leia",
                        "C3PO"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q18",
                    "title": "What bounty hunter tracks down Han Solo and co. to Cloud City?",
                    "choices": [
                        "Dengar",
                        "Boba Fett",
                        "Bossk",
                        "IG-88"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q19",
                    "title": "What friend of Han gives him up to Darth Vader on Cloud City",
                    "choices": [
                        "Leia",
                        "Luke",
                        "Chewbacca",
                        "Lando"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q20",
                    "title": "How does Han reply to Leia saying 'I love you'?",
                    "choices": [
                        "I love you more",
                        "Say it again",
                        "I know",
                        "Eww gross Princess!"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q21",
                    "title": "Where is Han taken at the end of The Empire Strikes Back?",
                    "choices": [
                        "To the Emperor",
                        "To be executed",
                        "Prison",
                        "Jabba's palace"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q22",
                    "title": "What is the monster Luke fights in the dungeon of Jabba's Palace?",
                    "choices": [
                        "Rancor",
                        "Tauntaun",
                        "Wampa Wampa",
                        "Sarlacc"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q23",
                    "title": "How does Jabba die?",
                    "choices": [
                        "Luke kills him with his lightsaber",
                        "Force choked by Darth Vader",
                        "Leia chokes him with her chains",
                        "Boba Fett kills him"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q24",
                    "title": "How old is Yoda when he dies?",
                    "choices": [
                        "600",
                        "700",
                        "800",
                        "900"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q25",
                    "title": "Why do the heroes go to Endor in the Return of the Jedi?",
                    "choices": [
                        "To hide from Boba Fett",
                        "To hide after escaping the second Death Star",
                        "To rescue Chewbacca from Darth Vader",
                        "To shut down the second Death Star's shield"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q26",
                    "title": "How does Luke figure out Leia is his twin sister?",
                    "choices": [
                        "Yoda tells him before he dies",
                        "Han tells him",
                        "Obi-won's ghost tells him",
                        "Darth Vader tells him when he tells him he is his father"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q27",
                    "title": "Who leads the assault on the second Death Star?",
                    "choices": [
                        "Admiral Ackbar",
                        "Lando",
                        "Han",
                        "Both a and b"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q28",
                    "title": "Who says 'Its a trap' in reaction to the Second Death Star's shield still being active?",
                    "choices": [
                        "Admiral Ackbar",
                        "Lando",
                        "Han",
                        "Leia"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q29",
                    "title": "What does Darth Vader threaten to do that enrages Luke during their fight in Return of the Jedi?",
                    "choices": [
                        "Kill all of his friends",
                        "Turn Leia to the dark side",
                        "Destroy the ghosts of Obi-won and Yoda",
                        "Cut off Luke's hand again"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q30",
                    "title": "Who are the little bear people that help fight on Endor against the Empire?",
                    "choices": [
                        "Jawas",
                        "Medveds",
                        "Wookies",
                        "Ewoks"
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
        post_data = {"quiz_name": "Star-Wars-Original-Trilogy-Quiz", "data": result.data}
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