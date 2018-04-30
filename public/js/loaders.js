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
}
