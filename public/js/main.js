import {loadLevel} from './loaders.js';
import {loadMarioSprite, loadBackgroundSprites} from './sprites.js';
import Compositor from './compositor.js';
import {createBackgroundLayer} from './layers.js';

//create canvas by browser
const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

//higher order function that takes sprite and position
function createSpriteLayer(sprite, pos) {
  return function drawSpriteLayer(context) {
    for (let i = 0; i < 20; ++i) {
      sprite.draw('idle', context, pos.x + i * 16, pos.y);
    }
  };
}

//make them run parallel
Promise.all([
  loadMarioSprite(),
  loadBackgroundSprites(),
  loadLevel('1-1'),
])
.then(([ marioSprite, backgroundSprites, level]) => {
  const comp = new Compositor();

  const backgroundLayer = createBackgroundLayer(level.backgrounds, backgroundSprites);
  comp.layers.push(backgroundLayer);

  const pos = {
      x: 0,
      y: 0,
  };
  const spriteLayer = createSpriteLayer(marioSprite, pos);
  comp.layers.push(spriteLayer);

  function update() {
    comp.draw(context);
    pos.x += 2;
    pos.y += 2;
    //at end, call update
    requestAnimationFrame(update);
  }
  update();
});
