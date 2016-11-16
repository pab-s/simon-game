// DOM
var green = document.getElementById("green-btn");
var blue = document.getElementById("blue-btn");
var red = document.getElementById("red-btn");
var yellow = document.getElementById("yellow-btn");

var on = document.getElementById("on");
var start = document.getElementById("start");
var strict = document.getElementById("strict");
var countScreen = document.getElementsByClassName("count");

// global variables
var colorArray = [green, red, blue, yellow];
var gamePlays = [];
var turns = 0;
var humanMoveRecord = 0;

countScreen[0].innerHTML = turns;


//audio
var audio1 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
var audio2 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
var audio3 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
var audio4 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');

// start.addEventListener("click", function() {
// });

green.addEventListener("mousedown", function() {
  playAudio(this);
  logHumanPlay(this);
});
red.addEventListener("mousedown", function() {
  playAudio(this);
  logHumanPlay(this);
});
blue.addEventListener("mousedown", function() {
  playAudio(this);
  logHumanPlay(this);
});
yellow.addEventListener("mousedown", function() {
  playAudio(this);
  logHumanPlay(this);
});

var playAudio = function(color) {
    switch(color) {
      case green:
          audio1.play();
          break;
      case red:
          audio2.play();
          break;
      case blue:
          audio3.play();
          break;
      case yellow:
          audio4.play();
          break;
    }
}

var updateTurns = function() {
  turns++;
  countScreen[0].innerHTML = turns;
//  console.log(gamePlays);
};

var computerPushButton = function(color) {
  playAudio(color);
  color.classList.add("active");
  setTimeout(function() {
     color.classList.remove("active");
  }, 500);
}

var randomPlay = function() {
  var randomNum = Math.floor(Math.random() * 4);
  gamePlays.push(randomNum);
  computerPlay(randomNum);
}


function delayedFunc(func) {
  setTimeout(func, 1000);
}



var computerPlay = function (number) {
  computerPushButton(colorArray[number]);
}

var computerTurn = function() {

  for (var i = 0; i < gamePlays.length; i++) {
      setTimeout(function(x) { return function() {
        computerPlay(gamePlays[x]);
      }; }(i), 1000*i);
  }
  //randomPlay();
  updateTurns();
}

var logHumanPlay = function(color) {
  if(humanMoveRecord === gamePlays.length) {
    gamePlays.push(colorArray.indexOf(color));
    updateTurns();
    delayedFunc(computerTurn);
    humanMoveRecord = 0;
  } else {
    humanMoveRecord++
  }
};
