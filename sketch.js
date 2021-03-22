let mySound, amplitude;
function preload() {
  //create a sound object using our mp3 file 
  mySound = loadSound('music.mp3');
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  console.log("Hi I am Shabs");
  amplitude = new p5.Amplitude(); 
}

function draw() {
  //set canvas color to black 
  background(2);
  //gets amplitude level 
  let level = amplitude.getLevel();
  //remap the amplitude between 10 to 400
  let diam = map(level, 0, 1, 10, 400)
  //makes the subsequent ellipse red 
  fill('red');
  //draw the ellipse x:150 y:150 and use the remapped amplitude for the height and width
  ellipse(150,150,diam,diam); 
}

function mousePressed() {
  //if the song is playing, stop playing when mouse is pressed. Otherwise, play the sound. 
  if (mySound.isPlaying()) {
    mySound.stop();
  } else {
    mySound.play(); 
  }
}
