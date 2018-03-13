

if (typeof(Storage) !== "undefined") {
    if(localStorage.getItem("Name") != null){
        // Retrieve
        var PlayerName = localStorage.getItem("Name");
        var computerPoints = localStorage.getItem("computerPoints");
        var playerPoints = localStorage.getItem("playerPoints");
    } else {
        var playerName = prompt("Name");
        var computerPoints = 0;
        var playerPoints = 0;
    }
} else {
    console.log("No arms, no cake!");
}

var dice1 = 0;
var dice2 = 0;

var playerResult;
var playerScore = 0;
var computerResult;
var computerScore = 0;

var playerDice1 = document.getElementById("playerDice1");
var playerDice2 = document.getElementById("playerDice2");
var computerDice1 = document.getElementById("computerDice1");
var computerDice2 = document.getElementById("computerDice2");

var playerResultDisplay = document.getElementById("playerResult");
var playerPoints = document.getElementById("playerPoints");
var computerResultDisplay = document.getElementById("computerResult");
var computerPoints = document.getElementById("computerPoints");

var resultScoreDisplay = document.getElementById("resultScore");

var buttonReset = document.getElementById("buttonReset");
var buttonClear = document.getElementById("buttonClear");



class Dice{

    constructor(dice1, dice2){
        this.dice1 = dice1;
        this.dice2 = dice2;
    }
    
    rollDices(){

        dice1 = (Math.floor(Math.random() *6) +1);
        dice2 = (Math.floor(Math.random() *6) +1);
        computerDice1.innerHTML = "Dice 1: " + dice1;
        computerDice2.innerHTML = "Dice 2: " + dice2;
    }

    calculate(){
        computerResult = dice1 + dice2;
        computerResultDisplay.innerHTML = "Computer Score: " + computerResult;
    }
}

var MyDice = new Dice();
MyDice.rollDices();
MyDice.calculate();

class Player extends Dice{
    constructor() {
        super();
    }
    
    rollDices() {
        dice1 = (Math.floor(Math.random() *6) +1);
        dice2 = (Math.floor(Math.random() *6) +1);
        playerDice1.innerHTML = "Dice 1: " + dice1;
        playerDice2.innerHTML = "Dice 2: " + dice2;
    }
    
    calculate(){
        playerResult = dice1 + dice2;
        playerResultDisplay.innerHTML = "Player score: " + playerResult;
    }
}



var MyPlayer = new Player();
MyPlayer.rollDices();
MyPlayer.calculate();

function compare() {
	'use strict';
	if (computerResult === playerResult) {
		console.log("Draw");
		resultScoreDisplay.innerHTML = "Draw";
	} else if (computerResult > playerResult) {
		computerScore++;
		resultScoreDisplay.innerHTML = "LOSER!";
		computerPoints.innerHTML = "Computer Points: " + computerScore;
	} else if (computerResult < playerResult) {
		playerScore++;
		resultScoreDisplay.innerHTML = "You Win!";
		playerPoints.innerHTML = "Player Points: " + playerScore;
	}
}

compare();

function resetGame(){
    location.reload();
}

function clearGame(){
    localStorage.clear();
    location.reload();
}

buttonReset.addEventListener('click', resetGame);
buttonClear.addEventListener('click', clearGame);

PlayerName.innerHTML = PlayerName;


localStorage.setItem("Name", PlayerName);
localStorage.setItem("computerPoints", computerPoints);
localStorage.setItem("playerPoints", playerPoints);