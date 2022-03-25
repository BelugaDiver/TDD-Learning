class FizzBuzz {
   constructor() { }

   checker(numberToCheck = 0) {
      if (numberToCheck % 3 == 0 && numberToCheck % 5 == 0)
         return "FizzBuzz"
      if (numberToCheck % 3 == 0)
         return "Fizz";
      if (numberToCheck % 5 == 0)
         return "Buzz";

      return numberToCheck;
   }

   list(length) {
      let outputList = new Array();

      for (let i = 1; i <= length; i++) {
         outputList.push(this.checker(i))
      }

      return outputList;
   }
}

export default FizzBuzz