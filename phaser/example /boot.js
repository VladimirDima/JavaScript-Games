WebFontConfig = {
    active: function() {
        game.time.events.add(Phaser.Timer.SECOND, createText, this)
    },
    google: {
        families: ['Chewy', 'Luckiest Guy']
    }
};
var boot = {
    preload: function() {
        var loadingBar = game.add.sprite(game.world.centerX - (387 / 2), 400, 'loading');
        this.load.setPreloadSprite(loadingBar);
        game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
        game.load.image('bg', 'images/bg.png');
        game.load.image('cat', 'images/cat.png');
        game.load.image('tree', 'images/tree.png');
        game.load.image('monkey', 'images/monkey.png');
        game.load.image('snake', 'images/snake.png');
        game.load.spritesheet('catcher', 'images/catcher.png', 36, 40);
        game.load.spritesheet('button', 'images/button_sprite.png', 300, 75, 3);
        game.load.spritesheet('playAgain', 'images/button_again_sprite.png', 300, 75, 3);
        game.load.audio('wouldn_doo', 'audio/level1.mp3');
        game.load.audio('cat', 'audio/cat.mp3');
        game.load.audio('woosh', 'audio/airslide.mp3');
        game.load.audio('jungle', 'audio/level2.mp3');
        game.load.audio('monkey', 'audio/monkey.mp3');
        game.load.audio('oowh', 'audio/oowh.mp3')
    },
    create: function() {
        game.add.image(0, 0, 'bg');
        var titleShadow = game.add.text(game.world.centerX + 3, 53, 'THE ANIMAL CATCHER', {
            font: "75px Luckiest Guy",
            fill: "#000"
        });
        titleShadow.anchor.set(0.5);
        var title = game.add.text(game.world.centerX, 50, 'THE ANIMAL CATCHER', {
            font: "75px Luckiest Guy",
            fill: "#fff"
        });
        title.anchor.set(0.5);
        var subTitle = game.add.text(game.world.centerX, 230, 'Phaser 2/CE demo, 2 levels', {
            font: "25px Chewy",
            fill: "#fff"
        });
        subTitle.anchor.set(0.5);
        var button = game.add.button(game.world.centerX - 150, 250, 'button', this.actionOnClick, this, 2, 1, 0);
        this.catcher = game.add.sprite(game.width / 2, 100, 'catcher');
        this.catcher.anchor.setTo(0.5, 0);
        game.physics.enable(this.catcher);
        game.physics.arcade.enableBody(this.catcher);
        this.catcher.body.collideWorldBounds = !0;
        this.catcher.body.velocity.setTo(-100, 0);
        this.catcher.body.bounce.set(1, 1)
    },
    update: function() {
        if (this.catcher.body.blocked.left) {
            this.catcher.scale.x = -1
        } else if (this.catcher.body.blocked.right) {
            this.catcher.scale.x = 1
        }
    },
    actionOnClick: function() {
        game.state.start('splash1')
    }
}