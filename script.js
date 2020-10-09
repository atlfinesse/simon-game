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


// start logic
start.addEventListener('click', () => {
  play()
})

// game run logic
// setTimeout(() => {
  
// }, timeout);
function play() {
  colorSwitcher = Math.random() * 100
  if (colorSwitcher < 25) {
    blue.classList.add('lightUp')
    setTimeout(dimBlue, 850)
    gameChoice.push('blue')
  } else if (colorSwitcher < 50) {
    green.classList.add('lightUp')
    setTimeout(dimGreen, 850)
    gameChoice.push('green')
  } else if (colorSwitcher < 75) {
    red.classList.add('lightUp')
    setTimeout(dimRed, 850)
    gameChoice.push('red')
  } else if (colorSwitcher < 100) {
    yellow.classList.add('lightUp')
    setTimeout(dimYellow, 850)
    gameChoice.push('yellow')
  }
  console.log(gameChoice)
  return gameChoice
}
///// FUNCTIONS THAT MAKE THE GAME WORK
// function to check if the player choice and game choice is equal
function checkChoices(arr1, arr2) {
  return arr1.toString() === arr2.toString()
}
// functions to dim colors
function dimBlue() {
  blue.classList.remove('lightUp')
}
function dimGreen() {
  green.classList.remove('lightUp')
}
function dimRed() {
  red.classList.remove('lightUp')
}
function dimYellow() {
  yellow.classList.remove('lightUp')
}
//function to restart the game
function restart() {
  gameChoice = []
  playerChoice = []
}


///// EVENT LISTENERS
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


// let newRound = setTimeout(play, 2000)


function go() {
for (let i = 0; i <= round; i++) {
  console.log(gameChoice)
  gameChoice.push(i)
}
  // increase round by 1
  round ++
  console.log(`round ${round}`)
}

/////// EXTRA LOOSE ENDS
// make sure you can't click score becasue that will push an empty string into the arry of playerChoice

function replayGameChoice() {
  // tell me whats already in the array without pushing anything
  // light up whats in the array

  for (let i = 0; i < gameChoice.length; i++) {
    console.log(gameChoice[i])
    if (gameChoice[i] == 'blue') {
        console.log('it was blue')
      blue.classList.add('lightUp')
      setTimeout(dimBlue, 850)
    } else if (gameChoice[i] == 'green') {
        console.log('it was green')
      green.classList.add('lightUp')
      setTimeout(dimGreen, 850)
    } else if (gameChoice[i] == 'red') {
      console.log('it was red')
      red.classList.add('lightUp')
      setTimeout(dimRed, 850)
    } else if (gameChoice[i] == 'yellow') {
      console.log('it was yellow')
      yellow.classList.add('lightUp')
      setTimeout(dimYellow, 850)
    }
  }
}


// game play function
  //first do replayGameChoice function(replay whatever the array already has and light them up)
  //then do play function(light up new color and add it to the array)

  //lastly wait on player attempt to match array
  //if player is correct redo game play function