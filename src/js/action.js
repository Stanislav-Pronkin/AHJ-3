// import { game } from '..';
import { game, state } from './app';

export default class Action {
  static bang(e) {
    if (e.classList.contains('character')) {
      console.log('Поймал');
      state.winUser();
      game.character.parentNode.removeChild(game.character);
    }
  }
}
