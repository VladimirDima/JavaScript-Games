var preloadState = {

	preload: function() {

	this.logo = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
	this.logo.anchor.setTo(0.5);

	this.bar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 150, 'bar');
	this.bar.anchor.setTo(0.5);

	// load your game assets (instance name, path)
	game.load.image('logo', 'images/logo.png');
	game.load.image('bar', 'images/loadingbar.png');
	game.load.image('bg', 'images/bg.png');
	game.load.image('bg2', 'images/bg2.jpg');
	game.load.image('man', 'images/man.png');
	game.load.image('vinyl', 'images/vinyl.png');

	game.load.audio('theme', 'sounds/chase.mp3');
	game.load.audio('scratch', 'sounds/scratch.wav');
},
	create: function() {
		game.state.start('splash-2');
	}
};