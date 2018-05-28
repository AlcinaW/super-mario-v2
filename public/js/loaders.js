import Level from './level.js';

export function loadImage(url){
  //promise, and then resolve with an image
  return new Promise(resolve => {
    const image = new Image();
    image.addEventListener('load', () => {
      resolve(image);
    });
    image.src = url;
  });
}

export function loadLevel(name){
  return fetch(`/levels/${name}.json`)
  //treat JSON as JSON
  .then(r => r.json());
  .then(levelSpec => {
    const level = new Level();

    const backgroundLayer = createBackgroundLayer(level.backgrounds, backgroundSprites);
    level.comp.layers.push(backgroundLayer);

    const spriteLayer = createSpriteLayer(mario);
    level.comp.layers.push(spriteLayer);

    return level;
  });
}
