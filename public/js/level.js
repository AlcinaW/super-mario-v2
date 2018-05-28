import Compositor from './Compositor.js';

export default class level {
  constructor() {
    this.comp = new Composition();
    //makes sure each piece is unique in a set
    this.entities = new Set();
  }
}
