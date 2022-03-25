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

   test('Test for FizzBuzz', () => {
      expect(fb.checker(15)).toBe("FizzBuzz")
   })
})

describe('Test list generation for FizzBuzz', () => {
   let fb = undefined;
   beforeEach(() => {
      fb = new FizzBuzz();
   })

   const listTo15 = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]

   test('Test Empty List', () => {
      expect(fb.list(0)).toStrictEqual([])
   })

   test('Test List up to 15', () => {
      expect(fb.list(15)).toStrictEqual(listTo15)
   })
})