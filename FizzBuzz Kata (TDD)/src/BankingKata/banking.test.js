import Banking from './banking'

describe('Suite to test banking procedures', () => {
   test('that we can deposit cash in a bank account', () => {
      let b = new Banking();
      expect(b.deposit(20)).toEqual(20)
   })

   test('that we can deposit consecutive times', () => {
      let b = new Banking();
      b.deposit(20)
      b.deposit(30)
      b.deposit(50)
      expect(b.balance).toEqual(100)
   })

   test('that we cannot deposit a negative balance', () => {
      let b = new Banking();
      expect(() => {
         try {
            b.deposit(-10)
         } catch (e) {
            throw e
         }
      }).toThrow(/Negative/)
   })

   test('that we can withdraw funds', () => {
      let b = new Banking()

      b.deposit(20)
      b.deposit(30)
      b.deposit(50)

      expect(b.withdraw(25)).toEqual(75)
   })

   test('that we cannot withdraw negative balances', () => {
      let b = new Banking()

      b.deposit(100)

      expect(() => {
         try {
            b.withdraw(-10)
         } catch (e) {
            throw e
         }
      }).toThrow(/Negative/)
   })

   test('that we can print empty statement', () => {
      let b = new Banking()
      expect(b.printStatement()).toEqual([])
   })

   test('that we can print only deposit statement', () => {
      let b = new Banking()
      b.deposit(20)
      b.deposit(20)
      b.deposit(20)
      expect(b.printStatement()).toMatchObject([
         { date: expect.any(Date), amount: 20, balance: 20 },
         { date: expect.any(Date), amount: 20, balance: 40 },
         { date: expect.any(Date), amount: 20, balance: 60 },
      ])
   })

   test('that we can print only withdraw statement', () => {
      let b = new Banking()
      b.withdraw(20)
      b.withdraw(20)
      b.withdraw(20)
      expect(b.printStatement()).toMatchObject([
         { date: expect.any(Date), amount: -20, balance: -20 },
         { date: expect.any(Date), amount: -20, balance: -40 },
         { date: expect.any(Date), amount: -20, balance: -60 },
      ])
   })

   test('that we can print both deposit and withdraw statements', () => {
      let b = new Banking()

      b.deposit(40)
      b.withdraw(20)
      b.deposit(10)
      b.withdraw(5)

      expect(b.printStatement()).toMatchObject([
         { date: expect.any(Date), amount: 40, balance: 40 },
         { date: expect.any(Date), amount: -20, balance: 20 },
         { date: expect.any(Date), amount: 10, balance: 30 },
         { date: expect.any(Date), amount: -5, balance: 25 },
      ])
   })
})