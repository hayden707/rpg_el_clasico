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

const Benzema = new Player('Benzema', 'Madrid', 'PASS', 'SHOOT', 'Offense')
const Casemiro = new Player('Casemiro', 'Madrid', 'PASS', 'SHOOT', 'Offense')
const Carvajal = new Player('Carvajal', 'Madrid', 'TACKLE', 'CLEAR', 'Defense')
const Memphis = new Player('Memphis', 'Barcelona', 'PASS', 'SHOOT', 'Offense')
const DeJong = new Player('DeJong', 'Barcelona', 'PASS', 'SHOOT', 'Offense')
const Pique = new Player('Pique', 'Barcelona', 'TACKLE', 'CLEAR', 'Offense')

// Game Data Object

let GameData = {
  fcb: 500,
  rm: 500,
  winner: false
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

// Player queryselectors and add to object

Benzema.image = document.querySelector('#rm1')
Casemiro.image = document.querySelector('#rm2')
Carvajal.image = document.querySelector('#rm3')
Memphis.image = document.querySelector('#fcb1')
DeJong.image = document.querySelector('#fcb2')
Pique.image = document.querySelector('#fcb2')

// Hide Button2

button2.style.display = 'none'

// Increase index

const increaseIndex = () => {
  index < 5 ? index++ : (index = 0)
}

// Restart Game

const restart = () => {
  window.location.reload(false)
}

// Check Winner

const checkWin = () => {
  if (GameData.fcb <= 0 || GameData.rm <= 0) {
    GameData.winner = true
    if (GameData.rm <= 0) {
      Benzema.image.style.visibility = 'hidden'
      Casemiro.image.style.visibility = 'hidden'
      Carvajal.image.style.visibility = 'hidden'
      document.querySelector('#rm-stamina').innerHTML = `Stamina: 0`
      text.innerHTML = 'Barcelona Scores!'
    } else if (GameData.fcb <= 0) {
      Memphis.image.style.visibility = 'hidden'
      DeJong.image.style.visibility = 'hidden'
      Pique.image.style.visibility = 'hidden'
      document.querySelector('#fcb-stamina').innerHTML = `Stamina: 0`
      text.innerHTML = 'Real Madrid Scores!'
    }
    button1.innerHTML = 'Play Again'
    button1.addEventListener('click', restart)
    button2.style.visibility = 'hidden'
  }
}

// Main game functionality

const moveOne = (e) => {
  if (GameData.winner === false) {
    let move
    GameData.rm -= Math.floor(Math.random() * 100)
    checkWin()
    if (GameData.winner === false) {
      e.target.value === 'button1'
        ? (move = currentPlayer.move1)
        : (move = currentPlayer.move2)
      currentPlayer.team === 'Barcelona'
        ? (currentPlayer.image.style.gridColumnStart = '3')
        : (currentPlayer.image.style.gridColumnStart = '1')
      increaseIndex()
      button1.style.visibility = 'hidden'
      button2.style.visibility = 'hidden'
      document.querySelector(
        '#rm-stamina'
      ).innerHTML = `Stamina: ${GameData.rm}`
      text.innerHTML = `${currentPlayer.name}'s move decreased Madrid's stamina by choosing to ${move}.`
      currentPlayer = order[index]
      GameData.fcb -= Math.floor(Math.random() * 50)
      checkWin()
    }
    if (GameData.winner == false) {
      setTimeout(() => {
        text.innerHTML = `${currentPlayer.name} makes a play on the ball.`
        currentPlayer.team === 'Barcelona'
          ? (currentPlayer.image.style.gridColumnStart = '2')
          : (currentPlayer.image.style.gridColumnStart = '3')
        increaseIndex()
        document.querySelector(
          '#fcb-stamina'
        ).innerHTML = `Stamina: ${GameData.fcb}`
        currentPlayer = order[index]
      }, 2500)
      setTimeout(() => {
        // if  0
        if (index === 0) {
          fcb1.style.gridColumnStart = '3'
          rm1.style.gridColumnStart = '1'
        }
        index > 0 && order[index - 1].team === 'Barcelona'
          ? (order[index - 1].image.style.gridColumnStart = '3')
          : index > 0 && order[index - 1].team === 'Madrid'
          ? (order[index - 1].image.style.gridColumnStart = '1')
          : null
        index > 0 && currentPlayer.team === 'Barcelona'
          ? (currentPlayer.image.style.gridColumnStart = '2')
          : (currentPlayer.image.style.gridColumnStart = '3')
        text.innerHTML = `It's ${currentPlayer.name}'s turn with the ball.`
        button1.innerHTML = currentPlayer.move1
        button2.innerHTML = currentPlayer.move2
        button1.style.visibility = 'visible'
        button2.style.visibility = 'visible'
      }, 5000)
    }
  } else {
    return
  }
}

const playerMove = () => {
  button1.addEventListener('click', moveOne)
  button2.addEventListener('click', moveOne)
}

// Starter function
const startGame = () => {
  if (currentPlayer.position === 'Offense') {
    button1.innerHTML = 'PASS'
    button2.innerHTML = 'SHOOT'
  } else {
    button1.innerHTML = 'TACKLE'
    button2.innerHTML = 'CLEAR'
  }
  button2.style.display = 'block'

  //next
  currentPlayer.image.style.gridColumnStart = '2'
  if (currentPlayer) playerMove()

  console.log(GameData.winner)
}

button1.addEventListener('click', startGame)
