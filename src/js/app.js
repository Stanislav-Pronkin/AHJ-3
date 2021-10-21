import img from '../pic/goblin.png';
import Action from './action';
import GameState from './gameState';
import Move from './move';

export const state = new GameState();
const move = new Move();

class Game {
  constructor() {
    this.board = document.querySelector('mainfield');
    this.cells = document.getElementsByClassName('field');
    this.character = document.createElement('img');
    this.listener = (event) => {
      Action.bang(event.target);
    };
    this.activePosition;
  }

  init() {
    state.refreshState();
    this.character.src = img;
    this.character.className = 'character';
    this.interval = setInterval(() => {
      this.activePosition = move.getPosition(this.activePosition, this.cells);
      this.cells[this.activePosition].appendChild(this.character);
      state.winGoblin();
      if (state.lock) {
        this.end();
      }
    }, 1000);
    document.addEventListener('click', this.listener);
  }

  end() {
    alert('Вы проиграли, попробуйте еще раз');
    clearInterval(this.interval);
    document.removeEventListener('click', this.listener);
    state.clearState();
    this.init();
  }
}

export const game = new Game();
