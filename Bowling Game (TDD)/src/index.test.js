import Game from "./game.js";

describe('Bowling Game Tests using TDD', () => {
   let g = undefined;

   beforeEach(() => {
      g = new Game;
   })

   function rollMany(numOfTimes = 20, pins = 0) {
      for (let i = 0; i < numOfTimes; i++) {
         g.roll(pins);
      }
   }

   function rollSpare() {
      g.roll(5);
      g.roll(5);
   }

   test('Test Gutter Game', () => {
      rollMany();
      expect(g.score).toBe(0);
   });

   test('Test All Ones', () => {
      rollMany(20, 1);
      expect(g.score).toBe(20);
   });

   test('Test One Spare', () => {
      rollSpare();
      g.roll(3);
      rollMany(17, 0);

      expect(g.score).toBe(16)
   })

   test('Test One Strike', () => {
      g.roll(10); // Strike
      g.roll(3);
      g.roll(4);
      rollMany(16, 0);
      expect(g.score).toBe(24);
   })
})