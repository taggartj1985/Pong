import Phaser from 'phaser'

class Game extends Phaser.Scene
{
    preload(){

    }

    create(){
        const ball = this.add.circle(400, 250, 10, 0xffffff, 1)
        this.physics.add.existing(ball)
        ball.body.setBounce(1, 1)

        ball.body.setCollideWorldBounds(true, 1, 1)

        ball.body.setVelocity(-200, 0)

        this.paddleLeft = this.add.rectangle(50, 250, 30, 100, 0xffffff, 1)
        this.physics.add.existing(this.paddleLeft, true)

        this.paddleRight = this.add.rectangle(750, 250, 30, 100, 0xffffff, 1)
        this.physics.add.existing(this.paddleRight, true)

        this.physics.add.collider(this.paddleLeft, ball)
        this.physics.add.collider(this.paddleRight, ball)

        this.cursors = this.input.keyboard.createCursorKeys()
    }

    update(){
        const body = this.paddleLeft.body

        if (this.cursors.up.isDown)
        {
            this.paddleLeft.y -= 10
            body.updateFromGameObject()
        }
        else if  (this.cursors.down.isDown)
        {
            this.paddleLeft.y += 10
            body.updateFromGameObject()
        }
    }
}

export default Game