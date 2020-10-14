// document.body.addEventListener('click', (event) => {
//   console.log(event.target)
// })
////////// VARIABLES //////////

///// GAME BOARD VARIABLES
const container = document.querySelector(".container");
const blue = document.querySelector("#blue");
const red = document.querySelector("#red");
const yellow = document.querySelector("#yellow");
const green = document.querySelector("#green");
const score = document.querySelector(".score");
const keyboard = document.querySelector('#keyboard')
///// UNDER THE HOOD VARIABLES
let gameChoice = [];
let playerChoice = [];
let colorSwitcher = 0;
let round = 1;
let record = 0;
let keyboardInput = false

///// SIDE BUTTON VARIABLES
const start = document.querySelector("#start");
const restart = document.querySelector("#restart");
const highScore = document.querySelector("#high-score");
///// SCREENS
const gameOverScreen = document.querySelector("#game-over-screen");
const finalScore = document.querySelector("#final-score");
///// SOUNDS
const redSound = document.querySelector("#redSound");
const blueSound = document.querySelector("#blueSound");
const greenSound = document.querySelector("#greenSound");
const yellowSound = document.querySelector("#yellowSound");

/////// HARD MODE ENABLED ///////
const white = document.querySelector("#white");
const orange = document.querySelector("#orange");
const purple = document.querySelector("#purple");
const magenta = document.querySelector("#magenta");
const hardModeButton = document.querySelector("#hard-mode-button");
let hardMode = false;
function enableHardMode() {
  hardMode = true;
  white.classList.remove("hidden");
  orange.classList.remove("hidden");
  purple.classList.remove("hidden");
  magenta.classList.remove("hidden");
}
///// SOUNDS
const whiteSound = document.querySelector("#whiteSound");
const orangeSound = document.querySelector("#orangeSound");
const purpleSound = document.querySelector("#purpleSound");
const magentaSound = document.querySelector("#magentaSound");

////////// GAME RUN LOGIC //////////
///// FUNCTIONS THAT MAKE THE GAME WORK

// function to check if the player choice and game choice is equal
function checkChoices(arr1, arr2) {
  return arr1.toString() === arr2.toString();
}
// function to signify a new color and push that color to gameChoice array

function newColor() {
  if (hardMode === true) {
    colorSwitcher = Math.random() * 100;
    if (colorSwitcher < 12.5) {
      signifyBlue();
      gameChoice.push("blue");
    } else if (colorSwitcher < 25) {
      signifyGreen();
      gameChoice.push("green");
    } else if (colorSwitcher < 37.5) {
      signifyRed();
      gameChoice.push("red");
    } else if (colorSwitcher < 50) {
      signifyYellow();
      gameChoice.push("yellow");
    } else if (colorSwitcher < 62.5) {
      signifyWhite();
      gameChoice.push("white");
    } else if (colorSwitcher < 75) {
      signifyOrange();
      gameChoice.push("orange");
    } else if (colorSwitcher < 87.5) {
      signifyPurple();
      gameChoice.push("purple");
    } else if (colorSwitcher < 100) {
      signifyMagenta();
      gameChoice.push("magenta");
    } else
      setTimeout(() => {
        container.classList.remove("dont-cheat");
      }, 1000);
    return gameChoice;
  } else {
    colorSwitcher = Math.random() * 100;
    if (colorSwitcher < 25) {
      signifyBlue();
      gameChoice.push("blue");
    } else if (colorSwitcher < 50) {
      signifyGreen();
      gameChoice.push("green");
    } else if (colorSwitcher < 75) {
      signifyRed();
      gameChoice.push("red");
    } else if (colorSwitcher < 100) {
      signifyYellow();
      gameChoice.push("yellow");
    }
    setTimeout(() => {
      container.classList.remove("dont-cheat");
    }, 1000);
    return gameChoice;
  }
}

// function to signify whats already in the array without pushing anything
function replayGameChoice() {
  score.innerText = `Score ${round}`;
  for (let i = 0; i < gameChoice.length; i++) {
    if (gameChoice[i] == "blue") {
      setTimeout(signifyBlue, i * 1000);
    } else if (gameChoice[i] == "green") {
      setTimeout(signifyGreen, i * 1000);
    } else if (gameChoice[i] == "red") {
      setTimeout(signifyRed, i * 1000);
    } else if (gameChoice[i] == "yellow") {
      setTimeout(signifyYellow, i * 1000);
    } else if (gameChoice[i] == "white") {
      setTimeout(signifyWhite, i * 1000);
    } else if (gameChoice[i] == "orange") {
      setTimeout(signifyOrange, i * 1000);
    } else if (gameChoice[i] == "purple") {
      setTimeout(signifyPurple, i * 1000);
    } else if (gameChoice[i] == "magenta") {
      setTimeout(signifyMagenta, i * 1000);
    }
  }
  container.classList.remove("dont-cheat");
}
// functions to light and dim colors
function signifyBlue() {
  blue.classList.add("lightUp");
  blueBeep();
  setTimeout(function () {
    blue.classList.remove("lightUp");
  }, 800);
}
function signifyGreen() {
  green.classList.add("lightUp");
  greenBeep();
  setTimeout(function () {
    green.classList.remove("lightUp");
  }, 800);
}
function signifyRed() {
  red.classList.add("lightUp");
  redBeep();
  setTimeout(function () {
    red.classList.remove("lightUp");
  }, 800);
}
function signifyYellow() {
  yellow.classList.add("lightUp");
  yellowBeep();
  setTimeout(function () {
    yellow.classList.remove("lightUp");
  }, 800);
}
function signifyWhite() {
  white.classList.add("lightUp");
  whiteBeep();
  setTimeout(function () {
    white.classList.remove("lightUp");
  }, 800);
}
function signifyOrange() {
  orange.classList.add("lightUp");
  orangeBeep();
  setTimeout(function () {
    orange.classList.remove("lightUp");
  }, 800);
}
function signifyPurple() {
  purple.classList.add("lightUp");
  purpleBeep();
  setTimeout(function () {
    purple.classList.remove("lightUp");
  }, 800);
}
function signifyMagenta() {
  magenta.classList.add("lightUp");
  magentaBeep();
  setTimeout(function () {
    magenta.classList.remove("lightUp");
  }, 800);
}
// functions to play beeps
function redBeep() {
  redSound.play();
}
function blueBeep() {
  blueSound.play();
}
function greenBeep() {
  greenSound.play();
}
function yellowBeep() {
  yellowSound.play();
}
function whiteBeep() {
  whiteSound.play();
}
function orangeBeep() {
  orangeSound.play();
}
function purpleBeep() {
  purpleSound.play();
}
function magentaBeep() {
  magentaSound.play();
}

