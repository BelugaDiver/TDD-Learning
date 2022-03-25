"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Game {
  constructor() {
    this.rolls = new Array(21).fill(0);
    this.currentRoll = 0;
  }

  get score() {
    let total = 0;
    let frameIndex = 0;

    for (let frame = 0; frame < 10; frame++) {
      if (this.rolls[frameIndex] == 10) {
        total += 10 + this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
        frameIndex--;
      } else if (this.isSpare(frameIndex)) {
        total += 10 + this.rolls[frameIndex + 2];
      } else {
        total += this.rolls[frameIndex] + this.rolls[frameIndex + 1];
      }

      frameIndex += 2;
    }

    return total;
  }

  isSpare() {
    let frameIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return this.rolls[frameIndex] + this.rolls[frameIndex] == 10;
  }

  roll(pins) {
    this.rolls[this.currentRoll++] = pins;
  }

}

var _default = Game;
exports.default = _default;