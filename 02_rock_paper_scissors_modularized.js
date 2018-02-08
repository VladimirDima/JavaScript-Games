// DESIGN PATTERN: MADULARIZING

// The buttons
var buttons = document.getElementsByClassName("button"); // returning an array
for (var i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener('click', play);
}
// Variables for display purposes
var playerChoiceDisplay = document.getElementById("player_choice"); // display player's choice
var computerChoiceDisplay = document.getElementById("computer_choice"); // display computer's choice
var resultDisplay = document.getElementById("result"); // display the game result

// other global variables
var computerChoice;
var userChoice;

// main function containing the game logic
function play(){
	//this in a javascript function context refer to the current owner of the event
	userChoice = this.id; // registering the buttons id! takes the id of the button that is being clicked and stores it in user choice
	computerInput();
	compare();
	display();	
}

function computerInput() {

	// return a whole number between 0 and 2

	switch (Math.floor(Math.random() * 3)) { 
		case 0:
			computerChoice = "Rock";
			break;
		case 1:
			computerChoice = "Paper"
			break;
		case 2:
			computerChoice = "Scissors"
			break;
	}
}

function compare() {
	//game is a draw
	if (userChoice === computerChoice) {
		resultDisplay.innerHTML = "Draw!";
	} else if (userChoice === 'Paper' && computerChoice === 'Rock') {
		resultDisplay.innerHTML = "You win!";
	} else if (userChoice === 'Scissors' && computerChoice === 'Rock') {
		resultDisplay.innerHTML = "You loose!";
	} else if (userChoice === 'Rock' && computerChoice === 'Scissors') {
		resultDisplay.innerHTML = "You win!";
	} else if (userChoice === 'Rock' && computerChoice === 'Paper') {
		resultDisplay.innerHTML = "You loose!";
	} else if (userChoice === 'Paper' && computerChoice === 'Scissors') {
		resultDisplay.innerHTML = "You loose!";
	} else if (userChoice === 'Scissors' && computerChoice === 'Paper') {
		resultDisplay.innerHTML = "You win!";
	}
}

function display() {

	playerChoiceDisplay.innerHTML = userChoice;
	computerChoiceDisplay.innerHTML = computerChoice;
}