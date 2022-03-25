import FizzBuzz from "./fizzbuzz";

describe('Tests for FizzBuzz', () => {
   let fb = undefined;
   beforeEach(() => {
      fb = new FizzBuzz();
   })

   test('Test for number', () => {
      expect(fb.checker(1)).toBe(1)
   })

   test('Test for Fizz', () => {
      expect(fb.checker(3)).toBe("Fizz")
   })

   test('Test for Buzz', () => {
      expect(fb.checker(5)).toBe("Buzz")
   })
})