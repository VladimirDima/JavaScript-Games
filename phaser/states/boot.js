var preloadState = {

	preload: function() {
	// load your game assets (instance name, path)
	game.load.image('bg', 'images/bg.png');
	game.load.image('catcher', 'images/catcher.png');
	game.load.image('cat', 'images/cat.png');
},
	create: function() {
		game.state.start('level-1');
	}
};