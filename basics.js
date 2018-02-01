//global variables
	var number1 = 1;
	var number2 = 11;
	var output = document.getElementById("output");
	var trigger = document.getElementById("trigger");


	//regular function with a return value
	function addNumbers () {
		'use strict';
		var result = number1 + number2;
		return result;
		
	}
	console.log(addNumbers());

	// ECMA6 arrow function. With multiple statements you need to include the function body {}

	var result = () => number1 + number2;
	console.log(result());

	// function with user input 

	function userInput() {
		'use strict';
		// let is restricting the scope to the actual code block, statement or expression 
		let number1 = parseInt(prompt('Type a number:', ''));
		let number2 = parseInt(prompt('Type another number:', ''));
		let result = number1 + number2; 

		output.innerHTML = 'The result is: ' + result + '!';
	}

	userInput();

	// constructor function

	function player (name, score) {
		'use strict';
		this.name = name;
		this.score = score;

		this.greeting = function() {
			alert('Hi! ' + this.name + 'Your score is: ' + this.score);
		};
	}

	var myPlayer = new player('LALA', 20);
	myPlayer.greeting();

	// creating a multidimensional array using literal notation

	var playerScore = [
		['Jessica', 0],
		['Alex', 10],
		['Jurik', 2],
		['Hadel', 8]
	];

	playerScore.push(['Peter', 65]);

	function showScore () {
		'use strict';
		for (var i=0; i < playerScore.length; i++) {
			output.innerHTML += playerScore[i] + '<br>';
		}
	}

	trigger.addEventListener('click', showScore);
	console.log(playerScore);

