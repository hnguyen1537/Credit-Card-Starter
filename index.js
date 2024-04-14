function bankAccount(firstName, lastName) {
  let balance = 0;
  return {
    getAccountName: function () {
      // TODO: Return a string of '<firstName> <lastName'.
       return firstName + ' ' + lastName;

    },

    addCredits: function (credits) {
      // TODO: Increase the balance by the given credits.
        return balance = balance + credits;
    },

    deduct: function (credits) {
      // TODO: Decrease the balance by the given credits.
       return balance = balance - credits;
    },

    getBalance: function () {
      // Returns the current balance.
        return balance;
    },
  };
}

// Example:
let myAccount = bankAccount('John', 'Doe');
console.log(myAccount.getAccountName()); // 'John Doe'
myAccount.addCredits(100);
console.log(myAccount.getBalance()); // 100.

myAccount.deduct(10);
console.log(myAccount.getBalance()); // 90.

// DO NOT CHANGE ANYTHING AFTER THIS LINE.
module.exports = { bankAccount };
