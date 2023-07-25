var home = document.querySelector("#home");
var timer = document.querySelector("#timer");
var main = document.querySelector("#display");
var startButton = document.querySelector("#start");

//Setting timer
timer.textContent = "Time: " + 75;
var secondsLeft = 75;

var called = false;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to list score
      results(0);
    } else if (called) {
        clearInterval(timerInterval);
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
    main.innerHTML = ``;
    main.innerHTML += `
        <h1>Commonly used data types DO NOT include:</h1>
        <ol>
            <li><button id="wrong1">Strings</button></li>
            <li><button id="wrong2">Booleans</button></li>
            <li><button id="correct">Alerts</button></li>
            <li><button id="wrong3">Numbers</button></li>
        </ol>
        <br>
    `
    var answer = document.querySelector("#correct");
    var wrong1 = document.querySelector("#wrong1");
    var wrong2 = document.querySelector("#wrong2");
    var wrong3 = document.querySelector("#wrong3");

    wrong1.addEventListener("click", function() {
        if (wrong1) {
            main.innerHTML += `
                <p>Wrong!</p>
            `;
            secondsLeft -= 10;
        }
        question2();
    });
    wrong2.addEventListener("click", function() {
        if (wrong2) {
            main.innerHTML += `
                <p>Wrong!</p>
            `;
            secondsLeft -= 10;
        }
        question2();
    });
    wrong3.addEventListener("click", function() {
        if (wrong3) {
            main.innerHTML += `
                <p>Wrong!</p>
            `;
            secondsLeft -= 10;
        }
        question2();
    });

    answer.addEventListener("click", function() {
        if(answer) {
            main.innerHTML += `
                <p>Correct!</p>
            `;
        } 
        question2();
    });

}

//Question 2 function
function question2() {
    main.innerHTML = ``;
    main.innerHTML += `
        <h1>The condition in an if / else statement is enclosed with _______:</h1>
        <ol>
            <li><button id="correct">Parenthesis</button></li>
            <li><button id="wrong1">Curly Brackets</button></li>
            <li><button id="wrong2">Quotes</button></li>
            <li><button id="wrong3">Square Brackets</button></li>
        </ol>
        <br>
    `
    var answer = document.querySelector("#correct");
    var wrong1 = document.querySelector("#wrong1");
    var wrong2 = document.querySelector("#wrong2");
    var wrong3 = document.querySelector("#wrong3");

    wrong1.addEventListener("click", function() {
        if (wrong1) {
            main.innerHTML += `
                <p>Wrong!</p>
            `;
            secondsLeft -= 10;
        }
        question3();
    });
    wrong2.addEventListener("click", function() {
        if (wrong2) {
            main.innerHTML += `
                <p>Wrong!</p>
            `;
            secondsLeft -= 10;
        }
        question3();
    });
    wrong3.addEventListener("click", function() {
        if (wrong3) {
            main.innerHTML += `
                <p>Wrong!</p>
            `;
            secondsLeft -= 10;
        }
        question3();
    });

    answer.addEventListener("click", function() {
        if(answer) {
            main.innerHTML += `
                <p>Correct!</p>
            `;
        } 
        question3();
    });

}

//Question 3 function
function question3() {
    main.innerHTML = ``;
    main.innerHTML += `
        <h1>Arrays in JavaScript can be used to store _______:</h1>
        <ol>
            <li><button id="wrong1">Numbers and Strings</button></li>
            <li><button id="wrong2">Other Arrays</button></li>
            <li><button id="wrong3">Booleans</button></li>
            <li><button id="correct">All of the above</button></li>
        </ol>
        <br>
    `
    var answer = document.querySelector("#correct");
    var wrong1 = document.querySelector("#wrong1");
    var wrong2 = document.querySelector("#wrong2");
    var wrong3 = document.querySelector("#wrong3");

    wrong1.addEventListener("click", function() {
        if (wrong1) {
            main.innerHTML += `
                <p>Wrong!</p>
            `;
            secondsLeft -= 10;
        }
        question4();
    });
    wrong2.addEventListener("click", function() {
        if (wrong2) {
            main.innerHTML += `
                <p>Wrong!</p>
            `;
            secondsLeft -= 10;
        }
        question4();
    });
    wrong3.addEventListener("click", function() {
        if (wrong3) {
            main.innerHTML += `
                <p>Wrong!</p>
            `;
            secondsLeft -= 10;
        }
        question4();
    });

    answer.addEventListener("click", function() {
        if(answer) {
            main.innerHTML += `
                <p>Correct!</p>
            `;
        } 
        question4();
    });

}