// function to restart the game
function scoreReset() {
  gameChoice = [];
  playerChoice = [];
  round = 1;
}

// function to empty the playerChoice array
function emptyPlayer() {
  playerChoice = [];
}
// function to update the high score
function updateHighScore() {
  if (round > record) {
    record = round;
    highScore.innerText = `High Score ${record}`;
  }
}
// function to go to next round
function nextRound() {
  emptyPlayer();
  replayGameChoice();
  setTimeout(newColor, round * 1000);
  finalScore.innerText = `Final Score: ${round}`;
  round++;
}

///// GAMEPLAY EVENT LISTENERS
// click start button to start new game
start.addEventListener("click", () => {
  scoreReset();
  newColor();
});
// close game over screen
restart.addEventListener("click", () => {
  gameOverScreen.classList.add("hidden");
});
// plays beep on click
red.addEventListener("click", () => {
  redBeep();
});
blue.addEventListener("click", () => {
  blueBeep();
});
green.addEventListener("click", () => {
  greenBeep();
});
yellow.addEventListener("click", () => {
  yellowBeep();
});
white.addEventListener("click", () => {
  whiteBeep();
});
orange.addEventListener("click", () => {
  purpleBeep();
});
purple.addEventListener("click", () => {
  orangeBeep();
});
magenta.addEventListener("click", () => {
  magentaBeep();
});



// keyboard event listeners
window.document.addEventListener('keydown', (event) => {
  if (event.key === '=') {
    keyboardInput = true
    keyboard.innerText = 'Keyboard Input On'
    keyboard.style.color = 'green'
  }
  if (event.key === '0') {
    keyboardInput = false
    keyboard.innerText = 'Keyboard Input Off'
    keyboard.style.color = 'red'
  }
})

//keyboard input functions
window.document.addEventListener("keydown", (event) => {
  if (keyboardInput == true) {
    // pushes color to playerChoice array
    if (event.key === "r") {
      signifyRed()
      playerChoice.push("red");
    }
    if (event.key === "b") {
      signifyBlue()
      playerChoice.push("blue");
    }
    if (event.key === "g") {
      signifyGreen()
      playerChoice.push("green");
    }
    if (event.key === "y") {
      signifyYellow()
      playerChoice.push("yellow");
    }
    if (event.key === "w") {
      signifyWhite()
      playerChoice.push("white");
    }
    if (event.key === "o") {
      signifyOrange()
      playerChoice.push("orange");
    }
    if (event.key === "p") {
      signifyPurple()
      playerChoice.push("purple");
    }
    if (event.key === "m") {
      signifyMagenta()
      playerChoice.push("magenta");
    }
    // if statement to make sure arrays are same length
    if (gameChoice.length == playerChoice.length) {
      // if statement to see if game and player choice are equal
      if (checkChoices(gameChoice, playerChoice) == true) {
        setTimeout(nextRound, 2000);
        container.classList.add("dont-cheat");
        // else the game is over
      } else {
        finalScore.innerText = `Final Score: ${round}`;
        updateHighScore();
        //hard mode
        scoreReset();
        setTimeout(() => {
          gameOverScreen.classList.remove("hidden");
        }, 1000);
        score.innerText = `Score: 0`;
      }
    }
  }
});
  
// player click action event listener
container.addEventListener("click", (event) => {
  // pushes color to playerChoice array
  playerChoice.push(event.target.id);
  // if statement to make sure arrays are same length
  if (gameChoice.length == playerChoice.length) {
    // if statement to see if game and player choice are equal
    if (checkChoices(gameChoice, playerChoice) == true) {
      setTimeout(nextRound, 2000);
      container.classList.add("dont-cheat");
      // else the game is over
    } else {
      finalScore.innerText = `Final Score: ${round}`;
      updateHighScore();
      //hard mode
      scoreReset();
      setTimeout(() => {
        gameOverScreen.classList.remove("hidden");
      }, 1000);
      score.innerText = `Score: 0`;
    }
  }
});
// enable hard mode
hardModeButton.addEventListener("click", () => {
  enableHardMode();
});

// Make variables for player and computer
// Each will hold an array and if player != game , the player loses
// Make variables for each square
// Make each square light up
// Make each square light up randomly
// Need a right and wrong selection
// If correct --> repeat sequence and add another color
// Else wrong -->  end game

//computer choose random square
//let player try to choose same square
//if square is different player loses
//compter chooses same squares then another random one
//let player try to choose same squares

// game play function
//first do replayGameChoice function(replay whatever the array already has and light them up)
//then do play function(light up new color and add it to the array)

//later do player click event lister (wait on player attempt to match array)
// player will click in a sequence and try to match
//if player is correct redo game play function
//else game is over

