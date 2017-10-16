// Hide the game screen on page load
$("#gameScreen").hide();
// On click of the start button, hide the start screen, show the game screen
$("#startGame").on("click", function(event){
    $("#startScreen").fadeOut("slow", function() {
        $("#gameScreen").show();
        gameObject.printQuestion();
    });
});
// Get On Click of Answer Buttons and check answer
$(document).on("click", ".answerButton", function(event){
    if ($(this).attr("data-answerValue") == questionsObject[gameObject.currentQuestion].correctAnswer){
        gameObject.answeredCorrectly();
    }
    else {
        gameObject.answeredIncorrectly();
    }
});

var questionsObject = [{
    question:"What is the answer to question one?",
    possibleAnswers: ["Apple", "Banana", "Orange", "Apricot"],
    correctAnswer: "Apple"
},
{
    question:"What is the answer to question two?",
    possibleAnswers: ["Pear", "Peach", "Manderian", "Awning"],
    correctAnswer: "Awning"
}];

var gameObject = {
    questions: questionsObject,
    totalTime: 30,
    currentQuestion: 0, 
    correctAnswers: 0,
    incorrectAnswers: 0, 
    decrementTime: function(){
        gameObject.totalTime--;
        $("#counterVariable").text(gameObject.totalTime);
        if (gameObject.totalTime == 0) {
            gameObject.outOfTime();
        };
    },
    nextQuestion: function(){
        gameObject.totalTime = 30;
        gameObject.currentQuestion++
        $("#timeRemaining").show();
        gameObject.printQuestion();
    },
    printQuestion: function(){
        timeClock = setInterval(gameObject.decrementTime, 1000);
        $("#currentQuestion").html("<h2>" + questionsObject[gameObject.currentQuestion].question + "</h2>");
        $("#possibleAnswers").html(" ")
        for (var index = 0; index < questionsObject[gameObject.currentQuestion].possibleAnswers.length; index++) {
            $("#possibleAnswers").append("<button class='answerButton' id='button-" + index + "'" + "data-answerValue='" + questionsObject[gameObject.currentQuestion].possibleAnswers[index] + "'>" + questionsObject[gameObject.currentQuestion].possibleAnswers[index] + "</button>");
        };
    },

    outOfTime: function(){
        clearInterval(timeClock);
        $("#currentQuestion").html("<h2>" + "You ran out of time!" + "</h2>");
        $("#possibleAnswers").html("<h3>The right answer is: " + questionsObject[gameObject.currentQuestion].correctAnswer + "</h3>");
        $("#timeRemaining").hide();
        gameObject.incorrectAnswers++;
        if (gameObject.currentQuestion == questionsObject.length-1) {
            setTimeout(gameObject.finalScorePage, 5*1000);
        }
        else {
            setTimeout(gameObject.nextQuestion, 5*1000);
        }
    },
    answeredCorrectly: function(){
        gameObject.correctAnswers++;
        clearInterval(timeClock);
        $("#currentQuestion").html("<h2>" + "You are right!" + "</h2>");
        $("#possibleAnswers").html(" ");
        $("#counterVariable").html(" ");
        $("#timeRemaining").hide();
        if (gameObject.currentQuestion == questionsObject.length-1) {
            setTimeout(gameObject.finalScorePage, 5*1000);
        }
        else {
            setTimeout(gameObject.nextQuestion, 5*1000);
        }
    },
    answeredIncorrectly: function(){
        clearInterval(timeClock);
        $("#currentQuestion").html("<h2>" + "You are wrong!" + "</h2>");
        $("#possibleAnswers").html("<h3>The right answer is: " + questionsObject[gameObject.currentQuestion].correctAnswer + "</h3>");
        $("#timeRemaining").hide();
        gameObject.incorrectAnswers++;
        if (gameObject.currentQuestion == questionsObject.length-1) {
            setTimeout(gameObject.finalScorePage, 5*1000);
        }
        else {
            setTimeout(gameObject.nextQuestion, 5*1000);
        }
    },
    finalScorePage: function(){
        clearInterval(timeClock);
        $("#currentQuestion").html("<h2>" + "Game Over!" + "</h2>");
        $("#possibleAnswers").html("<h3>" + "Correct Answers: " + gameObject.correctAnswers + "</h3><br>" + "<h3>" + "Incorrect Answers: " + gameObject.incorrectAnswers + "</h3>");
        $("#counterVariable").html(" ");
        $("#timeRemaining").hide();
        setTimeout(gameObject.startOver, 5*1000);       
    },
    startOver: function(){
        $("#timeRemaining").show();
        gameObject.currentQuestion = 0
        gameObject.correctAnswers = 0;
        gameObject.incorrectAnswers = 0;
        gameObject.printQuestion();
    }
}; 