//Question 4 function
function question4() {
    main.innerHTML = ``;
    main.innerHTML += `
        <h1>String values must be enclosed within _______ when being assigned to variables:</h1>
        <ol>
            <li><button id="wrong1">Commas</button></li>
            <li><button id="correct">Quotes</button></li>
            <li><button id="wrong2">Curly braces</button></li>
            <li><button id="wrong3">Parenthesis</button></li>
        </ol>
        <br>
    `
    var answer = document.querySelector("#correct");
    var wrong1 = document.querySelector("#wrong1");
    var wrong2 = document.querySelector("#wrong2");
    var wrong3 = document.querySelector("#wrong3");

    wrong1.addEventListener("click", function() {
        if (wrong1) {
            main.innerHTML += `
                <p>Wrong!</p>
            `;
            secondsLeft -= 10;
        }
        question5();
    });
    wrong2.addEventListener("click", function() {
        if (wrong2) {
            main.innerHTML += `
                <p>Wrong!</p>
            `;
            secondsLeft -= 10;
        }
        question5();
    });
    wrong3.addEventListener("click", function() {
        if (wrong3) {
            main.innerHTML += `
                <p>Wrong!</p>
            `;
            secondsLeft -= 10;
        }
        question5();
    });

    answer.addEventListener("click", function() {
        if(answer) {
            main.innerHTML += `
                <p>Correct!</p>
            `;
        } 
        question5();
    });

}

//Question 5 function
function question5() {
    main.innerHTML = ``;
    main.innerHTML += `
        <h1>A very useful tool used during development and debugging for printing content to the debugger is:</h1>
        <ol>
            <li><button id="wrong1">JavaScript</button></li>
            <li><button id="wrong2">Terminal/Bash</button></li>
            <li><button id="wrong3">For Loops</button></li>
            <li><button id="correct">Console Log</button></li>
        </ol>
        <br>
    `
    var answer = document.querySelector("#correct");
    var wrong1 = document.querySelector("#wrong1");
    var wrong2 = document.querySelector("#wrong2");
    var wrong3 = document.querySelector("#wrong3");

    wrong1.addEventListener("click", function() {
        if (wrong1) {
            main.innerHTML += `
                <p>Wrong!</p>
            `;
            secondsLeft -= 10;
        }
        results();
    });
    wrong2.addEventListener("click", function() {
        if (wrong2) {
            main.innerHTML += `
                <p>Wrong!</p>
            `;
            secondsLeft -= 10;
        }
        results();
    });
    wrong3.addEventListener("click", function() {
        if (wrong3) {
            main.innerHTML += `
                <p>Wrong!</p>
            `;
            secondsLeft -= 10;
        }
        results();
    });

    answer.addEventListener("click", function() {
        if(answer) {
            main.innerHTML += `
                <p>Correct!</p>
            `;
        } 
        results();
    });

}

//Results Page
function results() {
    called = true;
    score = secondsLeft;
    secondsLeft += 1;
    main.innerHTML = ``;
    main.innerHTML += `
        <h1>All done!</h1>
        <p>Your final score is ${score}</p>
        
        <label for="initials">Enter initials:</label>
        <input type="text" id="initials">
        <button id="submitScore">Submit</button>
    `
    var submit = document.querySelector("#submitScore");
    var usersInitials = document.querySelector("#initials");
    var highScores = JSON.parse(localStorage.getItem("newObj")) || [];
    var newObj = {
        name: JSON.stringify(usersInitials),
        score: score
    }

    highScores.push(newObj);

    submit.addEventListener("click", function() {
        newObj.name = document.getElementById('initials').value;
        localStorage.setItem("newObj'", JSON.stringify(newObj));
        saveHighScores();    
    });
}

var olTag = document.createElement("ol");

//High Scores Page
function saveHighScores() {
    var highScores = JSON.parse(localStorage.getItem("newObj")) || [];
    for(var i = 0; i < highScores.length; i++) {
        var obj = highScores[i];
        var liTag = document.createElement("li");
        
        liTag.textContent = obj.name + ' - ' + obj.score;
        olTag.appendChild(liTag);
    }
    
    main.innerHTML += `
        <h1>Highscores</h1>
        <ol>
            <li>${obj.name} ${obj.score}</li>
        </ol>
        <button id="homePage">Go back</button>
        <button id="clearBoard">Clear high scores</button>
    `
    //Variables for buttons
    var homePage = document.querySelector("#homePage");
    var clearScores = document.querySelector("#clearBoard");

    homePage.addEventListener("click", function() {
        location.reload();
    });

    clearScores.addEventListener("click", function(event) {
        event.preventDefault();
        var main = document.querySelector("#display");
        main.innerHTML = ``;
        main.innerHTML += `
            <h1>Highscores</h1>
            <ol>
                
            </ol>
            <button id="homePage">Go back</button>
            <button id="clearBoard">Clear high scores</button>
        `
        localStorage.clear();
    });
}