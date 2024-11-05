"use strict";
{
    // Learning function
    // Normal Function
    // Arrow Function
    function add(num1, num2) {
        return num1 + num2;
    }
    add(2, 5);
    const addArrow = (num1, num2 = 10) => {
        return num1 + num2;
    };
    console.log(addArrow(25, 35));
    // Object --> function --> method
    const poorUser = {
        name: 'mahfuz',
        balance: 20,
        addBalance(balance) {
            return `My new balance is : ${this.balance + balance}`;
        }
    };
    console.log(poorUser.addBalance(500));
    const arr = [12, 52, 54];
    const newArr = arr.map((elem) => elem * elem);
}
