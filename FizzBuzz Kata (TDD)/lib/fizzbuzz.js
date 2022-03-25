"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class FizzBuzz {
  constructor() {}

  checker() {
    let numberToCheck = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    if (numberToCheck % 3 == 0 && numberToCheck % 5 == 0) return "FizzBuzz";
    if (numberToCheck % 3 == 0) return "Fizz";
    if (numberToCheck % 5 == 0) return "Buzz";
    return numberToCheck;
  }

  list(length) {
    let outputList = new Array();

    for (let i = 1; i <= length; i++) {
      outputList.push(this.checker(i));
    }

    return outputList;
  }

}

var _default = FizzBuzz;
exports.default = _default;