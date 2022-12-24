var beginButton = document.getElementById("begin");
var clock = document.getElementById("clock");
var score = document.getElementById("score");
var codeQuestion = document.getElementById("question");
var codeAnswer1 = document.getElementById("answer1");
var codeAnswer2 = document.getElementById("answer2");
var codeAnswer3 = document.getElementById("answer3");
var codeAnswer4 = document.getElementById("answer4");
var btn1 = document.getElementById("answer1-btn");
var btn2 = document.getElementById("answer2-btn");
var btn3 = document.getElementById("answer3-btn");
var btn4 = document.getElementById("answer4-btn");

var questions = [
    {
        question: "Which of these options is the correct method to creating a variable in javascript",
        answer1: "x = 5;",
        answer2: "variable x = 5;",
        answer3: "var x = 5;",
        answer4: "var x: 5;"
    },
    {
        question: "Fill in the blank: Javascript is a _______ language.",
        answer1: "Object-Oriented",
        answer2: "Object-Based",
        answer3: "French",
        answer4: "All of the Above"
    },
    {
        question: "How do you declare a constant datatype",
        answer1: "int",
        answer2: "string",
        answer3: "const",
        answer4: "constant"
    }
];

// Timer on click of Begin Button
function startQuiz(){
    var time = 181; //three min timer
    var score = 0;
    beginButton.addEventListener("click", function(event){
        score.textContent = score;
        clearInterval(timeInterval);
        var timeInterval = setInterval(function(){
            time--;
            clock.textContent = time + " seconds!";
            if(time === 0){
                alert("Times Up!");
                clearInterval(timeInterval);
            }
        }, 1000);
        for(var i = 0; i < questions.length; i++){
            codeQuestion.textContent = questions[i].question;
            codeAnswer1.textContent = questions[i].answer1;
            codeAnswer2.textContent = questions[i].answer2;
            codeAnswer3.textContent = questions[i].answer3;
            codeAnswer4.textContent = questions[i].answer4;
        }
    });
}


startQuiz();