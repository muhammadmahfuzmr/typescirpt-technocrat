{
    //
    // Type alias and interface

    // declare type with type alias

    type User1 = {
        name: string;
        age: number
    }
    const user1: User1 = {
        name: "Mahfuz",
        age: 22,
    }

    // declare type with interface

    interface User2 {
        name: string;
        age: number
    }
    const user2: User2 = {
        name: "Bilal",
        age: 22
    }

    // Extending type with type alias and interface 

    type UserWithRoll1 = User1 & { roll: number }
    const userWithRoll1: UserWithRoll1 = {
        name: "Jawad",
        age: 22,
        roll: 2
    }


    interface UserWithRoll2 extends User2 {
        roll: number
    }

    const userWithRoll2: UserWithRoll2 = {
        name: "Muhammd",
        roll: 3,
        age: 22
    }

    // declare array type with type alias and interface

    type MarkList1 = number[];
    const markList1: MarkList1 = [12, 38, 96]

    interface MarkList2 {
        [index: number]: number;
    }

    const markList2: MarkList2 = [36, 98, 95]


    // declare function type with type alias and interface
    type Add = (num1: number, num2: number) => number;

    const add: Add = (num1, num2) => num1 + num2;


    interface Add2 {
        (num1: number, num2: number): number
    }

    const add2: Add2 = (num1, num2) => num1 + num2;
    //
}