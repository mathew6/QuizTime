Survey
    .StylesManager
    .applyTheme("modern");

// get JSON data from "create_quiz" Lambda print output
var json = {
    title: "Modern Family Quiz",
    showProgressBar: "bottom",
    startSurveyText: "Start Quiz",
    pages: [
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "q1",
                    title: "What song does Cam play when baby Lily is introduced to the family?",
                    choices: [
                        "Circle of Life (Lion King)",
                        "I'll Make a Man out of You (Mulan)",
                        "Colors of the Wind (Pocohontas)",
                        "A Dream is a Wish your Heart Makes (Cinderella)"
                    ]
                },
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "q2",
                    title: "Cam and Mitch found out that they had chemistry when Cam correctly answered what charades movie name that Mitch barely acted out?",
                    choices: [
                        "Casablanca",
                        "Kramer vs. Kramer",
                        "Good Fellas",
                        "Pretty Woman"
                    ]
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "q3",
                    title: "After Jay accidentally killed Manny's pet turtle, he lied about the incident because he regretted telling Mitch about killing what pet of his long ago?",
                    choices: [
                        "Dog",
                        "Cat",
                        "Parrot",
                        "Snake"
                    ]
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "q4",
                    title: "In the episode where Phil builds the tree house that he thought Luke always wanted, Andre (next door neighbor and played by Kevin Hart) offers to help out with the tree house. What is Andre's profession?",
                    choices: [
                        "Orthopedic surgeon",
                        "Software Engineer",
                        "Venture capitalist",
                        "Landscaper"
                    ]
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "q5",
                    title: "What is the name of the Realtor award ceremony that Phil claims is the \"Oscars\" for Realtors?",
                    choices: [
                        "NCAB",
                        "SCAB",
                        "SCARB",
                        "SCAR"
                    ]
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "q6",
                    title: "In the fancy Las Vegas hotel that the family (all the adults) goes to, what is the name of the \"top\" level that Jay thinks he's on?",
                    choices: [
                        "Elite",
                        "Platinum",
                        "Excelsior",
                        "Intrepid"
                    ]
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "q7",
                    title: "Where was Phil conceived? (Yes you read that right)",
                    choices: [
                        "Kenya",
                        "Canada",
                        "Australia",
                        "Mexico"
                    ]
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "q8",
                    title: "Who is Phil and Claire's next door neighbor who got divorced (scared Phil into thinking he wasn't pleasing Claire enough) and hired Phil to sell his house?",
                    choices: [
                        "Greg",
                        "Alan",
                        "Johnny",
                        "Jerry"
                    ]
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "q9",
                    title: "What does Jay call his new sock dispenser idea that he made out of a 12 pack box of Coke?",
                    choices: [
                        "Sock it to Me",
                        "Rock and Sock",
                        "Blocks of Socks",
                        "Sock and Roll"
                    ]
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "q10",
                    title: "Who destroyed the pornographic statue in Phil and Claire's neighborhood?",
                    choices: [
                        "Phil",
                        "Claire",
                        "Ronnie",
                        "Amber"
                    ]
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "q11",
                    title: "What is the name of Jay's old business partner who later formed an intense rivalry with Jay?",
                    choices: [
                        "Earl",
                        "Merl",
                        "Bobby",
                        "Johnny"
                    ]
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "q12",
                    title: "Which university did Cam play football for?",
                    choices: [
                        "University of Missouri",
                        "University of Illinois",
                        "Ole Miss",
                        "The Ohio State University"
                    ]
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "q13",
                    title: "What is the name of Cam's beloved pet pig whose ashes are in Mitch and Cam's garage?",
                    choices: [
                        "Lily",
                        "Eli",
                        "Peyton",
                        "Bippy"
                    ]
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "q14",
                    title: "Who was Claire's Ex-Boyfriend who Phil thought Claire regretted not marrying?",
                    choices: [
                        "Richard Pennington",
                        "Jessy McGee",
                        "Nate Johnson",
                        "Bobby Nash"
                    ]
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "q15",
                    title: "Who is Mitch's favorite superhero that he embarrassingly dresses up as at his office for Halloween?",
                    choices: [
                        "Spiderman",
                        "Wonder Woman",
                        "Thor",
                        "Batman"
                    ]
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "q16",
                    title: "Where did Mitch and Cam have their wedding?",
                    choices: [
                        "Golf course",
                        "Banquet hall",
                        "Botanical garden",
                        "Their home"
                    ]
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "q17",
                    title: "Who didn't show up to Mitch and Cam's wedding?",
                    choices: [
                        "Jay",
                        "Dede",
                        "Gloria",
                        "Haley"
                    ]
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "q18",
                    title: "Andy's ex-girlfriend Beth was in the Coast Guard. Where did she serve?",
                    choices: [
                        "California",
                        "New York",
                        "Utah",
                        "Oregon"
                    ]
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "q19",
                    title: "What is the high school mascot for the football team that Manny plays for and Uncle Cam coaches?",
                    choices: [
                        "Wild Cats",
                        "Dolphins",
                        "Tigers",
                        "Dingos"
                    ]
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "q20",
                    title: "What university did Alex decide to go to?",
                    choices: [
                        "UCLA",
                        "Berkeley",
                        "MIT",
                        "Cal Tech"
                    ]
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "q21",
                    title: "Jay and his rival used to run a company called Closetfornia together until his rival decided to create his own company called what?",
                    choices: [
                        "Closetania",
                        "Closets Closets Closets",
                        "Closets Closets Closets Closets",
                        "Closets Closets Closets Closets Closets"
                    ]
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "q22",
                    title: "After the Dunphy's received an anonymous white rose at the door, they were surprised to find out that Alex has a boyfriend who models and is soon moving to Africa. Everyone is doubtful of this mystery man but what was his name?",
                    choices: [
                        "Big Al",
                        "Alec",
                        "Allen",
                        "Alexis"
                    ]
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "q23",
                    title: "Some consider Modern Family one of ABC's most successful shows. How many Emmy Awards has Modern Family won?",
                    choices: [
                        "8",
                        "22",
                        "34",
                        "39"
                    ]
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "q24",
                    title: "How many Emmy Awards has Modern Family been nominated for?",
                    choices: [
                        "22",
                        "35",
                        "71",
                        "82"
                    ]
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "q25",
                    title: "Sal is first seen pregnant in Mitchell and Cameron's wedding, where she is trying to convince her current boyfriend that she is only four months pregnant when she is actually close to nine. Who is the REAL father???",
                    choices: [
                        "A Lakers Player",
                        "A Trail Blazers Player",
                        "A 49ers Player",
                        "A Chicago Blackhawks Player"
                    ]
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "q26",
                    title: "Mitchell and Cameron organize a baby shower for Sal, who then seems to abandon her son with them. Mitchell and Cameron compete with Pepper and Ronaldo over who should now adopt Sal's son (Sal ends up returning...). What is her son's name?",
                    choices: [
                        "Salmon",
                        "Sammy",
                        "Sunderson",
                        "Karma"
                    ]
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "q27",
                    title: "Where does Manny end up going to University?",
                    choices: [
                        "Cornell",
                        "California Institute of Arts",
                        "Juilliard",
                        "Pratt Institute"
                    ]
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "q28",
                    title: "Cam's sister has a baby boy named Calhoun (Cal) with Cam's first crush, Bo Johnson. What is Cam's sister's name?",
                    choices: [
                        "Kamala",
                        "Tamarind",
                        "Pameron",
                        "Lisa"
                    ]
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "q29",
                    title: "Cam has four rivals throughout the Modern Family series. Senor Kaplan, the Spanish teacher at the high school Cam teaches; Andrew, a member of the A Capella group Cam formed called The Greensleevers; Todd the bag boy who always puts Cam's canned goods over his produce; and which OTHER person?",
                    choices: [
                        "Martin Sherman",
                        "Jacoby Maloggi",
                        "Longines St. Jermaine",
                        "Larry Snyder"
                    ]
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "q30",
                    title: "Gloria's ex-husband was an \"excellent lover\" but was not into the committed relationship that Gloria wanted. He showed his lack of commitment to his family when he tells Jay (not Manny) that he can't drag himself away from the craps table to take Manny to what place?",
                    choices: [
                        "Yosemite",
                        "Lego Land",
                        "Disney World",
                        "Disney Land"
                    ]
                }
            ]
        },
        {
            questions: [
                {
                    name: "name",
                    type: "text",
                    title: "Please enter your nickname:",
                    placeHolder: "Insert Nickname Here...",
                    isRequired: "true"
                }
            ]
        }
    ],
    showQuestionNumbers: "on",
    completedHtml: "<h4 id=\"result\">Your Score is Loading....</h4>"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        post_data = {"quiz_name": "Modern-Family-Quiz", "data": result.data}
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