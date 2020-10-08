document.body.addEventListener('click', (event) => {
  console.log(event.target)
})

// game board variables
const container = document.querySelector('.container')
const blue = document.querySelector('#blue')
const red = document.querySelector('#red')
const yellow = document.querySelector('#yellow')
const green = document.querySelector('#green')
// under the hood variables
let gameChoice = []
let playerChoice = []
let colorSwitcher = 0

// side button variables



// random logic
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
  return gameChoice
}

// player click action event listener
container.addEventListener('click', (event) => {
  playerChoice.push(event.target.id)
})

if (playerChoice === gameChoice) {
  console.log('yes')
}


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