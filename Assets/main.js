var timer = document.querySelector("#timer");
var body = document.querySelector("#display");
var startButton = document.querySelector("#start");

timer.textContent = "Time: " + 75;
var secondsLeft = 75;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to list score
      //Still need to create this function
    }

  }, 1000);
}



//Start Quiz function
startButton.addEventListener("click", function() {
    //Start the quiz by showing the first question
    question1();
    //Start the timer
    setTime();
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
    var incorrect = document.querySelector("#wrong");

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
        question2();
    });

}

//Question 2 function
function question2() {
    var main = document.querySelector("#display");
    main.innerHTML = ``;
    main.innerHTML += `
        <h1>The condition in an if / else statement is enclosed with _______:</h1>
        <ol>
            <li><button id="correct">Parenthesis</button></li>
            <li><button id="wrong">Curly Brackets</button></li>
            <li><button id="wrong">Quotes</button></li>
            <li><button id="wrong">Square Brackets</button></li>
        </ol>
        <br>
    `
    var answer = document.querySelector("#correct");
    var incorrect = document.querySelector("#wrong");

    answer.addEventListener("click", function(event) {
        event.preventDefault();

        if(answer) {
            main.innerHTML += `
                <p>Correct!</p>
            `;
        } 
        else if (incorrect) {
            main.innerHTML += `
                <p>Wrong!</p>
            `;
        }
        question3();
    });

}

//Question 3 function
function question3() {
    var main = document.querySelector("#display");
    main.innerHTML = ``;
    main.innerHTML += `
        <h1>Arrays in JavaScript can be used to store _______:</h1>
        <ol>
            <li><button id="wrong">Numbers and Strings</button></li>
            <li><button id="wrong">Other Arrays</button></li>
            <li><button id="wrong">Booleans</button></li>
            <li><button id="correct">All of the above</button></li>
        </ol>
        <br>
    `
    var answer = document.querySelector("#correct");
    var incorrect = document.querySelector("#wrong");

    answer.addEventListener("click", function(event) {
        event.preventDefault();

        if(answer) {
            main.innerHTML += `
                <p>Correct!</p>
            `;
        } 
        else if (incorrect) {
            main.innerHTML += `
                <p>Wrong!</p>
            `;
        }
        question4();
    });

}

//Question 4 function
function question4() {
    var main = document.querySelector("#display");
    main.innerHTML = ``;
    main.innerHTML += `
        <h1>String values must be enclosed within _______ when being assigned to variables:</h1>
        <ol>
            <li><button id="wrong">Commas</button></li>
            <li><button id="correct">Quotes</button></li>
            <li><button id="wrong">Curly braces</button></li>
            <li><button id="wrong">Parenthesis</button></li>
        </ol>
        <br>
    `
    var answer = document.querySelector("#correct");
    var incorrect = document.querySelector("#wrong");

    answer.addEventListener("click", function(event) {
        event.preventDefault();

        if(answer) {
            main.innerHTML += `
                <p>Correct!</p>
            `;
        } 
        else if (incorrect) {
            main.innerHTML += `
                <p>Wrong!</p>
            `;
        }
        question5();
    });

}

//Question 5 function
function question5() {
    var main = document.querySelector("#display");
    main.innerHTML = ``;
    main.innerHTML += `
        <h1>A very useful tool used during development and debugging for printing content to the debugger is:</h1>
        <ol>
            <li><button id="wrong">JavaScript</button></li>
            <li><button id="wrong">Terminal/Bash</button></li>
            <li><button id="wrong">For Loops</button></li>
            <li><button id="correct">Console Log</button></li>
        </ol>
        <br>
    `
    var answer = document.querySelector("#correct");
    var incorrect = document.querySelector("#wrong");

    answer.addEventListener("click", function(event) {
        event.preventDefault();

        if(answer) {
            main.innerHTML += `
                <p>Correct!</p>
            `;
        } 
        else if (incorrect) {
            main.innerHTML += `
                <p>Wrong!</p>
            `;
        }
        results();
    });

}

//Results Page
function results(score) {
    var main = document.querySelector("#display");
    main.innerHTML = ``;
    main.innerHTML += `
        <h1>All done!</h1>
        <p>Your final score is ${score}</p>
        
            <label for="initials">Enter initials:</label>
            <input type="text" id="initials">
            <button id="submitScore">Submit</button>
        
    `

}