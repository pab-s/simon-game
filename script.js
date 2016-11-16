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

//audio
var audio1 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
var audio2 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
var audio3 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
var audio4 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');



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

var updateTurns = function() {
  turns++;
  countScreen[0].innerHTML = turns;
};

var logHumanPlay = function(color) {
  gamePlays.push(colorArray.indexOf(color));
  updateTurns();
  console.log("turns " + turns);
  console.log(gamePlays);
};

var computerPlay = function(color) {
  playAudio(color);
  color.classList.add("active");
  setTimeout(function() {
     color.classList.remove("active");
  }, 500);
}

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


var randomPlay = function () {
  var randomNum = Math.floor(Math.random() * 4);
  gamePlays.push(randomNum);
  updateTurns();
  computerPlay(colorArray[randomNum]);
}

var computerTurn = function() {
  randomPlay();
  console.log("turns " + turns);
  console.log(gamePlays);
}

start.addEventListener("click", function() {
  computerTurn();
});
