class PhaserLogo extends Phaser.GameObjects.Sprite {
  constructor(scene) {
    super(
      scene,
      scene.cameras.main.width / 2,
      scene.cameras.main.height / 2 - 100,
      'phaser-logo'
    )

    scene.add.existing(this)
    this.setOrigin(0.5)
  }
}
