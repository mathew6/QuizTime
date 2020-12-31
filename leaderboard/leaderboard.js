let endpoint = "https://3ed94zmyfc.execute-api.us-east-1.amazonaws.com/get_leaderboard";
$.getJSON(endpoint, function(data){
    CreateTableFromJSON(data["Modern-Family-Quiz-Leaderboard"], "Modern Family Quiz", "modernFamilyLeaderboard");
    CreateTableFromJSON(data["The-Office-Quiz-Leaderboard"], "The Office Quiz", "theOfficeLeaderboard");
    CreateTableFromJSON(data["Harry-Potter-Quiz-Leaderboard"], "Harry Potter Quiz", "harryPotterLeaderboard");
    CreateTableFromJSON(data["Captain-America-Quiz-Leaderboard"], "Captain America Quiz", "captainAmericaLeaderboard");
    CreateTableFromJSON(data["Guardians-of-the-Galaxy-Vol1-Quiz-Leaderboard"], "Guardians of the Galaxy Vol1 Quiz", "guardiansOfTheGalaxyVol1Leaderboard");
    // Add more tables here whenever you make a new quiz...
});

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