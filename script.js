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

var btnEvent = function() {
    playAudio(this);
    logHumanPlay(this);
    addActiveClass(this);
}
var startBtnEvent = function() {
  green.addEventListener("mousedown", btnEvent);
  red.addEventListener("mousedown", btnEvent);
  blue.addEventListener("mousedown", btnEvent);
  yellow.addEventListener("mousedown", btnEvent);
}

start.addEventListener("click", function() {
  addPushedClass(this);
  startBtnEvent();
});

var addPushedClass = function(btn) {
  btn.classList.add("btn-pushed");
}

green.disabled = true;

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
var addActiveClass = function(color) {
  color.classList.add("active");
  setTimeout(function() {
     color.classList.remove("active");
  }, 500);
}
var computerPushButton = function(color) {
  playAudio(color);
  addActiveClass(color);
}

var randomPlay = function() {
  var randomNum = Math.floor(Math.random() * 4);
  gamePlays.push(randomNum);
  computerPlay(randomNum);
}


function delayedFunc(func, time) {
  setTimeout(func, time);
}

var computerPlay = function (number) {
  computerPushButton(colorArray[number]);
}

var computerTurn = function() {
  updateTurns();
  for (var i = 0; i < gamePlays.length; i++) {
      setTimeout(function(x) { return function() {
        computerPlay(gamePlays[x]);
        if(x === gamePlays.length - 1) {
          delayedFunc(randomPlay, 1000);
        }
      }; }(i), 1000*i);
  }
}

var logHumanPlay = function(color) {
  if(humanMoveRecord === gamePlays.length) {
    gamePlays.push(colorArray.indexOf(color));
    updateTurns();
    delayedFunc(computerTurn, 1500);
    humanMoveRecord = 0;
  } else {
    humanMoveRecord++
  }
};
