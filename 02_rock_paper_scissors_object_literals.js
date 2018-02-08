
	var myGame = {

		// properties
		 playerChoiceDisplay : document.getElementById("player_choice"),
		 computerChoiceDisplay : document.getElementById("computer_choice"),
		 resultDisplay : document.getElementById("result"),
		 computerChoice : '',
		 userChoice : '',
		
		// methods 
		computerInput : function () {

			switch (Math.floor(Math.random() * 3)) { 
				case 0:
					this.computerChoice = "Rock";
					break;
				case 1:
					this.computerChoice = "Paper"
					break;
				case 2:
					this.computerChoice = "Scissors"
					break;
			}
		},

		compare : function () {

			if (this.userChoice === this.computerChoice) {
				this.resultDisplay.innerHTML = "Draw!";
			} else if (this.userChoice === 'Paper' && this.computerChoice === 'Rock') {
				this.resultDisplay.innerHTML = "You win!";
			} else if (this.userChoice === 'Scissors' && this.computerChoice === 'Rock') {
				this.resultDisplay.innerHTML = "You loose!";
			} else if (this.userChoice === 'Rock' && this.computerChoice === 'Scissors') {
				this.resultDisplay.innerHTML = "You win!";
			} else if (this.userChoice === 'Rock' && this.computerChoice === 'Paper') {
				this.resultDisplay.innerHTML = "You loose!";
			} else if (this.userChoice === 'Paper' && this.computerChoice === 'Scissors') {
				this.resultDisplay.innerHTML = "You loose!";
			} else if (this.userChoice === 'Scissors' && this.computerChoice === 'Paper') {
				this.resultDisplay.innerHTML = "You win!";
			}
		},
		display: function () {

			this.playerChoiceDisplay.innerHTML = this.userChoice;
			this.computerChoiceDisplay.innerHTML = this.computerChoice;
		}

		///// object end /////
	};
	// the buttons
	var buttons = document.getElementsByClassName("button"); // returning an array
		for (var i = 0; i < buttons.length; i++) {
					buttons[i].addEventListener('click', play);
		}
	
	//main logic
	function play() {
		myGame.userChoice = this.id;
		myGame.computerInput();
		myGame.compare();
		myGame.display();
	}
