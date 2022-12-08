let player;
let cursors;
let left;
let right;

function preload() {
  this.load.image('mikolaj', 'assets/mikolaj.jpg');
  this.load.image('bomb', 'assets/bomb.png');
  this.load.image('flipper', 'assets/flipper.png');
}

function create() {
  this.add.image(220, 240, 'mikolaj').setScale(0.3, 0.3);

  right = this.physics.add.sprite(600, 500, 'flipper').setScale(0.5, 0.5).refreshBody();
  right.body.setAllowGravity(false);
  right.setImmovable(true);
  left = this.physics.add.sprite(150, 500, 'flipper').setScale(0.5, 0.5).refreshBody();
  left.body.setAllowGravity(false);
  left.setImmovable(true);
  left.flipX = true;

  player = this.physics.add.sprite(100, 280, 'bomb');
  player.body.setAllowGravity(true);
  player.body.setBounce(1, 1).setCollideWorldBounds(true);

  this.physics.add.collider(player, right);
  this.physics.add.collider(player, left);

  cursors = this.input.keyboard.createCursorKeys();
}


function update() {
  if (cursors.left.isDown) {
    left.angle = -45;
    left.rotation = -45;
  } else if (cursors.right.isDown) {
    right.angle = 45;
  } else {
    left.angle = 0;
    right.angle = 0;
  }
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload,
    create,
    update,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
};

// eslint-disable-next-line no-unused-vars
const game = new Phaser.Game(config);
