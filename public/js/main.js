import SpriteSheet from './spritesheet.js';
import {loadImage, loadLevel} from './loaders.js';

//create canvas by browser
const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

//take background from JSON, draw on context using sprites
function drawBackground(background, contect, sprites){
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

loadImage('/img/tiles.png')
.then(image => {
  const sprites = new SpriteSheet(image);
  //define the sprites with names
  sprites.define('ground', 0, 0);
  sprites.define('sky', 3, 23);
  //sprites.draw('sky', context, 45, 62);

  //load the JSON file that has the same name as defined here
  loadLevel('1-1')
  .then(level =>{
    console.log(level);
    level.backgrounds.forEach(bg => {
      drawBackground(bg, context, sprites);
    });
  });

  //ground should show left to right, not the entire area
  // for (let x = 0; x < 25; ++x) {
  //   for (let y = 12; y < 14; ++y) {
  //     sprites.drawTile('ground', context, x, y);
  //   }
  // }
});
