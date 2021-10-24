export default class GameState {
  constructor() {
    this.missed = document.querySelector('.missed');
    this.catch = document.querySelector('.catch');
    this.scoreUser = 0;
    this.scoreGoblin = -1;
    this.lock;
  }

  winUser() {
    this.scoreUser += 1;
    this.scoreGoblin -= 1;
    this.catch.textContent = `Поймал ${this.scoreUser}`;
  }

  winGoblin() {
    this.scoreGoblin += 1;
    if (this.scoreGoblin < 0) {
      this.missed.textContent = 'Пропущено 0';
    } else {
      this.missed.textContent = `Пропущено ${this.scoreGoblin}`;
    }

    if (this.scoreGoblin > 5) {
      this.lock = true;
    }
  }

  refreshState() {
    if (this.scoreGoblin === -1) {
      this.missed.textContent = 'Пропущено 0';
    } else {
      this.missed.textContent = `Пропущено ${this.scoreGoblin}`;
    }

    this.catch.textContent = `Поймал ${this.scoreUser}`;
  }

  clearState() {
    this.scoreUser = 0;
    this.scoreGoblin = -1;
    this.lock = false;
  }
}
