"use strict";

var _fizzbuzz = _interopRequireDefault(require("./fizzbuzz"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Tests for FizzBuzz', () => {
  let fb = undefined;
  beforeEach(() => {
    fb = new _fizzbuzz.default();
  });
  test('Test for number', () => {
    expect(fb.checker(1)).toBe(1);
  });
  test('Test for Fizz', () => {
    expect(fb.checker(3)).toBe("Fizz");
  });
  test('Test for Buzz', () => {
    expect(fb.checker(5)).toBe("Buzz");
  });
});