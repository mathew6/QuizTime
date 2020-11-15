Survey
    .StylesManager
    .applyTheme("modern");

// get JSON data from "create_quiz" Lambda print output
var json = {
    "title": "Harry-Potter-Quiz",
    "showProgressBar": "bottom",
    "startSurveyText": "Start Quiz",
    "pages": [
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q1",
                    "title": "Who is Harry Potter's annoying cousin who tortures him during his childhood?",
                    "choices": [
                        "Draco",
                        "Dudley",
                        "Albus",
                        "Severus"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q2",
                    "title": "These beings are considered Lord Voldemort's inner circle and have the Dark Mark burned into their left forearms.",
                    "choices": [
                        "Dementors",
                        "Boggarts",
                        "Basilisk",
                        "Death Eaters"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q3",
                    "title": "Ron's hand-me-down pet rat named Scabbers has a secret. In Harry Potter and the Prisoner of Askaban who is he revealed to actually be?",
                    "choices": [
                        "Lucius Malfoy",
                        "Peter Pettigrew",
                        "Sirius Black",
                        "Remus Lupin"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q4",
                    "title": "House elves play an important part in the plot line of the Harry Potter series. They are magical beings that are immensely loyal to their masters. House Elves can be freed if their masters give them a piece of their clothing. Who was Dobby, the house elf, freed from after receiving a sock in Harry Potter and The Chamber of Secrets?",
                    "choices": [
                        "Albus Dumbledore",
                        "Severus Snape",
                        "Lucius Malfoy",
                        "Gellert Grindelwald"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q5",
                    "title": "What is Hermione's middle name?",
                    "choices": [
                        "Jean",
                        "Jillian",
                        "Jane",
                        "Janette"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q6",
                    "title": "What is the name of the three-headed dog that protects the entrance to the Sorcerer's Stone?",
                    "choices": [
                        "Pooch",
                        "Musketeer",
                        "Fluffy",
                        "Chewy"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q7",
                    "title": "The Defense Against the Dark Arts professors changed basically every year. Who taught the course in Harry Potter and The Chamber of Secrets?",
                    "choices": [
                        "Quirinus Quirrell",
                        "Remus Lupin",
                        "Dolores Umbridge",
                        "Gilderoy Lockhart"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q8",
                    "title": "Ron Weasley has twin brothers, Fred and George, who are big pranksters. They founded a joke shop later in the series called what?",
                    "choices": [
                        "Weasleys' Weasels",
                        "Weasleys' Wizard Wheezes",
                        "Wiz Dizzery",
                        "Wizards and Lizards"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q9",
                    "title": "Harry's Patronus is a stag and Hermione's is an otter. what is Ron's Patronus?",
                    "choices": [
                        "Walrus",
                        "Non-Corporeal",
                        "Jack Russell Terrier",
                        "Horse"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q10",
                    "title": "What material in Harry's first wand was also at the core of Tom Riddle's wand",
                    "choices": [
                        "Dumbledore's bone marrow",
                        "Phoenix feather",
                        "Stag hair",
                        "Basilisk scales"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q11",
                    "title": "In Harry Potter and The Sorcerer's Stone, who gifted Harry the Invisibility Cloak?",
                    "choices": [
                        "Albus Dumbledore",
                        "Sirius Black",
                        "Arthur Weasley",
                        "Horace Slughorn"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q12",
                    "title": "Xenophilius Lovegood explained to Harry that his necklace represents the Deathly Hallows. What are the three magical objects that make up the Deathly Hallows?",
                    "choices": [
                        "Elder Wand, Fawkes Feather, Basilisk Tooth",
                        "Elder Wand, Basilisk Tooth, Resurrection Stone",
                        "Elder Wand, Resurrection Stone, Invisibility Cloak",
                        "Elder Wand, Fawkes Feather, Invisibility Cloak"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q13",
                    "title": "Tom Riddle asked one of his professors for an expert opinion on creating multiple Horcruxes (used to achieve immortality by splitting a dark wizard's soul into separate pieces). Who was that professor?",
                    "choices": [
                        "Horace Slughorn",
                        "Severus Snape",
                        "Dolores Umbridge",
                        "Albus Dumbledore"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q14",
                    "title": "Which of these is NOT one of the seven Horcruxes?",
                    "choices": [
                        "Helga Hufflepuff's Cup",
                        "Rowena Ravenclaw's Diadem",
                        "Salazar Slytherin's Locket",
                        "Sword of Gryffindor"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q15",
                    "title": "How many siblings does Ron have?",
                    "choices": [
                        "4",
                        "5",
                        "6",
                        "7"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q16",
                    "title": "During the Triwizard Tournament, there is a special Yule Ball. Harry and Ron accompany the Patil twin sisters, Victor Krum accompanies Hermione, but who accompanies Draco Malfoy?",
                    "choices": [
                        "Ginny Weasley",
                        "Maria Tyrano",
                        "Blaise Zabini",
                        "Pansy Parkinson"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q17",
                    "title": "There are three rounds in the Triwizard Tournament. What is the breed of the fierce dragon that Harry faces in the first round?",
                    "choices": [
                        "Romanian Longhorn",
                        "Chinese Fireball",
                        "Ukrainian Ironbelly",
                        "Hungarian Horntail"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q18",
                    "title": "Who destroys the seventh and final Horcrux by beheading Nagini?",
                    "choices": [
                        "Neville Longbottom",
                        "Harry Potter",
                        "Hermione Granger",
                        "Ron Weasley"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q19",
                    "title": "Professor Umbridge tried to banish this Professor of Divination from the Hogwarts Castle but Dumbledore said she could stay. What was the professor's name? HINT: Think Tea Leaves!",
                    "choices": [
                        "Professor McGonagall",
                        "Professor Flitwick",
                        "Professor Trelawney",
                        "Professor Sprout"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q20",
                    "title": "Who was the male House Elf who served the House of Black with strict loyalty for most of his life?",
                    "choices": [
                        "Winky",
                        "Kreacher",
                        "Hokey",
                        "Pitts"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q21",
                    "title": "Professor Filius Flitwick, who is a Part-Goblin Wizard and was the Charms master at Hogwarts, was Head of which House?",
                    "choices": [
                        "Gryffindor",
                        "Slytherin",
                        "Ravenclaw",
                        "Hufflepuff"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q22",
                    "title": "Luna can see Thestrals just like Harry can because she witnesses her mother's death when she is just nine years old. What was her mother's name?",
                    "choices": [
                        "Pandora Lovegood",
                        "Trisha Lovegood",
                        "Teresa Lovegood",
                        "Pamela Lovegood"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q23",
                    "title": "Moaning Myrtle is a ghost of a female student that can be found crying in girls' lavatories often (and crushing on Harry Potter). What killed her?",
                    "choices": [
                        "Bath",
                        "Basilisk",
                        "Banshee",
                        "Boggart"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q24",
                    "title": "Argus Filch has quite an attraction to his pet cat. What is its name?",
                    "choices": [
                        "Mr. Norris",
                        "Mrs. Norris",
                        "Mr. Bean",
                        "Mrs. Bean"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q25",
                    "title": "Rita Skeeter likes to \"embellish\" stories to hook her audience. What is the name of the newspaper that she writes for during the Triwizard Tournament?",
                    "choices": [
                        "The Guardian",
                        "The Wizard's Voice",
                        "The Quibbler",
                        "Whimsical Wiz"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q26",
                    "title": "Hagrid's giantess mother, Fridwulfa, has another child who is Hagrid's half-brother. What is his name?",
                    "choices": [
                        "Grawp",
                        "Loopy",
                        "Brawnch",
                        "Tawp"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q27",
                    "title": "In Harry Potter and the Half-Blood Prince, Horace Slughorn accompanies Harry Potter to Hagrid's cabin for Aragog's funeral to obtain what highly valuable fluid that is secreted from the pincers of Aragog?",
                    "choices": [
                        "Banshee venom",
                        "Tigris venom",
                        "Apartitia venom",
                        "Acromantula venom"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q28",
                    "title": "What is the name of Harry Potter and Ginny Weasley's daughter?",
                    "choices": [
                        "Lily Cho Potter",
                        "Lily Luna Potter",
                        "Lily Hermione Potter",
                        "Molly Hermione Potter"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q29",
                    "title": "Cedric Diggory was a prefect and captained the Hufflepuff Quidditch team. What position did he play in Quidditch?",
                    "choices": [
                        "Chaser",
                        "Seeker",
                        "Beater",
                        "Keeper"
                    ]
                }
            ]
        },
        {
            "questions": [
                {
                    "type": "radiogroup",
                    "name": "q30",
                    "title": "What shop would Harry say is the best place to buy a wand in Diagon Alley?",
                    "choices": [
                        "Cosme Acajor",
                        "Ollivanders",
                        "Jimmy Kiddell's Wonderful Wands",
                        "Whimsy Wands"
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
        post_data = {"quiz_name": "Harry-Potter-Quiz", "data": result.data}
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