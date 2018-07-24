$(document).ready(function() {

var timer = 45;
var clock;
var rightAnswer = 0;
var wrongAnswer = 0;
var missingAnswer = 0;
var finalResults = $("#finalResults").hide();
var gameTimer = $("#gameTimer").hide();
var startGame = $("#takeQuiz").hide();
var retakeQuiz = $("#retakeQuiz").hide();


$("#startQuiz").on("click", takeQuiz);

function countDown() {
    $("#timer").text(timer + " secs");
    if(timer <= 0) {
        results()
    } else {
      timer = timer - 1;
      clock = setTimeout(countDown, 1000);
    }
};


function takeQuiz() {
      countDown();
      $("#takeQuiz").show();
      $("#gameTimer").show();
      $("#startQuiz").hide();
};

document.getElementById("quizForm").onsubmit = function() {
    event.preventDefault();
    clearTimeout(clock);
    results();
};

// this function is only checking the first question, I want it to check all questions for correct, incorrect and unanswered questions...
function results() {
    $("input:radio").each(function(){
        var name = $(this).attr("name");
        if($("input:radio[name="+name+"]:checked").val() == 1){
            rightAnswer++;
        } else if($("input:radio[name="+name+"]:checked").val() == 0){
            wrongAnswer++;
        } else {
            missingAnswer++;
        }
    });
    $(".finalResults").show();
    $("#retakeQuiz").show();
    $("#takeQuiz").hide();
    $("#correctAnswers").html("You answered " + rightAnswer + " questions correctly.");
    $("#incorrectAnswers").html("You answered " + wrongAnswer + " questions incorrectly.");
    $("#unanswered").html("You left " + missingAnswer + " questions unanswered.");
};

function reset() {
    timer = 45;
    rightAnswer = 0;
    wrongAnswer = 0;
    missingAnswer = 0;
    finalResults = $(".finalResults").hide();
    gameTimer = $("#gameTimer").hide();
    startGame = $("#takeQuiz").hide();
    retakeQuiz = $("#retakeQuiz").hide();
    $("#startQuiz").show();
};

$("#retakeQuiz").on("click", reset);

// once "start quiz" is clicked, timer begins; counts down from 45 secs
// questions may be answered or remain unanswered - everthing is documented once "submit" is clicked
// run function to check if questions were answered correctly, incorrectly, or not at all
// if "submit", show results.  Countdown stops if there is still time on the clock.
// else, if timer runs out, show results;
// once "retake quiz" is clicked, timer and quiz start over;
});

  