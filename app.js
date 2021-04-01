//setting variables
var questionDiv = document.getElementById("questionText");
var topLeftButton = document.getElementById("button1");
var topRightButton = document.getElementById("button2");
var bottomLeftButton = document.getElementById("button3");
var bottomRightButton = document.getElementById("button4");
var getScore = document.getElementById("scoreOutput");
var getTimer = document.getElementById("timerOutput");
var emptyArray = [];
var interval;
var interval2;
var interval3;
var initials;
var secondsLeft = 15;
var oneSecondRight = 2;
var oneSecondWrong = 2;
var getAnswer;
var score = 0;

//quiz questions
var questions = [
    {
        title: "Who is the current president of the united states of America?",
        choices: ["Joe Biden", "Donald Trump", "Barack Obama", "George Bush"],
        answer: "Joe Biden"
    },
    {
        title: "What is the capital of the United State of America?",
        choices: ["Washington DC", "Maryland", "North Carolina", "Virginia"],
        answer: "Washington"
    },
    {
        title: "Which is the biggest state in the united state of America?",
        choices: ["New York", "Texas", "Califonia", "Alaska"],
        answer: "Alaska"
    },
    {
        title: "Which state is referred to as sunshine state?",
        choices: ["Texas", "West Virginia", "Alabama", "Florida"],
        answer: "Florida"
    },
    {
        title: "Which state is the coldest in the united state?",
        choices: ["New York", "Washington DC", "Califonia", "Alaska"],
        answer: "Alaska"
    },
    {
        title: "What year did the 911 attack occur?",
        choices: ["2001", "2010", "1985", "2011"],
        answer: "2001"
    },
    {
        title: "How many Colors are in the US flag?",
        choices: ["Two", "Three", "One", "Five"],
        answer: "Three"
    },
    {
        title: "How many Stripes does the US flag have?",
        choices: ["Eight", "Thirteen", "Ten", "Eleven"],
        answer: "Thirteen"
    },
    {
        title: "Who is the richest American President?",
        choices: ["Donald Trump", "Abraham Lincoln", "Barack Obama", "George Bush"],
        answer: "Donald Trump"
    },
    {
        title: "How many stars does the US flag have?",
        choices: ["Fifty", "Twenty", "ten", "Thirty"],
        answer: "Fifty"
    },
    {
        title: "Where was the original World Trade Center Located?",
        choices: ["New York", "Washington DC", "Florida", "Virginia"],
        answer: "New York"
    },
    {
        title: "Who is the current vice president of the United state?",
        choices: ["Hillary Clinton", "Kamala Harris", "Mark Spencer", "George Washington"],
        answer: "Kamala Harris"
    },
    {
        title: "Who is the 1st US president?",
        choices: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"],
        answer: "George Washington"
    },
    {
        title: "The First American President to be Impeached?",
        choices: ["John Adams", "Andrew Johnson", "Abraham Lincoln", "Donald Trump"],
        answer: "Andrew Johnson"
    },
    {
        title: "What year did the first World war begin?",
        choices: ["1914", "1925", "1910", "1940"],
        answer: "1914"
    },
]

//changes displays to visible
function play() {
    topLeftButton.style.visibility = "visible";
    topRightButton.style.visibility = "visible";
    bottomLeftButton.style.visibility = "visible";
    bottomRightButton.style.visibility = "visible";

    getTimer.style.visibility = "visible";
    getScore.style.visibility = "visible";

    var play = document.getElementById("play");
    play.parentNode.removeChild(play);
    setUp();
    timer();
}

//sets timer
function timer() {
    interval = setInterval(function () {
        secondsLeft--;
        if (secondsLeft < 10) {
            getTimer.textContent = ":0" + secondsLeft;
        }

        if (secondsLeft >= 10 || secondsLeft < 0) {
            getTimer.textContent = ":" + secondsLeft;
        }

        if (secondsLeft === 0) {
            clearInterval(interval);
            alert("Time is up. You Lost");
        }
    }, 1000);
}

//post questions and possible answers
function setUp() {

    //selecting random number for array
    var random = Math.floor(Math.random() * questions.length);

    //print question to div
    questionText.textContent = questions[random].title;

    //print answers to buttons
    topLeftButton.textContent = questions[random].choices[0];
    topRightButton.textContent = questions[random].choices[1];
    bottomLeftButton.textContent = questions[random].choices[2];
    bottomRightButton.textContent = questions[random].choices[3];

    //getting correct answer
    getAnswer = questions[random].answer;

    //removing the question from the array
    questions.splice(random, 1);
    if (questions.length === 0) {
        clearInterval(interval);
        initialsDisplay();
    }
}

//verifies input for button 1
function check1() {

    //grabbing the textContent from the selected button for comparison to right answer
    var buttonId1 = document.getElementById("button1").textContent;

    //comparing user answer to correct answer
    if (buttonId1 === getAnswer) {
        score++;
        secondsLeft += 3
    } else {
        score--;
        secondsLeft -= 3;
    }

    //pasting score result
    getScore.textContent = score;
    setUp();
}

//verifies input for button 2
function check2() {

    //grabbing the textContent from the selected button for comparison to right answer
    var buttonId2 = document.getElementById("button2").textContent;

    //comparing user answer to correct answer
    if (buttonId2 === getAnswer) {
        score++;
        secondsLeft += 3;
    } else {
        score--;
        secondsLeft -= 3;
    }
    getScore.textContent = score;
    setUp();
}

//verifies input for button 3
function check3() {

    //grabbing the textContent from the selected button for comparison to right answer
    var buttonId3 = document.getElementById("button3").textContent;

    //comparing user answer to correct answer
    if (buttonId3 === getAnswer) {
        score++;
        secondsLeft += 3;
    } else {
        score--;
        secondsLeft -= 3;
    }
    getScore.textContent = score;
    setUp();
}

//verifies input for button 4
function check4() {

    //grabbing the textContent from the selected button for comparison to right answer
    var buttonId4 = document.getElementById("button4").textContent;

    //comparing user answer to correct answer
    if (buttonId4 === getAnswer) {
        score++;
        secondsLeft += 3;
    } else {
        score--;
        secondsLeft -= 3;
    }
    getScore.textContent = score;
    setUp();
}

function initialsDisplay() {

    //re-hiding the buttons
    initials = prompt("Finished! Please enter your initials");
    if (initials != null) {
        topLeftButton.style.visibility = "hidden";
        topRightButton.style.visibility = "hidden";
        bottomLeftButton.style.visibility = "hidden";
        bottomRightButton.style.visibility = "hidden";

        getTimer.style.visibility = "hidden";
        getScore.style.visibility = "hidden";
        
        //pasting new initials
        $("#questionText").text("Hall of Fame");
        var newDiv = $("<div>");
        newDiv.attr("class", "initialsDiv");
        newDiv.text(initials + " " + score + " points and " + secondsLeft + " seconds.");
        $("#question").append(newDiv);

        //saving initial info into a variable to be passed to local storage
        var toStore = initials + " " + score + " points and " + secondsLeft + " seconds.";

        //calling save initials function and passing string info for saving
        savePastInitials(toStore);
    }
}

function savePastInitials(toStore) {
    // Put the object into storage
    localStorage.setItem('initials', toStore);

    //get old info stored to window
    var newDiv2 = $("<div>");
    newDiv2.attr("class", "initialsDiv");
    newDiv2.text(localStorage.getItem("initials"));
}
