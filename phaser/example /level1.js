var button;
var update = !0;
var level1 = {
    create: function() {
        game.add.image(0, 0, 'bg');
        button = game.add.button(game.world.centerX - 150, 450, 'playAgain', this.actionOnClick, this, 2, 1, 0);
        button.visible = !1;
        this.catcher = game.add.sprite(game.width / 2, game.height / 2, 'catcher');
        this.catcher.anchor.setTo(0.5, 0);
        this.catcher.animations.add('catch', [0, 1, 2, 3, 4], 42, !1);
        this.catcher.frame = 0;
        game.physics.enable(this.catcher);
        game.physics.arcade.enableBody(this.catcher);
        this.catcher.body.collideWorldBounds = !0;
        this.cat = game.add.sprite(game.rnd.between(5, 795), game.rnd.between(5, 595), 'cat');
        this.cat.anchor.setTo(0.5, 0.5);
        game.physics.enable(this.cat, Phaser.Physics.ARCADE);
        this.cursors = game.input.keyboard.createCursorKeys();
        this.scoreTxt = game.add.text(10, 10, score.toString(), {
            font: "30px Arial",
            fill: "#ff0"
        });
        this.scoreTxt.font = 'Chewy';
        this.timer = game.time.create();
        this.timerEvent = this.timer.add(Phaser.Timer.SECOND * countDown, this.endTimer, this);
        this.timer.start();
        this.txtTimer = game.add.text(740, 10, formatTime(Math.round((this.timerEvent.delay - this.timer.ms) / 1000)), {
            font: "40px Arial",
            fill: "#ff0044"
        });
        this.txtTimer.font = 'Chewy'
    },
    update: function() {
        var speed = 250;
        this.catcher.body.velocity.x = 0;
        this.catcher.body.velocity.y = 0;
        if (this.cursors.left.isDown) {
            this.catcher.body.velocity.x = -speed;
            this.catcher.scale.x = 1
        }
        if (this.cursors.right.isDown) {
            this.catcher.body.velocity.x = speed;
            this.catcher.scale.x = -1
        }
        if (this.cursors.up.isDown) {
            this.catcher.body.velocity.y = -speed
        }
        if (this.cursors.down.isDown) {
            this.catcher.body.velocity.y = speed
        }
        game.physics.arcade.overlap(this.catcher, this.cat, this.catHitHandler);
        this.tmp = formatTime(Math.round((this.timerEvent.delay - this.timer.ms) / 1000));
        if (this.timer.running && this.tmp >= 0) {
            this.txtTimer.text = formatTime(Math.round((this.timerEvent.delay - this.timer.ms) / 1000))
        } else if (score < 10 && update === !0) {
            this.loose();
            update = !1
        }
        if (score === 10) {
            this.win()
        }
    },
    catHitHandler: function() {
        level1.catcher.animations.play('catch');
        this.catcherSound = game.add.audio('woosh');
        this.catcherSound.play();
        this.catSound = game.add.audio('cat');
        this.catSound.volume = 0.5;
        this.catSound.play();
        level1.cat.x = Math.random() * game.width;
        level1.cat.y = Math.random() * game.height;
        score++;
        level1.scoreTxt.setText(score.toString())
    },
    endTimer: function() {
        this.timer.stop()
    },
    win: function() {
        this.cat.destroy();
        bgSound.stop();
        this.catcher.kill();
        this.timer.stop();
        score = 0;
        game.state.start('splash2')
    },
    loose: function() {
        this.catcher.kill();
        this.cat.kill();
        this.timer.stop();
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
        game.state.start('level1')
    }
}