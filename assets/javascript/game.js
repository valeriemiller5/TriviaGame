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

// once "#startQuiz" is clicked, timer begins; counts down from 45 secs, shows results if timer runs out.
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

// questions may be answered or remain unanswered - everthing is documented once "submit" is clicked
// Click "submit", show results.  Countdown stops if there is still time on the clock.
document.getElementById("quizForm").onsubmit = function() {
    event.preventDefault();
    clearTimeout(clock);
    results();
};

// this gets the result I want (for each question, checks if it's correct, incorrect, or unanswered), but there
// must be a simpler way to without so much repetition.
function results() {
    // run function to check if questions were answered correctly, incorrectly, or not at all
    var questOne = $('input:radio[name="oneQuestion"]:checked').val();
    var questTwo = $('input:radio[name="twoQuestion"]:checked').val();
    var questThree = $('input:radio[name="threeQuestion"]:checked').val();
    var questFour = $('input:radio[name="fourQuestion"]:checked').val();
    var questFive = $('input:radio[name="fiveQuestion"]:checked').val();
    var questSix = $('input:radio[name="sixQuestion"]:checked').val();
    var questSeven = $('input:radio[name="sevenQuestion"]:checked').val();
    var questEight = $('input:radio[name="eightQuestion"]:checked').val();
    var questNine = $('input:radio[name="nineQuestion"]:checked').val();
    var questTen = $('input:radio[name="tenQuestion"]:checked').val();
    if(questOne == undefined) {
        missingAnswer++;
    } else if(questOne == 1) {
        rightAnswer++;
    } else {
        wrongAnswer++;
    }
    if(questTwo == undefined) {
        missingAnswer++;
    } else if(questTwo == 1) {
        rightAnswer++;
    } else {
        wrongAnswer++;
    }
    if(questThree == undefined) {
        missingAnswer++;
    } else if(questThree == 1) {
        rightAnswer++;
    } else {
        wrongAnswer++;
    }
    if(questFour == undefined) {
        missingAnswer++;
    } else if(questFour == 1) {
        rightAnswer++;
    } else {
        wrongAnswer++;
    }
    if(questFive == undefined) {
        missingAnswer++;
    } else if(questFive == 1) {
        rightAnswer++;
    } else {
        wrongAnswer++;
    }
    if(questSix == undefined) {
        missingAnswer++;
    } else if(questSix == 1) {
        rightAnswer++;
    } else {
        wrongAnswer++;
    }
    if(questSeven == undefined) {
        missingAnswer++;
    } else if(questSeven == 1) {
        rightAnswer++;
    } else {
        wrongAnswer++;
    }
    if(questEight == undefined) {
        missingAnswer++;
    } else if(questEight == 1) {
        rightAnswer++;
    } else {
        wrongAnswer++;
    }
    if(questNine == undefined) {
        missingAnswer++;
    } else if(questNine == 1) {
        rightAnswer++;
    } else {
        wrongAnswer++;
    }
    if(questTen == undefined) {
        missingAnswer++;
    } else if(questTen == 1) {
        rightAnswer++;
    } else {
        wrongAnswer++;
    }
    // I tried this code that cut out the repetition, but it counted ALL of the radio buttons instead of one
    // result for each question.
    //$("input:radio").each(function(){
    //    var name = $("input:radio").attr("name");
    //    var quizQuest = $("input:radio[name=" + name + "]:checked").val();
    //    if(quizQuest == undefined) {
    //        missingAnswer++;
    //    } else if (quizQuest == 1) {
    //        rightAnswer++;
    //    } else {
    //        wrongAnswer++;
    //    }
    //});
    $(".finalResults").show();
    $("#retakeQuiz").show();
    $("#takeQuiz").hide();
    $("#correctAnswers").html("You answered " + rightAnswer + " questions correctly.");
    $("#incorrectAnswers").html("You answered " + wrongAnswer + " questions incorrectly.");
    $("#unanswered").html("You left " + missingAnswer + " questions unanswered.");
};

// once "#retakeQuiz" is clicked, timer and quiz start over;
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
});

  