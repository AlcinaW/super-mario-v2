import {Trait} from '../entity.js';

//velocity trait
export default class Jump extends Trait {
  constructor() {
    super('jump');

    //let the user control the jump length by amount of time pressed, but not forever
    this.duration = 0.5;
    //is the jump engaged?
    this.engageTime = 0;
    
    this.velocity = 200;
  }
  start() {
    this.engageTime = this.duration;
  }
  cancel() {
    //once stopped, gravity will start pulling down
    this.engageTime = 0;
  }
  //update entity that gets the entity and deltaTime
  update(entity, deltaTime) {
    if (this.engageTime > 0) {
      //minus because travelling upwards
      entity.vel.y = -this.velocity;
      this.engageTime -= deltaTime;
    }
  }
}
