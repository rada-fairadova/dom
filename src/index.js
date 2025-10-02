import './styles.css';
import gnomeImage from './assets/gnome.png';

class GnomeGame {
  constructor() {
    this.boardSize = 4;
    this.currentPosition = null;
    this.gnomeElement = null;
    this.moveInterval = null;
    this.init();
  }

  init() {
    this.createGameBoard();
    this.createGnome();
    this.startMovement();
  }

  createGameBoard() {
    const gameBoard = document.getElementById('gameBoard');
    gameBoard.innerHTML = '';

    for (let i = 0; i < this.boardSize * this.boardSize; i++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.dataset.index = i;
      gameBoard.appendChild(cell);
    }
  }

  createGnome() {
    this.gnomeElement = document.createElement('img');
    this.gnomeElement.src = gnomeImage;
    this.gnomeElement.className = 'gnome';
    this.gnomeElement.alt = 'Gnome character';

    this.moveToRandomPosition();
  }

  getRandomPosition() {
    return Math.floor(Math.random() * this.boardSize * this.boardSize);
  }

  moveToRandomPosition() {
    let newPosition;

    do {
      newPosition = this.getRandomPosition();
    } while (newPosition === this.currentPosition);

    this.placeGnome(newPosition);
  }

  placeGnome(position) {
    const cells = document.querySelectorAll('.cell');
    
    if (this.currentPosition !== null) {
      const currentCell = cells[this.currentPosition];
      currentCell.classList.remove('with-gnome');
      currentCell.innerHTML = '';
    }

    const newCell = cells[position];
    newCell.appendChild(this.gnomeElement);
    newCell.classList.add('with-gnome');
    
    this.currentPosition = position;
  }

  startMovement() {
    this.moveInterval = setInterval(() => {
      this.moveToRandomPosition();
    }, 2000);
  }

  stopMovement() {
    if (this.moveInterval) {
      clearInterval(this.moveInterval);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new GnomeGame();
});

export default GnomeGame;