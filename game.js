const buttonColors = ["red","blue","green","yellow"];

var gamePattern = [];

var userClickedPattern = [];

function playSound(name){
    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
}

var level = 0;

function nextSequence(){
    var rannum = Math.floor(Math.random()*(3-0+1)+0);
    var randomChosenColor = buttonColors[rannum];
    gamePattern.push(randomChosenColor);
    $('#'+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100); 
    playSound(randomChosenColor);
    userClickedPattern = []
}
$("body").keypress(function() { 
    nextSequence();
    level = level + 1;
    $("h1").text("Level "+level);  
});
$(".btn").on("click", function(){
    console.log(this.id);
    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor); 
    playSound(userChosenColor);
    $('#'+userChosenColor).addClass("pressed").delay(100).queue(function(next){
        $(this).removeClass("pressed");
        next();
    });
    checkAnswer();
}) 

function checkAnswer(){
    for(let i = 0; i < userClickedPattern.length;i++ ){
        if (gamePattern[i] === userClickedPattern [i]){
            console.log("Success");
        }
        else{
            console.log("Wrong");
            $("body").addClass("newcol").delay(1000).queue(function(nextq){
                $(this).removeClass("newcol");
                nextq();
            });
            $("h1").text("Game Over");  
            setTimeout(function(){
                location.reload(true);
            },1000);
        }
    }
}

