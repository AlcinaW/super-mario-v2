//compositor draws all the layers in order
export default class Compositor {
  constructor() {
    this.layers = [];
  }
  draw(context) {
    this.layers.forEach(layer => {
      //send context to layers, use a higher order function (function that returns a function)
      layer(context);
    });
  }
}
