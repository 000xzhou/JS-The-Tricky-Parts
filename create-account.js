// Write a function called createAccount which creates a bank account given a PIN number and an initial deposit amount. The return value should be an object with four methods on it:
function createAccount(pin, amount = 0) {
  return {
    checkBalance(inputPin) {
      if (inputPin !== pin) return "Invalid PIN.";
      return `$${amount}`;
    },
    deposit(inputPin, inputAmount) {
      if (inputPin !== pin) return "Invalid PIN.";
      amount += inputAmount;
      return `Succesfully deposited $${inputAmount}. Current balance: $${amount}.`;
    },
    withdraw(inputPin, inputAmount) {
      if (inputPin !== pin) return "Invalid PIN.";
      if (inputAmount > amount) {
        return "Withdrawal amount exceeds account balance. Transaction cancelled.";
      }
      amount -= inputAmount;
      return `Succesfully withdrew $${inputAmount}. Current balance: $${amount}.`;
    },
    changePin(inputPin, newInputPin) {
      if (inputPin !== pin) return "Invalid PIN.";
      pin = newInputPin;
      return "PIN successfully changed!";
    },
  };
}
// function createAccount(pin, amount = 0) {
//   this.pin = pin;
//   this.amount = amount;
// }
// // checkBalance: Given the correct PIN, return the current balance. (If the PIN is invalid, return “Invalid PIN.”)
// createAccount.prototype.checkBalance = function (pin) {
//   if (this.pin !== pin) return "Invalid PIN.";

//   return `$${this.amount}`;
// };
// // deposit: Given the correct PIN and a deposit amount, increment the account balance by the amount. (If the PIN is invalid, return “Invalid PIN.”)
// createAccount.prototype.deposit = function (pin, amount) {
//   if (this.pin !== pin) return "Invalid PIN.";

//   this.amount += amount;
//   return `Succesfully deposited $${amount}. Current balance: ${this.amount}.`;
// };
// // withdraw: Given the correct PIN and a withdrawal amount, decrement the account balance by the amount. You also shouldn’t be able to withdraw more than you have. (If the PIN is invalid, return “Invalid PIN.”)
// createAccount.prototype.withdraw = function (pin, amount) {
//   if (this.pin !== pin) return "Invalid PIN.";

//   if (amount < this.amount) {
//     return "Withdrawal amount exceeds account balance. Transaction cancelled.";
//   }
//   this.amount -= amount;
//   return `Succesfully withdrew $${amount}. Current balance: ${this.amount}.`;
// };
// // changePin: Given the old PIN and a new PIN, change the PIN number to the new PIN. (If the old PIN is invalid, return “Invalid PIN.”)
// createAccount.prototype.changePin = function (pin, newPin) {
//   if (this.pin !== pin) return "Invalid PIN.";

//   this.pin = newPin;
//   return `PIN successfully changed!`;
// };
module.exports = { createAccount };
