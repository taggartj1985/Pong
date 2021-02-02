import Phaser from 'phaser'

class Game extends Phaser.Scene
{
    preload(){

    }

    create(){
        const text = this.add.text(400, 250, 'Game Screen!')
        text.setOrigin(0.5, 0.5)
    }
}

export default Game