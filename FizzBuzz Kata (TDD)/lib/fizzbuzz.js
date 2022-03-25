"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class FizzBuzz {
  constructor() {}

  checker() {
    let numberToCheck = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    if (numberToCheck % 3 == 0) return "Fizz";
    return numberToCheck;
  }

}

var _default = FizzBuzz;
exports.default = _default;