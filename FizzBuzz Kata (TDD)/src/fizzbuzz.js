class FizzBuzz {
   constructor() { }

   checker(numberToCheck = 0) {
      if (numberToCheck % 3 == 0)
         return "Fizz"

      return numberToCheck;
   }
}

export default FizzBuzz