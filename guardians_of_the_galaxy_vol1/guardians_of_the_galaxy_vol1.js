Survey
    .StylesManager
    .applyTheme("modern");

// get JSON data from "create_quiz" Lambda print output
var json = {
    "title": "Guardians of the Galaxy Vol1 Quiz",
    "showProgressBar": "bottom",
    "startSurveyText": "Start Quiz",
    "pages": [
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q1",
                    "title": "Who is Gamora's sister?",
                    "choices": [
                        "Nebula",
                        "Irani",
                        "Meredith",
                        "Carina"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q2",
                    "title": "Who did Peter Quill try to sell the Orb to in Xandar?... but the buyer got cold feet because Ronan also wanted the Orb.",
                    "choices": [
                        "The Collector",
                        "The Trader",
                        "The Broker",
                        "The Merchant"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q3",
                    "title": "Gamora agreed to bring the Orb to Taneleer Tivan for a very hefty price of 4 billion units. Who is he better known as?",
                    "choices": [
                        "The Collector",
                        "The Trader",
                        "The Broker",
                        "The Merchant"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q4",
                    "title": "What is Peter Quill's \"outlaw\" name?",
                    "choices": [
                        "Juggernaut",
                        "Star-Lord",
                        "Taser-Face",
                        "Sun-Prince"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q5",
                    "title": "What is the name of the prison that Peter Quill, Gamora, Rocket, and Groot are sent to after causing havoc in Xandar?",
                    "choices": [
                        "The Lockbox",
                        "Quarnyx",
                        "The Kyln",
                        "The Terror Dome"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q6",
                    "title": "What color is the Infinity Stone in the Orb?",
                    "choices": [
                        "Blue",
                        "Green",
                        "Red",
                        "Purple"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q7",
                    "title": "What does Peter Quill's mom say to Quill before she dies?",
                    "choices": [
                        "Find your father",
                        "I love you",
                        "Seek your destiny",
                        "Take my hand"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q8",
                    "title": "What is Drax commonly known as?",
                    "choices": [
                        "Drax the Destroyer",
                        "Drax the Dumbo",
                        "Drax the Daring",
                        "Drax the Delinquent"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q9",
                    "title": "Who are Thanos' adopted daughters?",
                    "choices": [
                        "Gamora",
                        "Nebula",
                        "Both Gamora and Nebula",
                        "Neither Gamora nor Nebula"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q10",
                    "title": "Who said \"You don't look like a junker; You're wearing Ravager garb\"",
                    "choices": [
                        "Irani Rael",
                        "Korath",
                        "Ronan",
                        "Nebula"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q11",
                    "title": "What is the name of Yondu's extremely deadly weapon that he controls by whistling?",
                    "choices": [
                        "Yaka Arrow",
                        "Scissor Sword",
                        "Belligerent Blaster",
                        "Swift Axe"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q12",
                    "title": "Fill in the blank... Yondu told Quill: \"You betrayed me! Steal my money! When I picked you up as a kid, these boys wanted to eat you. They ain\u2019t never tasted _______ before. I saved your life!\"",
                    "choices": [
                        "Human",
                        "Terrestial",
                        "Terran",
                        "Marsupial"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q13",
                    "title": "Ronan is fixated on destroying which race?",
                    "choices": [
                        "Kree",
                        "Yirbek",
                        "Xandarians",
                        "Mercurians"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q14",
                    "title": "What is the name of Peter Quill's ship?",
                    "choices": [
                        "The Speedster",
                        "Zoom",
                        "The Voyager",
                        "The Milano"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q15",
                    "title": "What is the name of the device that Peter Quill cherishes (his mom gave it to him)?",
                    "choices": [
                        "iPod Shuffle",
                        "Walkman",
                        "Nintendo Entertainment System",
                        "Fujifilm Quick Snap Camera"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q16",
                    "title": "What song (on his \"Awesome Mix Vol. 1\" cassette) was young Peter Quill listening to in the hospital before his mom died?",
                    "choices": [
                        "Hooked on a Feeling",
                        "Ain't No Mountain High Enough",
                        "I\u2019m Not In Love",
                        "Fooled Around and Fell in Love"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q17",
                    "title": "Who said \"we're just like Kevin Bacon\" when they successfully broke into Ronan's ship during the Battle of Xandar?",
                    "choices": [
                        "Peter Quill",
                        "Drax",
                        "Gamora",
                        "Rocket"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q18",
                    "title": "What is the Infinty Stone in the Orb?",
                    "choices": [
                        "Mind Stone",
                        "Reality Stone",
                        "Power Stone",
                        "Space Stone"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q19",
                    "title": "How many prisons had Rocket escaped from before escaping the one during the movie the Guardians of the Galaxy?",
                    "choices": [
                        "3",
                        "7",
                        "18",
                        "22"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q20",
                    "title": "What is Peter Quill's middle name?",
                    "choices": [
                        "Jason",
                        "Star",
                        "Jimmy",
                        "Jeremy"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q21",
                    "title": "Who said \"I am not some starry-eyed waif here to succumb to your... your... pelvic sorcery\"?",
                    "choices": [
                        "Drax",
                        "Nebula",
                        "Gamora",
                        "Carina"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q22",
                    "title": "Who said \"I found something inside myself, incredibly heroic...not to brag.\"?",
                    "choices": [
                        "Rocket",
                        "Yondu",
                        "Peter Quill",
                        "Drax"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q23",
                    "title": "Who said \"You just wanna suck the joy outta everything!\"",
                    "choices": [
                        "Peter Quill",
                        "Rocket",
                        "Drax",
                        "Groot"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q24",
                    "title": "Rocket's plan to escape the prison included tasks such as stealing an inmate's prostethic leg, killing the power source to the prison, and what other task that Gamora was asked to do?",
                    "choices": [
                        "Turn off the artificial gravity",
                        "Steal two machine guns from the guards",
                        "Open all the cell doors",
                        "Retrieve a guard's arm band"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q25",
                    "title": "Who is the ravager that took care of Peter Quill as a child?",
                    "choices": [
                        "Yondu",
                        "Korath",
                        "Moloka",
                        "Richy"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q26",
                    "title": "Who said \"You're making me beat up grass\"?",
                    "choices": [
                        "Drax",
                        "Peter Quill",
                        "Rocket",
                        "Drax"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q27",
                    "title": "What is the name of Rocket's self-designed weapon that can \"blow up moons\" and was used against Ronan in the Battle of Xandar?",
                    "choices": [
                        "Benzo Blaster",
                        "Hadron Enforcer",
                        "Turk Emitter",
                        "Turbo Tanker"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q28",
                    "title": "Which of the Guardians was the last one to agree to fight against Ronan while in the Ravagers' ship?",
                    "choices": [
                        "Rocket",
                        "Gamora",
                        "Drax",
                        "Groot"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q29",
                    "title": "What song does Peter Quill sing and dance to in order to distract Ronan before Drax shoots him?",
                    "choices": [
                        "Go All the Way",
                        "O-o-h Child",
                        "Mr. Blue Sky",
                        "I Want You Back"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q30",
                    "title": "Who gets the Orb at the end of Guardians of the Galaxy?",
                    "choices": [
                        "Nova Corps",
                        "The Ravagers",
                        "Ronan",
                        "The Collector"
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
        post_data = {"quiz_name": "Guardians-of-the-Galaxy-Vol1-Quiz", "data": result.data}
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