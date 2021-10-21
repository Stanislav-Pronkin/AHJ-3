export default class Move {
  constructor() {
    this.position;
  }

  getPosition(activePos, cells) {
    do {
      this.position = Math.round(Math.random() * (cells.length - 1));
    } while (activePos === this.position);
    return this.position;
  }
}
