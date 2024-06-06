// import { initGameBoard } from './database.js'

const max = 4;
let darkMode = localStorage.getItem("darkMode");

//ensures only 4 total game-buttons can be selected at once
document.addEventListener("DOMContentLoaded", function() {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            let checked = document.querySelectorAll('input[type="checkbox"]:checked').length;
            if (checked > max) {this.checked = false;}
            if (checked === max) {
                checkboxes.forEach(function (otherCheckbox){
                    if (!otherCheckbox.checked) {otherCheckbox.disabled = true;}
                });
            } else {
                checkboxes.forEach(function (otherCheckbox){
                    otherCheckbox.disabled = false;
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const [darkModeToggle] = document.querySelectorAll("#lightswitch");
    const enableDarkMode = () => {
        document.body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "enabled");
    };
    const disableDarkMode = () => {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", null);
    };
    if (darkMode === "enabled") {
        enableDarkMode()
    }
    darkModeToggle.addEventListener("click", () => {
        darkMode = localStorage.getItem("darkMode");
        if (darkMode !== "enabled") {enableDarkMode()} else {
            disableDarkMode();
        }
    })
});

//fetches data from DB to initialize first tile titles
document.addEventListener("DOMContentLoaded", () => {

 });

//element.addEventListener("input"); //on tile selection

//removes question mark icons to show how many chances are left
function removeChance() {
    let chancesArray = document.querySelectorAll(".fa-question")
    console.log(chancesArray.length)
    //chancesArray[0].remove();
}

