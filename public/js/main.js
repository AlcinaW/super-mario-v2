import {loadLevel} from './loaders.js';
import {loadMarioSprite, loadBackgroundSprites} from './sprites.js';

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

//create canvas by browser
const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

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
