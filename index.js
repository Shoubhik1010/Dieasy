var randomNumber1 = Math.ceil(6*Math.random());
var diceNo1 = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src",diceNo1);


var randomNumber2 = Math.ceil(6*Math.random());
var diceNo2 = "images/dice" + randomNumber2 + ".png"; 
document.querySelector(".img2").setAttribute("src",diceNo2);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🏁Player 1 Wins";
    setTimeout(function(){ document.querySelector("h1").innerHTML = "Refresh Me" }, 4000);
}
else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "DRAW";
    setTimeout(function(){ document.querySelector("h1").innerHTML = "Refresh Me" }, 4000);

}
else{
    document.querySelector("h1").innerHTML = "Player 2 Wins🏁";
    setTimeout(function(){ document.querySelector("h1").innerHTML = "Refresh Me" }, 4000);

}
