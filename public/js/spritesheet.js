export default class SpriteSheet {
  constructor(image, width, height){
    this.image = image;
    this.width = width;
    this.height = height;
    //save buffer to map
    this.tiles = new Map();
  }
  define(name, x, y){
    //draw buffer to save image instead of drawing from whole image every time
    //create canvas programmatically with JS
    const buffer = document.createElement('canvas');
    //set height and width
    buffer.width = this.width;
    buffer.height = this.height;
    buffer
      .getContext('2d')
      .drawImage(
        this.image,
        x * this.width,
        y * this.height,
        this.width,
        this.height,
        0,
        0,
        this.width,
        this.height);
        //name as key, buffer as value
        this.tiles.set(name, buffer);
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
