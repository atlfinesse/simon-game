// document.body.addEventListener('click', (event) => {
//   console.log(event.target)
// })

///// GAME BOARD VARIABLES
const container = document.querySelector('.container')
const blue = document.querySelector('#blue')
const red = document.querySelector('#red')
const yellow = document.querySelector('#yellow')
const green = document.querySelector('#green')
const start = document.querySelector('.start')
///// UNDER THE HOOD VARIABLES
let gameChoice = []
let playerChoice = []
let colorSwitcher = 0

/////// SIDE BUTTON VARIABLES



// start logic
start.addEventListener('click', () => {
  play()
})

// game run logic
function play() {
  colorSwitcher = Math.random() * 100
  if (colorSwitcher < 25) {
    blue.classList.add('lightUp')
    gameChoice.push('blue')
  } else if (colorSwitcher < 50) {
    green.classList.add('lightUp')
    gameChoice.push('green')
  } else if (colorSwitcher < 75) {
    red.classList.add('lightUp')
    gameChoice.push('red')
  } else if (colorSwitcher < 100) {
    yellow.classList.add('lightUp')
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
///// EVENT LISTENERS
// player click action event listener
container.addEventListener('click', (event) => {
  playerChoice.push(event.target.id)
  // if statement to see if game and player choice are equal
  if (checkChoices(gameChoice, playerChoice) == true) {
    console.log('finally')
  } else {
    console.log('nope')
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
// Make function to toggle on 'dimmer' class to show which button was clicked


// make sure that both arrays are empty when starting a new round


//computer choose random square
//let player try to choose same square
  //if square is different player loses
//compter chooses same square then another random one
//let player try to choose same squares