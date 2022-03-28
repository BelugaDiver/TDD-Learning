class Banking {
   constructor() {
      this.acctNo = 0
      this.balance = 0
      this.statement = new Array(0)
   }

   deposit(amount = 0) {
      if (amount < 0)
         throw new Error('Negative Deposit Requested')
      this.balance += amount
      this.statement.push({
         date: new Date(),
         amount: amount,
         balance: this.balance
      })
      return this.balance
   }

   withdraw(amount = 0) {
      if (amount < 0)
         throw new Error('Negative Deposit Requested')
      this.balance -= amount
      this.statement.push({
         date: new Date(),
         amount: (-amount),
         balance: this.balance
      })
      return this.balance
   }

   printStatement() {
      return this.statement
   }
}

export default Banking