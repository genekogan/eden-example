import {EdenClient} from "eden-sdk";

const eden = new EdenClient();


let config = {
  text_input: "An astronaut on the moon riding a horse, cartoon 1920s",
  width: 768,
  height: 768
}

let result = await eden.create("create", config);
console.log(result);

let config2 = {
  interpolation_texts: [
    "An astronaut on the moon riding a horse, cartoon 1920s",
    "A cat and a dog sitting on a couch, ",
  ],
  n_frames: 60,
  stream: true,
}

let result2 = await eden.create("interpolate", config2);
console.log(result2);


/* Alternatively, start the prediction asynchronously and poll for the result */

//let taskId = await eden.startTask("create", config);
//let result = await eden.getTaskStatus(taskId);
//console.log(result);%  