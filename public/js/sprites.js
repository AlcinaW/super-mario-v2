import SpriteSheet from './spritesheet.js';
import {loadImage} from './loaders.js';

export function loadMarioSprite() {
  //return whole promise chain
  return loadImage('/img/characters.gif')
  .then(image => {
    const sprites = new SpriteSheet(image, 16, 16);
    //define the sprites with names
    sprites.define('idle', 276, 44, 16, 16);
    return sprites;
  });
}

export function loadBackgroundSprites() {
  //return whole promise chain
  return loadImage('/img/tiles.png')
  .then(image => {
    const sprites = new SpriteSheet(image, 16, 16);
    //define the sprites with names
    sprites.defineTile('ground', 0, 0);
    sprites.defineTile('sky', 3, 23);
    return sprites;
  });
}
