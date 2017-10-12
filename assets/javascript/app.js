$("#gameScreen").hide();
$("#startGame").on("click", function(event){
    $("#startScreen").fadeOut(function() {
        $("#gameScreen").show();
    });
});