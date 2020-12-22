Survey
    .StylesManager
    .applyTheme("modern");

// get JSON data from "create_quiz" Lambda print output
var json = {
    "title": "Captain America Quiz",
    "showProgressBar": "bottom",
    "startSurveyText": "Start Quiz",
    "pages": [
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q1",
                    "title": "What was Steve Rogers' mother's name?",
                    "choices": [
                        "Sally",
                        "Sarah",
                        "Susan",
                        "Grace"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q2",
                    "title": "What meal did Howard Stark invite Peggy to in front of Steve, who mistook it as an innuendo?",
                    "choices": [
                        "Fondue",
                        "Hot Dogs",
                        "Salad",
                        "Kumquat"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q3",
                    "title": "Who was experimenting on Bucky Barnes with a serum that allowed him to survive his fall from a train in the mountains?",
                    "choices": [
                        "Red Skull",
                        "Armin Zola",
                        "Abraham Erskine",
                        "Peggy Carter"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q4",
                    "title": "When Steve sat down with Bucky in the pub after recruiting the Howling Commandos, which song were the men singing in the background?",
                    "choices": [
                        "Little Brown Jug",
                        "There is a Tavern in Town",
                        "Damsel Dark",
                        "Ring around the Rosie"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q5",
                    "title": "Which actress played the girl Peggy caught Steve kissing?",
                    "choices": [
                        "Katherine Heigl",
                        "Haley Atwell",
                        "Natalie Dormer",
                        "Margot Robbie"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q6",
                    "title": "What infinity stone is the subject of Captain America: The First Avenger, in the form of the Tesseract?",
                    "choices": [
                        "Power Stone",
                        "Time Stone",
                        "Mind Stone",
                        "Space Stone"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q7",
                    "title": "Steve's best friend Bucky Barnes was enlisted in the army. What was his rank?",
                    "choices": [
                        "Private",
                        "Captain",
                        "Major",
                        "Sergeant"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q8",
                    "title": "What happened to Dr. Abraham Erskine following successful serum transfusion of  Steve Rogers?",
                    "choices": [
                        "Promoted within the army",
                        "Shot by Nazi spy",
                        "Creation of more serum",
                        "Nothing happened"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q9",
                    "title": "Who was the officer in command of the division Steve Rogers and Peggy Carter were in?",
                    "choices": [
                        "Chester Phillips",
                        "Samuel Jacobs",
                        "Colin Smith",
                        "Bucky Barnes"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q10",
                    "title": "What rare material is Captain America's shield made out of?",
                    "choices": [
                        "Adamantium",
                        "Vibranium",
                        "Titanium",
                        "Platinum"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q11",
                    "title": "In Captain America the Winter Solider, what is Steve's reason to not go a on date when Natasha tries to set him up?",
                    "choices": [
                        "Too scared",
                        "Too shy",
                        "Too busy",
                        "Already taken"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q12",
                    "title": "Who is the leader of Hydra, the secret organization lurking within SHIELD for decades?",
                    "choices": [
                        "Brock Rumlow",
                        "Jack Rollins",
                        "Jaspar Sitwell",
                        "Alexander Pierce"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q13",
                    "title": "Sharon Carter is introduced as Cap's neighbor in the Winter Solider, posing as a nurse. What is her SHIELD special agent number?",
                    "choices": [
                        "42",
                        "17",
                        "9",
                        "13"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q14",
                    "title": "What were the names of the three Helicarriers Cap and Sam Wilson (Falcon) had to take down to prevent millions of casualties?",
                    "choices": [
                        "Alpha, Beta, Zeta",
                        "Alpha, Bravo, Charlie",
                        "Alpha, Beta, Delta",
                        "Alpha, Bravo, Delta"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q15",
                    "title": "What the name of Sam Wilson's crewmate who got shot down when they both served as pararescue airmen in the army?",
                    "choices": [
                        "Robert",
                        "Riley",
                        "Steven",
                        "Bucky"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q16",
                    "title": "Steve and Natasha discover an undercover Hydra base at the original SHIELD facility in New Jersey, containing Zola's brain. Where in New Jersey was this?",
                    "choices": [
                        "Camp Lehigh",
                        "Camp David",
                        "Camp Rogers",
                        "Camp Carter"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q17",
                    "title": "Who was the name of the French pirate who Steve fought one on one on the Lemeurian Star at the beginning of the Winter Solider?",
                    "choices": [
                        "Georges Batroc",
                        "Antoine Badeaux",
                        "Benoit Blanc",
                        "Lucien Aubert"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q18",
                    "title": "The Winter Solider was Bucky, who had been brainwashed for years by Hydra. What did the Winter Solider say when Steve discovered his identity?",
                    "choices": [
                        "Bucky?",
                        "You're wrong",
                        "Who the hell is Bucky?",
                        "There is no Bucky"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q19",
                    "title": "What was the name of the Apple Store guy who offered to help Steve and Natasha while they were decrpyting a Hydra flash drive in the mall?",
                    "choices": [
                        "Robert",
                        "Aaron",
                        "Bill",
                        "David"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q20",
                    "title": "In the final battle, Nick Fury is piloting a helicopter and attempting to rescue one of the heroes. Which hero jumps from the building and barely lands in the helicopter?",
                    "choices": [
                        "Natasha Romanoff",
                        "Sam Wilson",
                        "Steve Rogers",
                        "Sharon Carter"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q21",
                    "title": "In Captain America Civil War, what is the name of the document Tony Stark supports, but Steve Rogers does not?",
                    "choices": [
                        "Vienna Accords",
                        "Lagos Accords",
                        "Sokovia Accords",
                        "Avengers Accords"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q22",
                    "title": "Which character, played by the great, late Chadwick Boseman, chased Bucky as he was escaping from his ambushed apartment in Bucharest?",
                    "choices": [
                        "Black Panther",
                        "Iron Man",
                        "War Machine",
                        "Ant-Man"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q23",
                    "title": "Which character steals Captain America's shield and takes down both Bucky and Falcon during the airport battle?",
                    "choices": [
                        "Vision",
                        "War Machine",
                        "Spiderman",
                        "Black Panther"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q24",
                    "title": "What was the name of the airport where the battle between Team Cap and Team Iron Man, which left James Rhodes paralzyed, took place?",
                    "choices": [
                        "Hamburg",
                        "Leipzig-Halle",
                        "Hanover",
                        "Bremen"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q25",
                    "title": "What dish does Vision try to create for Wanda, in an awkward attempt at flirtation?",
                    "choices": [
                        "Pizza",
                        "Pierogi",
                        "Pelmeni",
                        "Paprikash"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q26",
                    "title": "Which character, although hopelessly outmatched, rescues Wanda from Vision?",
                    "choices": [
                        "Black Widow",
                        "Spiderman",
                        "Ant-Man",
                        "Hawkeye"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q27",
                    "title": "What is the name of the underwater prison that the remainder of Team Cap is taken to after Steve and Bucky escape (although Steve breaks them out later)?",
                    "choices": [
                        "Atlantis",
                        "The Raft",
                        "The Triskellion",
                        "The Avenger Bubble"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q28",
                    "title": "The revelation of the Winter Soldier killing his parents causes Iron Man to angrily fight both Steve and Bucky. What does Iron Man do to Bucky?",
                    "choices": [
                        "Impales him with Cap's shield",
                        "Knocks him out with",
                        "Blasts his metal arm off",
                        "Calmly acknowledges his mind control"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q29",
                    "title": "What was the name of the villain behind the scenes, orchestrating the events of Civil War?",
                    "choices": [
                        "Zola",
                        "Zemo",
                        "Ross",
                        "Rumlow"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q30",
                    "title": "What food does Ant-Man ask for after transforming to Giant-Man at the airport battle?",
                    "choices": [
                        "Peach Cobbler",
                        "Cherry Pits",
                        "Orange Slices",
                        "Peeled Bananas"
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
        post_data = {"quiz_name": "Captain-America-Quiz", "data": result.data}
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