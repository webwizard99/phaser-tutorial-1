export const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
      preload: preload,
      create: create,
      update: update
  }
};

export const game = new Phaser.Game(config);

export const preload = function ()
{
}

export const create = function ()
{
}

export const update = function ()
{
}