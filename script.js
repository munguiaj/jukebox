// Made by Marco-Antonio Vega, Jeremiah Munguia, Jose Diaz-Trinidad
let colorHue;
let songs = [];
let backgroundz;
let checkCoin;
let lock;
let screenOnOff = 100
let screenSub = 0
let screenAdd = 0


function preload(){
  console.log("in preload");
  pianoMan = loadSound("pianoMan.mp3");
  conroTherapy = loadSound("Conro - Therapy.mp3")
  caramellDansen = loadSound("Caramelldansen.mp3")
  porterRobinson = loadSound("Porter Robinson - Natural Light.mp3")
  pinkGuy = loadSound("PINK GUY - HELP.mp3")
  neverGonna = loadSound("Rick Astley - Never Gonna Give You Up.mp3")
  attackOnTitan = loadSound("attackOnTitan.mp3");
  blackCatcher = loadSound("blackCatcher.mp3");
  unravel = loadSound("unravel.mp3");
  console.log("leaving preload");
  pattern = loadImage("pattern.jpg");
  oor = loadImage("out of order.jpg")
}

function setup() {
  createCanvas(1280, 720);
  colorMode(HSB, 360, 100, 100, 100);
  colorHue = 0;
  colorHue2 = 100;
  checkCoin = false;
  lock = false;
  fft = new p5.FFT();
  playing = false;
  let row0 = 230
  let row1 = 270
  let row2 = 340
  let row3 = 410
  let column1 = 280
  let column2 = 370
  let column3 = 460;


  button1 = {
    "x": column1,
    "y": row1,
    "n": 1,
    "s": pianoMan
  }
  
  button2 = {
    "x": column2,
    "y": row1,
    "n": 2,
    "s": conroTherapy
  }

  button3 = {
    "x": column3,
    "y": row1,
    "n": 3,
    "s": caramellDansen
  }

  button4 = {
    "x": column1,
    "y": row2,
    "n": 4,
    "s":porterRobinson
  }

  button5 = {
    "x": column2,
    "y": row2,
    "n": 5,
    "s": pinkGuy
  }

  button6 = {
    "x": column3,
    "y": row2,
    "n": 6,
    "s": neverGonna
  }

  button7 = {
    "x": column1,
    "y": row3,
    "n": 7,
    "s": attackOnTitan
  }

  button8 = {
    "x": column2,
    "y": row3,
    "n": 8,
    "s": blackCatcher
  }

  button9 = {
    "x": column3,
    "y": row3,
    "n": 9,
    "s": unravel
  }

  pauseButton = {
    "x": column1,
    "y": row0
  }

  stopButton = {
    "x": column3,
    "y": row0
  }
}

function draw() {
  background(95);
  image(pattern, 0, 0, 1280, 720);
  fft.analyze();

  //visualiser code moved to visualizerFrame

  stroke(1);
  strokeWeight(2.5);
  drawJukebox();
  image(oor, 320, 230, 40, 30)
  

  whichStateText();
  checkCoinAndLock();
  
  visualizer();
}


function chooseColors() {
  stroke(colorHue, 77, 96);
  fill(colorHue, 77, 96);
}

function drawBucket() {
  stroke(0);             
  fill(44, 73, 93);
  ellipse(30, 470, 15, 15)
  ellipse(32, 470, 15, 15)
  ellipse(40, 479, 15, 15)
  ellipse(28, 470, 15, 15)
  ellipse(25, 470, 15, 15)
  ellipse(30, 460, 15, 15)
  ellipse(32, 460, 15, 15)
  ellipse(40, 459, 15, 15)
  ellipse(28, 460, 15, 15)
  ellipse(25, 460, 15, 15)

  ellipse(50, 470, 15, 15)
  ellipse(52, 472, 15, 15)
  ellipse(48, 473, 15, 15)
  ellipse(46, 470, 15, 15)
  ellipse(50, 480, 15, 15)

  ellipse(35, 480, 15, 15)
  ellipse(33, 482, 15, 15)
  ellipse(32, 485, 15, 15)
  ellipse(36, 480, 15, 15)
  ellipse(31, 482, 15, 15)

  ellipse(25, 480, 15, 15)
  ellipse(26, 482, 15, 15)
  ellipse(17, 485, 15, 15)
  ellipse(28, 480, 15, 15)
  ellipse(25, 482, 15, 15)

  fill(50);
  rect(10, 480, 50, 75)
  textSize(20);
  
  fill(50);
  fill(137, 47, 37);
  text('$', 30, 520);
}

