var bootLevel1 = {
	create: function(){
	// world building / game setup
	game.add.image(0, 0, 'bg');
	// attaching the catcher
	catcher = game.add.sprite(game.width / 2, game.height / 2, 'catcher');
	catcher.anchor.setTo(0.5,0);
	// ARCADE (arcade) is a Phaser core class
	game.physics.enable(catcher, Phaser.Physics.ARCADE);
	
	// attaching the cat
	cat = game.add.sprite( Math.random() * game.width, Math.random() * game.height, 'cat');
	game.physics.enable(cat, Phaser.Physics.ARCADE);
	//cat.anchor.setTo(0.5,0.5);
	// invoke game controls
	cursors = game.input.keyboard.createCursorKeys();
	
	// creating the score
	score = 0;
	// the textfield to display score
	// arguments: coordinates, value to display, style)
	scoreTxt = game.add.text(10, 10, score.toString(), styles)
	var styles = {font: '20px Verdana', fill: '#FFF'};

	// Create a custom timer
        timer = game.time.create();

        
        // Create a delayed event 1m and 30s from now
        timerEvent = timer.add(Phaser.Timer.SECOND * 30, this.endTimer, this);
        
        // Start the timer
        timer.start();
     },

    render: function () {
        // If our timer is running, show the time in a nicely formatted way, else show 'Done!'
        if (timer.running) {
            game.debug.text(this.formatTime(Math.round((timerEvent.delay - timer.ms) / 1000)), 750, 30, style);
            var style = {fontSize: 50, fill: '#FFF'};
        }
        else {
            this.loose();
        }
        if (score === 2) {
        	this.win()
        }
    },
    loose: function() {
    	this.endTimer();
        txtLoose = game.add.text(250, 100, "GAME OVER!", {
            font: "50px",
            fill: "#ff0044"
        });
    },
    win: function(){
    	game.state.start('level-1');
    },
    endTimer: function() {
        timer.stop();
    },
    formatTime: function(s) {
        // Convert seconds (s) to a nicely formatted and padded time string
        var minutes = "0" + Math.floor(s / 60);
        var seconds = "0" + (s - minutes * 60);
        return  seconds.substr(-2);   
    },

	update: function(){
	// run the game loop
	// if left arrow is pressed
	if(cursors.left.isDown && catcher.x>10){
		catcher.x -= 5;
		// scaling 100%, pointing at the original direction
		catcher.scale.x = 1;
	}
	if(cursors.right.isDown && catcher.x<game.width-10){
		catcher.x += 5;
		// scaling 100%, pointing at the opposite direction
		catcher.scale.x = -1;
	}
	if(cursors.up.isDown && catcher.y>10){
		catcher.y -= 5;
	}
	if(cursors.down.isDown && catcher.y<game.height-10){
		catcher.y += 5;
	}
	
	// implementing HitTest:
	// arguments: objects, callback function
	game.physics.arcade.overlap(catcher, cat, this.catHitHandler);
	
},


	catHitHandler: function() {
		console.log('Cat caught!');
		cat.x = Math.random() * game.width;
		cat.y = Math.random() * game.height;
		
		score++;
		scoreTxt.setText(score.toString());
}
};
