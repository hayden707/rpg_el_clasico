// Player object constructor

class Player {
  constructor(name, team, move1, move2, position) {
    ;(this.name = name),
      (this.team = team),
      (this.move1 = move1),
      (this.move2 = move2),
      (this.position = position)
  }
}
// Players

const Benzema = new Player('Benzema', 'Madrid', 'pass', 'shoot', 'Offense')
const Casemiro = new Player('Casemiro', 'Madrid', 'pass', 'shoot', 'Offense')
const Carvajal = new Player('Carvajal', 'Madrid', 'tackle', 'clear', 'Defense')
const Memphis = new Player('Memphis', 'Barcelona', 'pass', 'shoot', 'Offense')
const DeJong = new Player('DeJong', 'Barcelona', 'pass', 'shoot', 'Offense')
const Pique = new Player('Pique', 'Barcelona', 'tackle', 'clear', 'Offense')

// Stamina Object

let stamina = {
  fcb: 500,
  rm: 500
}

// Game State
gameState = true

// Game order array

const order = [Memphis, Carvajal, DeJong, Casemiro, Pique, Benzema]
let currentPlayer = Memphis
let index = 0
const offenseMoves = ['Pass', 'Shoot']
const defenseMoves = ['Tackle', 'Clear']

// Global queryselectors

const button1 = document.querySelector('#button1')
const button2 = document.querySelector('#button2')
const text = document.querySelector('#text-box')

// Hide Button2

button2.style.display = 'none'

// Increase index

const increaseIndex = () => {
  index < 5 ? index++ : (index = 0)
}

// Main game functionality

const moveOne = (e) => {
  let move
  stamina.rm -= Math.floor(Math.random() * 50)
  e.target.value === 'button1'
    ? (move = currentPlayer.move1)
    : (move = currentPlayer.move2)
  increaseIndex()
  button1.style.visibility = 'hidden'
  button2.style.visibility = 'hidden'
  document.querySelector('#rm-stamina').innerHTML = `Stamina: ${stamina.rm}`
  text.innerHTML = `${currentPlayer.name}'s move decreased Madrid's stamina by choosing to ${move}.`
  currentPlayer = order[index]
  stamina.fcb -= Math.floor(Math.random() * 50)
  setTimeout(() => {
    text.innerHTML = `${currentPlayer.name} makes a play on the ball.`
    increaseIndex()
    document.querySelector('#fcb-stamina').innerHTML = `Stamina: ${stamina.fcb}`
    currentPlayer = order[index]
  }, 2500)
  setTimeout(() => {
    text.innerHTML = `It's ${currentPlayer.name}'s turn with the ball.`
    button1.innerHTML = currentPlayer.move1
    button2.innerHTML = currentPlayer.move2
    button1.style.visibility = 'visible'
    button2.style.visibility = 'visible'
  }, 5000)
}

const playerMove = () => {
  button1.addEventListener('click', moveOne)
  button2.addEventListener('click', moveOne)
}

const startGame = () => {
  if (currentPlayer.position === 'Offense') {
    button1.innerHTML = 'Pass'
    button2.innerHTML = 'Shoot'
  } else {
    button1.innerHTML = 'Tackle'
    button2.innerHTML = 'Clear'
  }
  button2.style.display = 'block'

  //next

  if (currentPlayer) playerMove()
}

// const testBtn = (e) => {
//   console.log(e.target.value)
// }
button1.addEventListener('click', startGame)
