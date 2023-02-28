// Start button variables
var startContainer = document.querySelector(".start-container")
var startBtn = document.querySelector(".start-btn")
var panel = document.querySelector(".panel")
var hiScores = document.querySelector(".hiscore")

// start button kicking off quiz
startBtn.addEventListener("click", function () {
    startContainer.classList.add("hide");
    panel.classList.remove("hide");
    var time = setInterval(() => myTimer(time), 1000);
}
)

// Questions will be asked
const Questions = [{
    id: 0,
    q: "Which is not a type of variable in Javascript?",
    a: [{ text: "const", isCorrect: false },
    { text: "var", isCorrect: false },
    { text: "attribute", isCorrect: true },
    { text: "let", isCorrect: false }
    ]

},
{
    id: 1,
    q: "How do you call a function?",
    a: [{ text: "Use ==", isCorrect: false, isSelected: false },
    { text: "Use ;", isCorrect: false },
    { text: "Should loud enough for it to hear", isCorrect: false },
    { text: "Use ()", isCorrect: true }
    ]

},
{
    id: 2,
    q: "What html element do you need to add a Javascript file?",
    a: [{ text: "<style src=>", isCorrect: false },
    { text: "<div class=>", isCorrect: false },
    { text: "<script src=>", isCorrect: true },
    { text: "<span>", isCorrect: false }
    ]
}
]

// Set score variable
myScore = 0;

// Set start
var start = true;

// Iterate
function iterate(id) {



    // Getting the result display section
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";

    // Getting the question
    const question = document.getElementById("question");


    // Setting the question text
    question.innerText = Questions[id].q;

    // Getting the options
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');

    // Providing option text
    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;

    // Providing the true or false value to the options
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;

    // }
    var selected = "";

    // Show selection for op1
    op1.addEventListener("click", () => {
        op1.style.backgroundColor = "lightgoldenrodyellow";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op1.value;
    })

    // Show selection for op2
    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightgoldenrodyellow";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op2.value;
    })

    // Show selection for op3
    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightgoldenrodyellow";
        op4.style.backgroundColor = "lightskyblue";
        selected = op3.value;
    })

    // Show selection for op4
    op4.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightgoldenrodyellow";
        selected = op4.value;
    })

    // Grabbing the evaluate button
    const evaluate = document.getElementsByClassName("evaluate");

    // Evaluate method
    evaluate[0].addEventListener("click", () => {
        if (selected == "true") {
            result[0].innerHTML = "True";
            result[0].style.color = "green";
            myScore++;
        } else {
            result[0].innerHTML = "False";
            result[0].style.color = "red";
            sec -= 5;
        }
    })
}

if (start) {
    iterate("0");
}

// Next button and method
var next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
    start = false;
    if (id < 2) {
        id++;
        iterate(id);
    }
    else if (id === 2) {
        // next.innerText = "End Quiz";
        sec = 0;
        console.log("you've reached the end");
    }
    // Changing the Next button text
    if (id === 2) {
        next.innerText = "End Quiz";
    }
});



// set up timer for quiz

var sec = 60;

function myTimer(time) {
    document.getElementById('timer').innerHTML = sec + " seconds left";
    sec--;
    if (sec < 0) {
        clearInterval(time); ``
        var initials = prompt("That's it!! Type your initials");
        if (initials == "") {
            document.getElementById("initialScore").innerHTML =
                "Initials: none" + " Score: " + myScore;
        }
        else if (initials === null) {
            "Initials: none" + " Score: " + myScore;
        }
        else document.getElementById("initialScore").innerHTML =
            "Initials: " + initials + " Score: " + myScore;

        var userObj = {
            name: initials,
            score: myScore
        }

        var storage = JSON.parse(localStorage.getItem('quizHighscores'))
        if (storage === null) {
            storage = []
        }

        storage.push(userObj)

        localStorage.setItem('quizHighscores', JSON.stringify(storage))
        window.location.href = 'highscores.html'
    }

}


let keys = Object.keys(localStorage);


hiScores.addEventListener("click", function () {
    window.location.href = "highscores.html"
});

