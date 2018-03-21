// JavaScript Document

class Dice {

    constructor(name) {
        this.name = name;
        this.face = 0;
    }

    rollDice() {
        this.face = Math.ceil((Math.random()) * 6); // returning whole number between 1 - 6
        console.log(this.name + ': ' + this.face);
        // printing the result
        document.getElementById(this.name).innerHTML = this.face;
    }

    get result() {
            return this.face;
        }
        // END class Dice
}

class Player {
//the practical advantage of using a contructor is the fact that you can define what values are coming 
    constructor() {
        this.name = '';
        this.diceResult = 0;
        this.score = 0;
    }

    playerName() {
        // prepare client storage for user + score if doesn't exist
        if (!localStorage.getItem('user')) {
            localStorage.setItem('user', '');
            localStorage.setItem('userScore', 0);
        }
        // prompt for user name if not yet set
        if (localStorage.getItem('user') === '') {
            this.name = prompt("Please enter your name", "Mr. X");
            // set username
            localStorage.setItem('user', this.name);
        }
        // get player name from local storage
        var playername = localStorage.getItem('user');
        this.name = playername;
        this.score = localStorage.getItem('userScore');
        alert('Hi ' + this.name + ', your all-time score is ' + this.score + '.  Ready to roll?');
        document.getElementById("pName").innerHTML = this.name;
        document.getElementById("pScore").innerHTML = this.score;
    }

    rollDices(id1, id2, output) {
        let dice1 = new Dice(id1);
        dice1.rollDice();

        let dice2 = new Dice(id2);
        dice2.rollDice();

        this.diceResult = dice1.result + dice2.result;
        document.getElementById(output).innerHTML = this.diceResult;
    }

    get result() {
            return this.diceResult;
        }
        // END class Player
}

/////////////////
// GAME LOGIC //
////////////////

function gameLoop() {
    'use strict';

    document.getElementById('playAgain').addEventListener('click', playAgain);
    document.getElementById('clearData').addEventListener('click', clearData);

    var player1 = new Player();
    player1.playerName();
    player1.rollDices('dice1', 'dice2', 'pResult');

    var computer = new Player();
    computer.rollDices('dice3', 'dice4', 'cResult');

    compare();

    function compare() {
        if (player1.result < computer.result) {
            computer.score++;
            document.getElementById("winLoose").innerHTML = 'You loose!';
            document.getElementById("cScore").innerHTML = computer.score;
        } else if (player1.result > computer.result) {
            player1.score++;
            document.getElementById("winLoose").innerHTML = 'Nice one!';
            document.getElementById("pScore").innerHTML = player1.score;
            localStorage.setItem('userScore', player1.score);
            console.log('Score: ' + player1.score);
        } else {
            document.getElementById("winLoose").innerHTML = 'Draw...';
        }
    }

    function playAgain() {
        player1.rollDices('dice1', 'dice2', 'pResult');
        computer.rollDices('dice3', 'dice4', 'cResult');
        compare();
    }

    function clearData() {
        alert('Do you really want to clear ALL data?');
        localStorage.clear();
        location.reload();
        // Clear all keys
        // store.clearAll();
    }

}

gameLoop();