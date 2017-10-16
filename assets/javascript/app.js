
$("#gameScreen").hide();
$("#startGame").on("click", function(event){
    $("#startScreen").fadeOut("slow", function() {
        $("#gameScreen").show();
    });
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
        
    },
    printQuestion: function(){
        $("#currentQuestion").html("<h2>" + questionsObject[gameObject.currentQuestion].question + "</h2>");
        for (var index = 0; index < questionsObject[gameObject.currentQuestion].possibleAnswers.length; index++) {
            $("#possibleAnswers").append("<button class='answerButton' id='button-" + index + "'>" + questionsObject[gameObject.currentQuestion].possibleAnswers[index] + "</button>");
        }
        setInterval(gameObject.decrementTime, 1000);
    },

    outOfTime: function(){

    },
    answeredCorrectly: function(){

    },
    answeredIncorrectly: function(){

    },
    finalScorePage: function(){

    },
    startOver: function(){

    }
}; 
// gameObject.decrementTime();
gameObject.printQuestion();