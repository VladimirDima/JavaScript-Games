var winningCondition = 10;
var update = !0;
var button;
var level2 = {
    create: function() {
        game.add.image(0, 0, 'bg');
        this.catcher = game.add.sprite(game.width / 2, game.height / 2, 'catcher');
        this.catcher.anchor.setTo(0.5, 0);
        this.catcher.animations.add('catch', [0, 1, 2, 3, 4], 42, !1);
        this.catcher.frame = 0;
        game.physics.enable(this.catcher);
        game.physics.arcade.enableBody(this.catcher);
        this.catcher.body.collideWorldBounds = !0;
        this.trees = this.add.group();
        for (var i = 0; i < 20; i++) {
            let sprite = this.trees.create(game.rnd.between(50, 750), game.rnd.between(30, 550), 'tree');
            game.physics.enable(sprite);
            game.physics.arcade.enableBody(sprite);
            sprite.body.allowGravity = !1;
            sprite.body.immovable = !0
        }
        this.monkeys = this.add.group();
        for (var i = 0; i < winningCondition; i++) {
            let sprite = this.monkeys.create(game.rnd.between(100, 700), game.rnd.between(50, 550), 'monkey');
            game.physics.enable(sprite);
            game.physics.arcade.enableBody(sprite);
            sprite.body.collideWorldBounds = !0;
            sprite.body.velocity.setTo(60, 60);
            sprite.body.bounce.set(1, 1);
            sprite.body.gravity.set(45, 30)
        }
        this.snake = game.add.sprite(game.rnd.between(600, 800), game.rnd.between(0, 200), 'snake');
        this.snake.anchor.setTo(0.5, 0);
        game.physics.enable(this.snake);
        game.physics.arcade.enableBody(this.snake);
        this.snake.body.collideWorldBounds = !0;
        this.snake.body.velocity.setTo(100, 100);
        this.snake.body.bounce.set(0.9, 0.8);
        this.snake.body.gravity.set(25, 30);
        button = game.add.button(game.world.centerX - 150, 450, 'playAgain', this.actionOnClick, this, 2, 1, 0);
        button.visible = !1;
        this.timer = game.time.create();
        this.timerEvent = this.timer.add(Phaser.Timer.SECOND * countDown, this.endTimer, this);
        this.timer.start();
        this.txtTimer = game.add.text(740, 10, formatTime(Math.round((this.timerEvent.delay - this.timer.ms) / 1000)), {
            font: "40px Chewy",
            fill: "#ff0044"
        });
        this.cursors = game.input.keyboard.createCursorKeys()
    },
    update: function() {
        var speed = 150;
        this.catcher.body.velocity.x = 0;
        this.catcher.body.velocity.y = 0;
        if (this.cursors.left.isDown) {
            this.catcher.body.velocity.x = -speed;
            this.catcher.scale.x = 1;
            game.physics.arcade.moveToObject(this.snake, this.catcher, 80, 1400)
        }
        if (this.cursors.right.isDown) {
            this.catcher.body.velocity.x = speed;
            this.catcher.scale.x = -1;
            game.physics.arcade.moveToObject(this.snake, this.catcher, 80, 1400)
        }
        if (this.cursors.up.isDown) {
            this.catcher.body.velocity.y = -speed;
            game.physics.arcade.moveToObject(this.snake, this.catcher, 80, 1400)
        }
        if (this.cursors.down.isDown) {
            this.catcher.body.velocity.y = speed;
            game.physics.arcade.moveToObject(this.snake, this.catcher, 80, 1400)
        }
        game.physics.arcade.collide(this.catcher, this.trees);
        game.physics.arcade.collide(this.monkeys, this.trees);
        game.physics.arcade.collide(this.snake, this.trees);
        game.physics.arcade.collide(this.monkeys, this.monkeys);
        game.physics.arcade.overlap(this.catcher, this.monkeys, this.catchAnimal);
        game.physics.arcade.overlap(this.catcher, this.snake, this.killCatcher);
        this.tmp = formatTime(Math.round((this.timerEvent.delay - this.timer.ms) / 1000));
        if (this.timer.running && this.tmp >= 0) {
            this.txtTimer.text = formatTime(Math.round((this.timerEvent.delay - this.timer.ms) / 1000))
        } else if (score < winningCondition && update === !0) {
            this.loose();
            update = !1
        }
        if (score === winningCondition && update === !0) {
            this.win()
        }
    },
    catchAnimal: function(player, animal) {
        player.animations.play('catch');
        this.catcherSound = game.add.audio('woosh');
        this.catcherSound.play();
        this.monkeySound = game.add.audio('monkey');
        this.monkeySound.stop();
        this.monkeySound.play();
        score++;
        console.log(score);
        animal.kill()
    },
    killCatcher: function(player) {
        this.catcherSound = game.add.audio('oowh');
        this.catcherSound.play();
        player.kill();
        level2.loose();
        level2.timer.stop()
    },
    endTimer: function() {
        this.timer.stop()
    },
    win: function() {
        update = !1;
        this.catcher.kill();
        this.timer.stop();
        txtGameOver = game.add.text(-800, game.world.centerY, "YOU WON THE GAME :-)", {
            font: "25px Luckiest Guy",
            fill: "#ff0044"
        });
        txtGameOver.anchor.set(0.5);
        tween = game.add.tween(txtGameOver).to({
            x: game.world.centerX
        }, 1500, Phaser.Easing.Bounce.Out, !0)
    },
    loose: function() {
        this.catcher.kill();
        txtGameOver = game.add.text(game.world.centerX, -100, "GAME OVER - YOU LOST :-(", {
            font: "50px Luckiest Guy",
            fill: "#ff0044"
        });
        txtGameOver.anchor.set(0.5);
        tween = game.add.tween(txtGameOver).to({
            y: game.world.centerY
        }, 1500, Phaser.Easing.Bounce.Out, !0);
        button.visible = !0
    },
    actionOnClick: function() {
        score = 0;
        update = !0;
        game.state.start('level2')
    }
}