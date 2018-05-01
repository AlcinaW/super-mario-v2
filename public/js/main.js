import SpriteSheet from './spritesheet.js';
import {loadImage, loadLevel} from './loaders.js';

//create canvas by browser
const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

//take background from JSON, draw on context using sprites
function drawBackground(background, context, sprites){
  //loop over all ranges, interpret array (the 4 numbers)
  background.ranges.forEach(([x1, x2, y1, y2]) => {
    //loop to draw sky
    for (let x = x1; x < x2; ++x) {
      for (let y = y1; y < y2; ++y) {
        sprites.drawTile(background.tile, context, x, y);
      }
    }
  });
}


function loadMarioSprite() {
  //return whole promise chain
  return loadImage('/img/characters.gif')
  .then(image => {
    const sprites = new SpriteSheet(image, 16, 16);
    //define the sprites with names
    sprites.define('idle', 16, 3);
    return sprites;
  });
}




function loadBackgroundSprites() {
  //return whole promise chain
  return loadImage('/img/tiles.png')
  .then(image => {
    const sprites = new SpriteSheet(image, 16, 16);
    //define the sprites with names
    sprites.define('ground', 0, 0);
    sprites.define('sky', 3, 23);
    return sprites;
  });
}

//make them run parallel
Promise.all([
  loadMarioSprite(),
  loadBackgroundSprites(),
  loadLevel('1-1'),
])
.then(([ marioSprite, sprites, level]) => {
  level.backgrounds.forEach(background => {
    drawBackground(background, context, sprites);
  });
  marioSprite.draw('idle', context, 64, 64);
});
