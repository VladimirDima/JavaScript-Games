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
	game.load.image('catcher', 'images/catcher.png');
	game.load.image('cat', 'images/cat.png');
},
	create: function() {
		game.state.start('level-1');
	}
};