// Hide the game screen on page load
$("#gameScreen").hide();
// On click of the start button, hide the start screen, show the game screen
$("#startGame").on("click", function(event){
    $("#startScreen").fadeOut("slow", function() {
        $("#gameScreen").show();
    });
});
// Get On Click of Answer Buttons and check answer
$(document).on("click", ".answerButton", function(event){
    clearInterval(gameObject.printQuestion.timeClock);
    console.log($(this).attr("data-answerValue"));
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
    nextQuestion: () => {
        
    },
    printQuestion: function(){
        $("#currentQuestion").html("<h2>" + questionsObject[gameObject.currentQuestion].question + "</h2>");
        for (var index = 0; index < questionsObject[gameObject.currentQuestion].possibleAnswers.length; index++) {
            $("#possibleAnswers").append("<button class='answerButton' id='button-" + index + "'" + "data-answerValue='" + questionsObject[gameObject.currentQuestion].possibleAnswers[index] + "'>" + questionsObject[gameObject.currentQuestion].possibleAnswers[index] + "</button>");
        }
        var timeClock = setInterval(gameObject.decrementTime, 1000);
    },

    outOfTime: function(){

    },
    answeredCorrectly: function(){
        console.log("You got it right!");
        gameObject.answeredCorrectly++;
        $("#currentQuestion").html("<h2>" + "You are right!" + "</h2>");
        $("#possibleAnswers").html(" ")
    },
    answeredIncorrectly: function(){
        console.log("You got it wrong!");
        $("#currentQuestion").html("<h2>" + "You are wrong!" + "</h2>");
        $("#possibleAnswers").html(" ");
        gameObject.incorrectAnswers++;
    },
    finalScorePage: function(){

    },
    startOver: function(){

    }
}; 
// gameObject.decrementTime();
gameObject.printQuestion();