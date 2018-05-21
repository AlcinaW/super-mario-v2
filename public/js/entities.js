import Entity from './entity.js';
import {loadMarioSprite} from './sprites.js';

export function createMario(){
  return loadMarioSprite()
  .then(sprite => {
    const mario = new Entity();

    mario.draw = function drawMario(context){
      sprite.draw('idle', context, this.pos.x, this.pos.y);
    }

    //when you attach a function to an object in JS, you can access this
    mario.update = function updateMario(deltaTime){
      this.pos.x += this.vel.x * deltaTime;
      this.pos.y += this.vel.y * deltaTime;
    }
    return mario;
  });
}
