import FizzBuzz from "./fizzbuzz";

describe('Tests for FizzBuzz', () => {
   test('Test for number', () => {
      let fb = new FizzBuzz();

      expect(fb.checker()).toBe(1)
   })
})