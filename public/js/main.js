import SpriteSheet from './spritesheet.js';
import {loadImage} from './loaders.js';

//create canvas by browser
const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

context.fillRect(0, 0, 50, 50);

loadImage('/img/tiles.png')
.then(image => {
  const sprites = new SpriteSheet(image, 16, 16); //define sprite size as 16-16
  //define the sprites with names
  sprites.define('ground', 0, 0);
  sprites.define('sky', 3, 23);
  //sprites.draw('sky', context, 45, 62);

  //loop to draw sky, method doesn't take tile sizes
  for (let x = 0; x < 25; ++x) {
    for (let y = 0; y < 14; ++y) {
      sprites.drawTile('sky', context, x, y);
    }
  }
});
