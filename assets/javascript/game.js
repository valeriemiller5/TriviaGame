$(document).ready(function() {

var timer = 10;
var rightAnswer = 0;
var wrongAnswer = 0;
var missingAnswer = 0;
var finalResults = $("#finalResults").hide();
var gameTimer = $("#gameTimer").hide();
var startGame = $("#takeQuiz").hide();
var retakeQuiz = $("#retakeQuiz").hide();


$("#startQuiz").on("click", takeQuiz);

function countDown(seconds) {
    $("#timer").text(timer + " secs");
    if(timer <= 0) {
        results()
    } else {
      timer = timer - 1;
      setTimeout(countDown, 1000);
    }
};


function takeQuiz() {
      countDown();
      $("#takeQuiz").show();
      $("#gameTimer").show();
};

document.getElementById("quizForm").onsubmit = function() {
    event.preventDefault();
    clearTimeout(timer);
    results();
};

function results() {
    if ($("input[name='Question']:checked").val() == 1) {
        rightAnswer = rightAnswer + 1;
    } else if ($("input[name='Question']:checked").val() == 0) {
        wrongAnswer = wrongAnswer + 1;
    } else {
        missingAnswer = missingAnswer + 1;
    }
    $(".finalResults").show();
    $("#takeQuiz").hide();
    $("#correctAnswers").html("You answered " + rightAnswer + " questions correctly.");
    $("#incorrectAnswers").html("You answered " + wrongAnswer + " questions incorrectly.");
    $("#unanswered").html("You left " + missingAnswer + " questions unanswered.");
};

// once "start quiz" is clicked, timer begins; counts down from 30 secs
// check if question was answered correctly, incorrectly, or not at all
// player can only select one answer per question.    
// allows user to move on to the next question; allowed whether or not the question is answered.
// if all questions have been answered, show results;
// else, if timer runs out, show results;
// once "retake quiz" is clicked, timer and quiz start over;
});


  