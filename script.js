let chances;
let form;
let currentCheck;
const max = 4;

//waits for DOM to load so it can correctly count the number of items on the page
document.addEventListener("DOMContentLoaded", function() {
    chances = document.getElementsByClassName("fa-question");
    form = document.getElementsByTagName("form")[0];
    console.log(chances.length);
});

function connectToDatabase() {}

//limits the number of currently selected checkboxes to four
//SHOULD:
//  enable the usually disabled submit button
function checkboxLimit() {
    let currentCheck = form.querySelectorAll('input[class=game-button]:checked').length;
    if (currentCheck >= max) {
        console.log("TOO MUCH");

    }
}


//removes question mark icons to show how many chances are left
function removeChance() {
    let chancesArray = document.querySelectorAll(".fa-question")
    console.log(chancesArray.length)
    // chances[0].remove()
}

