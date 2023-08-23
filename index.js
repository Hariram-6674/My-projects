function getRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
const button=document.getElementById("rollBtn");
button.addEventListener("click",()=>{
    let randomNumber1=getRandomNumber(1,6);
    let randomNumber2=getRandomNumber(1,6);
    
    document.getElementById("img1").src="images/dice"+randomNumber1+".png";
    document.getElementById("img2").src="images/dice"+randomNumber2+".png";

    if(randomNumber1>randomNumber2){ document.querySelector("h1").innerHTML="Player 1 Wins";}
    else if(randomNumber1<randomNumber2){ document.querySelector("h1").innerHTML="Player 2 Wins";}
    else { document.querySelector("h1").innerHTML="Draw";}
});

