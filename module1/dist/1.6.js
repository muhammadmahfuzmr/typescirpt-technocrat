"use strict";
// Learning function
// Normal Function
// Arrow Function
function add(num1, num2) {
  return num1 + num2;
}
add(2, 5);
const addArrow = (num1, num2 = 10) => num1 + num2;
// Object --> function --> method
const poorUser = {
  name: "mahfuz",
  balance: 0,
  addBalance(balance) {
    return `My new balance is : ${this.balance + balance}`;
  },
};
console.log(poorUser.addBalance(25));
