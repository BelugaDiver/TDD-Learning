"use strict";

var _fizzbuzz = _interopRequireDefault(require("./fizzbuzz"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Tests for FizzBuzz', () => {
  test('Test for number', () => {
    let fb = new _fizzbuzz.default();
    expect(fb.checker()).toBe(1);
  });
});