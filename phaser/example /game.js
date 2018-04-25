var score, bgSound, game = new Phaser.Game(800, 600, Phaser.CANVAS, "game"),
    countDown = 30;

function formatTime(a) {
    return (" " + (a - 60 * ("0" + Math.floor(a / 60)))).substr(-2)
}
Main = function() {}, Main.prototype = {
    preload: function() {
        this.game.stage.backgroundColor = "#91d400", this.load.image("loading", "images/loading.png")
    },
    create: function() {
        score = 0, game.state.add("boot", boot), game.state.add("splash1", splash1), game.state.add("level1", level1), game.state.add("splash2", splash2), game.state.add("level2", level2), game.state.start("boot")
    }
}, game.state.add("Main", Main), game.state.start("Main");