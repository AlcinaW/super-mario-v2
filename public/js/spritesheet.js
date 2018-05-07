export default class SpriteSheet {
  constructor(image, w = 16, h = 16){
    this.image = image;
    this.width = w;
    this.height = h;
    //save buffer to map
    this.tiles = new Map();
  }
  define(name, x, y, width, height){
    //draw buffer to save image instead of drawing from whole image every time
    //create canvas programmatically with JS
    const buffer = document.createElement('canvas');
    //set height and width
    buffer.width = width;
    buffer.height = height;
    buffer
      .getContext('2d')
      .drawImage(
        this.image,
        x,
        y,
        width,
        height,
        0,
        0,
        width,
        height);
        //name as key, buffer as value
        this.tiles.set(name, buffer);
  }
  defineTile(name, x, y) {
    this.define(name, x * this.width, y * this.height, this.width, this.height);
  }

  //draw method
  draw(name, context, x, y) {
    const buffer = this.tiles.get(name);
    context.drawImage(buffer, x, y);
  }
  //reusable method to draw tiles instead of writing out the numbers each time
  drawTile(name, context, x, y){
    this.draw(name, context, x * this.width, y * this.height);
  }
}
