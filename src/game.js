/// <reference path="../typings/phaser.d.ts" />

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#cdcdcd',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 800,
    height: 600,
    parent: 'phaser-example'
  },
  scene: [PreloadScene, MainScene]
}

window.addEventListener('load', () => {
  const game = new Phaser.Game(config)
})
