"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Banking {
  constructor() {
    this.acctNo = 0;
    this.balance = 0;
    this.statement = new Array(0);
  }

  deposit() {
    let amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    if (amount < 0) throw new Error('Negative Deposit Requested');
    this.balance += amount;
    this.statement.push({
      date: new Date(),
      amount: amount,
      balance: this.balance
    });
    return this.balance;
  }

  withdraw() {
    let amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    if (amount < 0) throw new Error('Negative Deposit Requested');
    this.balance -= amount;
    this.statement.push({
      date: new Date(),
      amount: -amount,
      balance: this.balance
    });
    return this.balance;
  }

  printStatement() {
    return this.statement;
  }

}

var _default = Banking;
exports.default = _default;