function drawJukebox() {
  
  // Top arc
  chooseColors();
  
  fill(colorHue, 80, 100);
  arc(395, 220, 390, 250, 0, PI + PI);
  
  // Main rect
  fill(colorHue2, 48, 74)
  rect (250, 220, 290, 265);

  // Name text
  fill(0, 0, 0);
  textFont('Orbitron');
  textStyle(BOLD);
  textSize(20);
  text('JukeBox Boss 9000', 300, 150);
  textSize(15);
  text('Created by Marco, Jose, & Jeremiah', 280, 180);
  textSize(10);
  text('for the true music enthusiast', 320, 205);

  // Left bar
  fill(0, 0, 40);
  rect (200, 220, 50, 265);
  
  // Right bar
  fill(0, 0, 40);
  rect (540, 220, 50, 265);

  // Bottom Rect
  fill(0, 0, 0)
  rect (200, 480, 390, 50);
  
  // Bottom legs
  fill(0, 0, 40);
  noStroke();
  rect(200, 530, 50, 25);
  rect(540, 530, 50, 25);

  //coin slot
  fill(44, 23, 42);
  rect(390, 230, 10, 35);
  fill(44, 96, 4);
  rect(393.5, 237, 3, 19);
  
  colorHue +=.5;
  if (colorHue == 360) {
    colorHue = 0
  }

  colorHue2 +=.5;
  if (colorHue2 == 360) {
    colorHue2 = 0;
  }
  // Buttons

  noStroke();
  playButton(button1);
  playButton(button2);
  playButton(button3);
  playButton(button4);
  playButton(button5);
  playButton(button6);
  playButton(button7);
  playButton(button8);
  playButton(button9);

  pauseButtonFunct(pauseButton);
  stopButtonFunct(stopButton);
  jukeboxFloor();
  drawBucket();
}

function mousePressed() {

  if (mouseX > button1.x && mouseX < (button1.x+50) && mouseY > button1.y && mouseY < button1.y+50 && playing == false && lock == true) {
    button1.s.play(0, 1, .1);
    console.log("playing 1");
    playing = true;
    
    screenAdd = 3;
  }

  else if (mouseX > button2.x && mouseX < (button2.x+50) && mouseY > button2.y && mouseY < button2.y+50 && playing == false && lock == true) {
    button2.s.play(0, 1, .1);
    console.log("playing 2");
    playing = true;
    screenAdd = 3;
  } 

  else if (mouseX > button3.x && mouseX < (button3.x+50) && mouseY > button3.y && mouseY < button3.y+50 && playing == false && lock == true) {
    button3.s.play(0, 1, .1);
    console.log("playing 3");
    playing = true;
    screenAdd = 3;
  } 
  
  else if (mouseX > button4.x && mouseX < (button4.x+50) && mouseY > button4.y && mouseY < button4.y+50 && playing == false && lock == true) {
    button4.s.play(0, 1, .1);
    console.log("playing 4");
    playing = true;
    screenAdd = 3;
  } 
  
  else if (mouseX > button5.x && mouseX < (button5.x+50) && mouseY > button5.y && mouseY < button5.y+50 && playing == false && lock == true) {
    button5.s.play(0, 1, .1);
    console.log("playing 5");
    playing = true;
    screenAdd = 3;
  } 
  
  else if (mouseX > button6.x && mouseX < (button6.x+50) && mouseY > button6.y && mouseY < button6.y+50 && playing == false && lock == true) {
    button6.s.play(0, 1, .1);
    console.log("playing 6");
    playing = true;
    screenAdd = 3;
  } 
  
  else if (mouseX > button7.x && mouseX < (button7.x+50) && mouseY > button7.y && mouseY < button7.y+50 && playing == false && lock == true) {
      button7.s.play(0, 1, .1);
      console.log("playing 7");
      playing = true;
      screenAdd = 3;
    }

  else if (mouseX > button8.x && mouseX < (button8.x+50) && mouseY > button8.y && mouseY < button8.y+50 && playing == false && lock == true) {
      button8.s.play(0, 1, .1);
      console.log("playing 8");
      playing = true;
      screenAdd = 3;
    }

  else if (mouseX > button9.x && mouseX < (button9.x+50) && mouseY > button9.y && mouseY < button9.y+50 && playing == false && lock == true) {
      button9.s.play(0, 1, .1);
      console.log("playing 9");
      playing = true;
      screenAdd = 3;
    }

  else if (mouseX > pauseButton.x && mouseX < pauseButton.x+50 && mouseY > pauseButton.y && mouseY < pauseButton.y + 30 && (playing == true)) {
    button1.s.pause();
    button2.s.pause();
    button3.s.pause();
    button4.s.pause();
    button5.s.pause();
    button6.s.pause();
    button7.s.pause();
    button8.s.pause();
    button9.s.pause();
    console.log("paused");
    playing = false;
  }

  else if (mouseX > stopButton.x && mouseX < stopButton.x+50 && mouseY > stopButton.y && mouseY < stopButton.y + 30 && (button1.s.isPlaying() || button2.s.isPlaying() || button3.s.isPlaying() || button4.s.isPlaying() || button5.s.isPlaying() || button6.s.isPlaying() || button7.s.isPlaying() || button8.s.isPlaying() || button9.s.isPlaying())) {

    button1.s.stop();
    button2.s.stop();
    button3.s.stop();
    button4.s.stop();
    button5.s.stop();
    button6.s.stop();
    button7.s.stop();
    button8.s.stop();
    button9.s.stop();
    console.log("stopped");
    playing = false;
    screenSub = 3
    // noStroke()
    // text("stopped", 20, 35);
  }
  
  if (mouseX > 390 && mouseX < 400 && mouseY > 230 && mouseY < 265) {
    checkCoin = true;
  }
  
}

