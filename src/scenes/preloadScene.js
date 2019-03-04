class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' })
  }

  preload() {
    this.load.baseURL = 'src/assets/'
    this.load.image('phaser-logo', 'img/phaser-logo.png')
  }

  create() {
    this.scene.start('MainScene')
  }
}
