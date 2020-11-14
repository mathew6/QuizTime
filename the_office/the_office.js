Survey
    .StylesManager
    .applyTheme("modern");

// get JSON data from "create_quiz" Lambda print output
var json = {
    "title": "The Office Quiz",
    "showProgressBar": "bottom",
    "startSurveyText": "Start Quiz",
    "pages": [
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q1",
                    "title": "When Michael and Dwight surprise visit Ryan at a club in NYC, they meet his friend named Troy. Which Tolkien character does Dwight think he is?",
                    "choices": [
                        "Hobbit",
                        "Elf",
                        "Orc",
                        "Dwarf"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q2",
                    "title": "Ryan told the Scranton branch that they had to work on Saturday to input all their sales into the new Dunder Mifflin website. Jim came up with the idea to just work a few hours extra on Friday, but he forgot to ask the security guard to keep the gate unlocked. What was the security guard's name?",
                    "choices": [
                        "Elliot",
                        "Stan",
                        "Johnny",
                        "Hank"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q3",
                    "title": "What are Michael Scott's initials???",
                    "choices": [
                        "MBS",
                        "MOS",
                        "MAS",
                        "MGS"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q4",
                    "title": "Andy sells his car that he claims is a \"chick\" magnet to Dwight... who later flips it for a large profit. What car is it?",
                    "choices": [
                        "Nissan Xterra",
                        "Jeep Wrangler",
                        "Kia Sedona",
                        "Toyota Tacoma"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q5",
                    "title": "After Michael embarrassingly falls into a Koi pond in the lobby where he has a business meeting, he returns to the office and holds a meeting for everyone to list items on a \"Do Not Mock\" board. What does Dwight write down for himself?",
                    "choices": [
                        "Nose too small",
                        "Battlestar Galactica",
                        "Beets",
                        "Cousin Mose"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q6",
                    "title": "The Scranton office went into crisis mode when an inappropriate watermark was found on all paper from their warehouse. Who in The Office was in charge of quality assurance and therefore was responsible for the problem?",
                    "choices": [
                        "Kelly",
                        "Meredith",
                        "Creed",
                        "Darryl"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q7",
                    "title": "Michael figures out that this person is not adventurous enough for him so he breaks up with her on her birthday. What is her name?",
                    "choices": [
                        "Holly",
                        "Helene",
                        "Concierge Marie",
                        "Carol"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q8",
                    "title": "What is Erin from reception's real name?",
                    "choices": [
                        "Jillian",
                        "Harriet",
                        "Alice",
                        "Kelly"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q9",
                    "title": "When Michael has the office play Belles, Bourbon, and Bullets to keep them distracted, who is the killer?",
                    "choices": [
                        "Naughty Nelly - Kelly",
                        "Beatrix Bourbon - Phyllis",
                        "Deb U. Taunt - Pam",
                        "The Butler - Dwight"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q10",
                    "title": "Which game was not in the Dunder Mifflin Office Olympics?",
                    "choices": [
                        "Limbo",
                        "Hate Ball",
                        "Flonkerton",
                        "Dunderball"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q11",
                    "title": "In Season 4 Episode 7, Jim has the idea of combining all the birthdays of that month into one celebration. Creed asks for Peach Cobbler, Meredith asks for Devil's Food cake, and Andy asks for what?",
                    "choices": [
                        "Oreos and Baked Alaska",
                        "Flan and blackberries",
                        "Ice cream cake and mushroom caps",
                        "Fudgy Brownies and blondies"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q12",
                    "title": "When Michael and Jan host a dinner party for Pam and Jim, Angela and Andy, and Dwight... Jan listens to a song that she loves by her assistant Hunter. What is the chorus of that song?",
                    "choices": [
                        "I went from boy to man when I met you Jan",
                        "I love you you more than you love me",
                        "That one night, you made everything all right",
                        "Remember me like I'll remember you in my dreams"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q13",
                    "title": "When Michael tries to survive in the Pennsylvania woods by himself (even though Dwight is keeping an eye on him from afar), what food does he try to eat?",
                    "choices": [
                        "Wild berries",
                        "Wild mushrooms",
                        "Deer",
                        "Squirrel"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q14",
                    "title": "How long did Jim wait to buy Pam's wedding ring?",
                    "choices": [
                        "One day after they met",
                        "One week after they met",
                        "One day after they started dating",
                        "One week after they started dating"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q15",
                    "title": "In Season 2 Episode 1, who wins the Hottest in the Office award?",
                    "choices": [
                        "Pam",
                        "Ryan",
                        "Michael",
                        "Jim"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q16",
                    "title": "In the Season 2 Christmas party episode, the Secret Santa cost cap is $20. What overly expensive gift does Michael give Ryan?",
                    "choices": [
                        "iPod",
                        "Plasma TV",
                        "PlayStation 3",
                        "Xbox"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q17",
                    "title": "How long were Pam and Roy engaged?",
                    "choices": [
                        "6 months",
                        "1 year",
                        "2 years",
                        "3 years"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q18",
                    "title": "When the office goes on the booze cruise (which was on a frigid January day...), Jim bets his first paycheck that Michael will say what phrase at the front of the boat within the first hour?",
                    "choices": [
                        "I am the captain now!",
                        "I am a merman!",
                        "I'm king of the world!",
                        "Hand me the Triton!"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q19",
                    "title": "When Michael asks Ryan to join his \"Dream Team\", where does he find him currently working?",
                    "choices": [
                        "Fast food joint",
                        "Roller rink",
                        "Bowling alley",
                        "Nursing home"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q20",
                    "title": "Michael was not fond of his old boss... What was his name?",
                    "choices": [
                        "Fred Tuck",
                        "Todd Packer",
                        "Red Muck",
                        "Ed Truck"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q21",
                    "title": "Someone put a \"smelly\" package in Michael's office. It was so bad that Roy and Darryl had to rip out the carpet. Who was the culprit of the crime?",
                    "choices": [
                        "Todd Packer",
                        "Ryan Howard",
                        "Toby Flenderson",
                        "Jan Levinson"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q22",
                    "title": "Pam was annoyed that Jim wouldn't admit that he finds Cathy attractive. In order to see if Jim was attracted to the new receptionist (Cathy), who pretends to fall over but then proceeds to grab Jim's crotch area while Jim and Cathy are talking?",
                    "choices": [
                        "Oscar Martinez",
                        "Creed Bratton",
                        "Dwight Schrute",
                        "Kelly Kapoor"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q23",
                    "title": "In the Season 8 Christmas party episode, Jim and Dwight try to frame each other for pranks that each of them did not actually commit. Dwight attempts to fool Andy into believing that Jim put a porcupine in his desk drawer, but we find out quickly that the porcupine is actually Dwight's.. what is it's name?",
                    "choices": [
                        "Mose",
                        "Henrietta",
                        "Angelina",
                        "Angelica"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q24",
                    "title": "Who was NOT a love interest of Michael's?",
                    "choices": [
                        "Jessica - One of Oscar's many female friends",
                        "Marie - Concierge at his hotel in Winnipeg",
                        "Carol - His Real Estate agent",
                        "Nikki - The Benihana Waitress"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q25",
                    "title": "Pam had her second baby around the same time that Angela had her first. Angela names her baby after her favorite cat while Pam names hers after her grandfather... turns out they had the same name. What was that name?",
                    "choices": [
                        "Andrew",
                        "Jackson",
                        "Dwight",
                        "Phillip"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q26",
                    "title": "Which two warehouse workers created an energy drink company with the primary flavor as 'coconut penis'?",
                    "choices": [
                        "Darryl Philbin and Hidetoshi Hasagawa",
                        "Roy Anderson and Nate Nickerson",
                        "Nate Nickerson and Hidetoshi Hasagawa",
                        "Roy Anderson and Hidetoshi Hasagawa"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q27",
                    "title": "Dwight says that he is deep inside of Perfectenschlag when he gets to prove himself to corporate and he is possibly the father of Angela's son. Perfectenschlag means \"When everything in a man's life comes together perfectly\", but what is the alternative definition?",
                    "choices": [
                        "Perfect sex",
                        "A perfect toe",
                        "A perfect pork anus",
                        "A perfectly carved face"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q28",
                    "title": "Which of these characters is lactose intolerant?",
                    "choices": [
                        "Meredith",
                        "Ryan",
                        "Stanley",
                        "Kevin"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q29",
                    "title": "Actor Timothy Olyphant plays this character who dated Pam long ago and was a very successful paper salesman at the small Osprey company, a Dunder Mifflin competitor",
                    "choices": [
                        "Danny Cordray",
                        "Gabe Lewis",
                        "Pete Miller",
                        "Josh Porter"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q30",
                    "title": "Who \"adopts\" the child that Ryan abandoned for a new life with Kelly?",
                    "choices": [
                        "Pam",
                        "Nellie",
                        "Jan",
                        "Phyllis"
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
        post_data = {"quiz_name": "The-Office-Quiz", "data": result.data}
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