// Here is Jose's code, proceed with caution

function visBar(hzBottom, hzTop, bx, by) {

  // hz1 is the lowest hz that the bar is averaging
  // hz2 is the highest hz that the bar is averaging
  // bw is the bar width, currently not used
  // bx is the bar x pos
  // by is the bar y pos

  // This code gets the "energy" average from each freq range
  
  hz = fft.getEnergy(hzBottom, hzTop);

  hzf = 255 - hz;

  // This code draws the bar showing the freq
  noStroke();
  fill(hzf, 100, 100);
  rect(bx, by, 20, -hz);

}

// End of Jose's special code

function whichStateText() {
  if (playing == true) {
    fill(255, 100, 100);
    noStroke();
    fill(100)
    text("Playing", 20, 35);
  } else if (playing == false) {
    fill(255, 100, 100);
    noStroke();
    fill(100)
    text("Stopped", 20, 35);
  }
}

function playButton(butNum) {
  fill(136, 2, 95);
  rect(butNum.x, butNum.y, 50, 50);
  textSize(20);
  fill(136, 97, 8);
  text(butNum.n, butNum.x + 20, butNum.y + 30);
}

function pauseButtonFunct(button) {
  fill(136, 2, 95);
  rect(button.x, button.y, 50, 30);
  fill(0)
  textSize(15)
  text("Pause", button.x + 4, button.y + 16)
}

function stopButtonFunct(button) {
  fill(136, 2, 95);
  rect(button.x, button.y, 50, 30);
  fill(0);
  textSize(15);
  text("Stop", button.x + 6, button.y + 16);
}

function visualizer() {
  fill(25)
  noStroke();
  rect(600, 235, 420, 20)
  rect(600, 510, 420, 20)
  rect(600, 255, 20, 255)
  rect(1000, 255, 20, 255)
  
  screenOnOff -= screenAdd
  screenOnOff += screenSub

  if (screenOnOff < -5) {
    screenAdd = 0
    screenSub = 0
    screenOnOff = 0
  } else if (screenOnOff > 105) {
    screenAdd = 0
    screenSub = 0
    screenOnOff = 100
  }

  fill(100)

  rect(620, 255, 380, 255)

  visBar(21, 29, 620, 510);
  visBar(29, 55, 640, 510);
  visBar(55, 108, 660, 510);
  visBar(108, 201, 680, 510);
  visBar(222, 347, 700, 510);
  visBar(347, 558, 720, 510);
  visBar(558, 847, 740, 510);
  visBar(847, 1231, 760, 510);
  visBar(1231, 1722, 780, 510);
  visBar(1722, 2336, 800, 510);
  visBar(2336, 3088, 820, 510);
  visBar(3088, 3993, 840, 510);
  visBar(3993, 5068, 860, 510);
  visBar(5068, 6329, 880, 510);
  visBar(6329, 7794, 900, 510);
  visBar(7794, 9474, 920, 510);
  visBar(9473, 11390, 940, 510);
  visBar(11390, 13561, 960, 510);
  visBar(13561, 16000, 980, 510);


  fill(0, 0, 0, screenOnOff)

  rect(620, 255, 380, 255)

  fill(0, 0, 40);
  rect(600, 530, 50, 25);
  rect(970, 530, 50, 25);
}

function drawCoin() {
  fill(44, 73, 93);
  ellipse(mouseX, mouseY, 15, 15);
}

function checkCoinAndLock() {
  if (!checkCoin && !lock) {
    drawCoin();
  }
  if (checkCoin == true) {
    lock = true;    
  }
}

function jukeboxFloor() {
  fill(11, 92, 50);
  rect(0, 555, width, 165);
}