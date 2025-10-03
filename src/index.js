class Game {
    constructor() {
      this.board = document.getElementById('game-board');
      this.cells = [];
      this.goblin = null;
      this.currentPosition = null;
      this.createBoard();
      this.startGame();
    }
  
    createBoard() {
      for (let i = 0; i < 16; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        this.cells.push(cell);
        this.board.append(cell); 
      }
    }
  
    startGame() {
      this.goblin = document.createElement('div');
      this.goblin.className = 'goblin';
      this.moveGoblin();
      
      setInterval(() => this.moveGoblin(), 1000);
    }
  
    moveGoblin() {
      if (this.currentPosition !== null) {
        this.goblin.remove();
      }
  
      let newPosition;
      do {
        newPosition = Math.floor(Math.random() * 16);
      } while (newPosition === this.currentPosition);
  
      this.currentPosition = newPosition;
      this.cells[newPosition].append(this.goblin); 
    }
  }
  
  new Game();