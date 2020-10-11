////////// VARIABLES //////////

///// GAME BOARD VARIABLES
const container = document.querySelector('.container')
const blue = document.querySelector('#blue')
const red = document.querySelector('#red')
const yellow = document.querySelector('#yellow')
const green = document.querySelector('#green')
const score = document.querySelector('.score')
///// UNDER THE HOOD VARIABLES
let gameChoice = []
let playerChoice = []
let colorSwitcher = 0
let round = 1
let record = 0

///// SIDE BUTTON VARIABLES
const start = document.querySelector('#start')
const restart = document.querySelector('#restart')
const highScore = document.querySelector('#high-score')
///// SCREENS
const gameOverScreen = document.querySelector('#game-over-screen')
const finalScore = document.querySelector('#final-score')
///// SOUNDS
const redSound = document.querySelector('#redSound')
const blueSound = document.querySelector('#blueSound')
const greenSound = document.querySelector('#greenSound')
const yellowSound = document.querySelector('#yellowSound')


////////// GAME RUN LOGIC //////////
///// FUNCTIONS THAT MAKE THE GAME WORK

// function to check if the player choice and game choice is equal
function checkChoices(arr1, arr2) {
  return arr1.toString() === arr2.toString()
}
// funciton to signify a new color and push that color to gameChoice array
function newColor() {
  colorSwitcher = Math.random() * 100
  if (colorSwitcher < 25) {
    signifyBlue()
    gameChoice.push('blue')
  } else if (colorSwitcher < 50) {
    signifyGreen()
    gameChoice.push('green')
  } else if (colorSwitcher < 75) {
    signifyRed()
    gameChoice.push('red')
  } else if (colorSwitcher < 100) {
    signifyYellow()
    gameChoice.push('yellow')
  }
  setTimeout(() => {
    container.classList.remove('dont-cheat')
  }, 1000);
  return gameChoice
}

function newColorLoop() {
  for (let i = 0; i < gameChoice.length; i++) {
    setTimeout(newColor, i * 1000)
  }
}
// function to signify whats already in the array without pushing anything
function replayGameChoice() {
  score.innerText = `Score ${round}`
  for (let i = 0; i < gameChoice.length; i++) {
    if (gameChoice[i] == 'blue') {
        setTimeout(signifyBlue, i * 1000)
    } else if (gameChoice[i] == 'green') {
        setTimeout(signifyGreen, i * 1000)
    } else if (gameChoice[i] == 'red') {
        setTimeout(signifyRed, i * 1000)
    } else if (gameChoice[i] == 'yellow') {
        setTimeout(signifyYellow, i * 1000)    }
  }
}
// functions to light and dim colors
function signifyBlue() {
  blue.classList.add('lightUp')
  blueBeep()
  setTimeout(function () {
    blue.classList.remove('lightUp')
  }, 800)
}
function signifyGreen() {
  green.classList.add('lightUp')
  greenBeep()
  setTimeout(function () {
    green.classList.remove('lightUp')
  }, 800)
}
function signifyRed() {
  red.classList.add('lightUp')
  redBeep()
  setTimeout(function () {
    red.classList.remove('lightUp')
  }, 800)
}
function signifyYellow() {
  yellow.classList.add('lightUp')
  yellowBeep()
  setTimeout(function () {
    yellow.classList.remove('lightUp')
  }, 800)
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

// function to restart the game
function scoreReset() {
  gameChoice = []
  playerChoice = []
  round = 1
}

// function to empty the playerChoice array
function emptyPlayer() {
  playerChoice = []
}
// function to update the high score
function updateHighScore() {
  if (round > record) {
    record = round
    highScore.innerText = `High Score ${record}`
  }
}
// function to go to next round
function nextRound() {
  emptyPlayer()
  replayGameChoice()
  setTimeout(newColor, round * 1000)
  finalScore.innerText = `Final Score: ${round}`
  round++
}


///// GAMEPLAY EVENT LISTENERS
// click start button to start new game
start.addEventListener('click', () => {
  scoreReset()
  newColor()
})
// close game over screen
restart.addEventListener('click', () => {
  gameOverScreen.classList.add('hidden')
})
// plays beep on click
red.addEventListener('click', () => {
  redBeep()
})
blue.addEventListener('click', () => {
  blueBeep()
})
green.addEventListener('click', () => {
  greenBeep()
})
yellow.addEventListener('click', () => {
  yellowBeep()
})

// player click action event listener
container.addEventListener('click', (event) => {
  // pushes color to playerChoice array
  playerChoice.push(event.target.id)
  // if statement to make sure arrays are same length
  if (gameChoice.length == playerChoice.length) {
    // if statement to see if game and player choice are equal
    if (checkChoices(gameChoice, playerChoice) == true) {
      setTimeout(nextRound, 2000)
      container.classList.add('dont-cheat')
      // else the game is over
    } else {
      finalScore.innerText = `Final Score: ${round}`
      updateHighScore()
      scoreReset()
      setTimeout(() => {
        gameOverScreen.classList.remove('hidden')
      }, 1000);
      score.innerText = `Score: 0`
    }
  }
})

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
