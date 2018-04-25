// initializing a new Phaser game:
// calling the Phaser Game class with constructor arguments:
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game');

game.state.add('preload', preloadState);
// game.state.add('splash-1', bootSplash1);
game.state.add('level-1', bootLevel1);
// game.state.add('splash-2', bootSplash2);
// game.state.add('level-2', bootLevel2);
// game.state.add('game', bootGame);

//starting the game
game.state.start('preload');