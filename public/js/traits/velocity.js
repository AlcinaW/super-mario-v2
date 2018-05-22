import {Trait} from '../entity.js';

//velocity trait
export default class Velocity extends Trait {
  constructor() {
    super('velocity');
  }
  //update entity that gets the entity and deltaTime
  update(entity, deltaTime) {
    entity.pos.x += entity.vel.x * deltaTime;
    entity.pos.y += entity.vel.y * deltaTime;
  }
}
