// document.body.addEventListener('click', (event) => {
//   console.log(event.target)
// })

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
let round = 0
/////// SIDE BUTTON VARIABLES
const start = document.querySelector('#start')
const restart = document.querySelector('#restart')


// start logic ***********


////////// GAME RUN LOGIC //////////
///// FUNCTIONS THAT MAKE THE GAME WORK



//******** need a function to start next round after player input



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
  console.log(gameChoice)
  return gameChoice
}
// function to signify whats already in the array without pushing anything
function replayGameChoice() {
  for (let i = 0; i < gameChoice.length; i++) {
    console.log(gameChoice[i])
    if (gameChoice[i] == 'blue') {
      setTimeout(signifyBlue, i * 1000)
    } else if (gameChoice[i] == 'green') {
      setTimeout(signifyGreen, i * 1000)
    } else if (gameChoice[i] == 'red') {
      setTimeout(signifyRed, i * 1000)
    } else if (gameChoice[i] == 'yellow') {
      setTimeout(signifyYellow, i * 1000)
    }
  }
}
// functions to light and dim colors
function signifyBlue() {
  blue.classList.add('lightUp')
  setTimeout(function () {
    blue.classList.remove('lightUp')
  }, 1500)
}

function signifyGreen() {
  green.classList.add('lightUp')
  setTimeout(function () {
    green.classList.remove('lightUp')
  }, 1500)
}

function signifyRed() {
  red.classList.add('lightUp')
  setTimeout(function () {
    red.classList.remove('lightUp')
  }, 1500)
}

function signifyYellow() {
  yellow.classList.add('lightUp')
  setTimeout(function () {
    yellow.classList.remove('lightUp')
  }, 1500)
}

//function to restart the game ************
// function reset() {
//   gameChoice = []
//   playerChoice = []
// }


///// EVENT LISTENERS
// function to start new game
start.addEventListener('click', () => {
  newColor()
})
// restart game
// restart.addEventListener('click', () => {
//   reset()
//   console.log(gameChoice)
// })

// player click action event listener
container.addEventListener('click', (event) => {
  playerChoice.push(event.target.id)
  // if statement to make sure arrays are same length
  if (gameChoice.length == playerChoice.length) {
    // if statement to see if game and player choice are equal
    if (checkChoices(gameChoice, playerChoice) == true) {
      console.log('correct')
    } else {
      console.log('incorrect')
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


// Make a function to light up

//computer choose random square
//let player try to choose same square
  //if square is different player loses
//compter chooses same squares then another random one
//let player try to choose same squares

// let round = 4

// for (let i = 0; i <= round; i++) {
//   setTimeout(play, 1000 * i, gameChoice[i])
// }

function go() {
for (let i = 0; i <= round; i++) {
  console.log(gameChoice)
  gameChoice.push(i)
}
  // increase round by 1
  round ++
  console.log(`round ${round}`)
}

// game play function
  //first do replayGameChoice function(replay whatever the array already has and light them up)
  //then do play function(light up new color and add it to the array)

  //later do player click event lister (wait on player attempt to match array)
    // player will click in a sequence and try to match
  //if player is correct redo game play function
      //else game is over



/////// EXTRA LOOSE ENDS
// make sure you can't click score becasue that will push an empty string into the arry of playerChoice
// ALL ******** NEED TO BE FIXED OR MOVED


