//because this function is only used here, no need to export it
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

export function createBackgroundLayer(backgrounds, sprites) {
  const buffer = document.createElement('canvas');
  buffer.width = 256;
  buffer.height = 240;

  //immediately draw
  backgrounds.forEach(background => {
    drawBackground(background, buffer.getContext('2d'), sprites);
  });

  return function drawBackgroundLayer(context) {
    context.drawImage(buffer, 0, 0);
  };
}

//higher order function that takes sprite and position
export function createSpriteLayer(entity) {
    return function drawSpriteLayer(context) {
        entity.draw(context);
    };
}
