var timer = document.querySelector("#timer");
var body = document.querySelector("#display");
var startButton = document.querySelector("#start");

//Start Quiz function

startButton.addEventListener("click", function() {
    question1();
});



//Question 1 function
function question1() {
    var main = document.querySelector("#display");
    main.innerHTML = ``;
    main.innerHTML += `
        <h1>Commonly used data types DO NOT include:</h1>
        <ol>
            <li><button id="wrong">Strings</button></li>
            <li><button id="wrong">Booleans</button></li>
            <li><button id="correct">Alerts</button></li>
            <li><button id="wrong">Numbers</button></li>
        </ol>
        <br>
    `
    var answer = document.querySelector("#correct");
    var incorrect = document.querySelector("wrong");

    answer.addEventListener("click", function(event) {
        event.preventDefault();

        if(answer) {
            main.innerHTML += `
                <p>Correct!</p>
            `;
        } 
        if (incorrect) {
            main.innerHTML += `
                <p>Wrong!</p>
            `;
        }
    });

}

// question1();