// Player object constructor

class Player {
  constructor(name, move1, move2) {
    ;(this.name = name), (this.move1 = move1), (this.move2 = move2)
  }
}
// Players

const Benzema = new Player('Benzema', 'Pass', 'Shoot')
const Casemiro = new Player('Casemiro', 'Pass', 'Shoot')
const Carvajal = new Player('Carvajal', 'Tackle', 'Pass')
const Memphis = new Player('Memphis', 'Pass', 'Shoot')
const DeJong = new Player('DeJong', 'Pass', 'Shoot')
const Pique = new Player('Pique', 'Tackle', 'Pass')

// Stamina Object

const stamina = {
  fcb: 500,
  rm: 500
}

// Game order array

const order = [Memphis, Carvajal, DeJong, Casemiro, Benzema, Pique]

// Button Event Listeners

const button1 = document.querySelector('#button1')
