{
    //
    // Interface
    // type alias
    type User1 = {
        name: string;
        phone: number
    }
    interface User2 {
        name: string;
        age: number;
    }

    const user2: User2 = {
        name: 'Mahfuz',
        age: 22,
    }
    type UserWithRoll = User2 & { roll: number }
    interface UserWithClass extends User1 { class: number }
    const userWithRoll1: UserWithRoll = {
        name: 'Mahfuzur',
        age: 22,
        roll: 1
    }
    const userWithClass: UserWithClass = {
        name: 'Mahfuzur Rahman',
        phone: 152,
        class: 15,
    }

    // Array type declare with interface 
    // type alias
    type Roll = number[]
    const roll: Roll = [12, 35, 85]
    // use interface
    interface Roll2 {
        [index: number]: number
    }
// function type declare
type Add1 = (num1: number, num2: number)=> number
const add1 : Add1 = (num1, num2)=>num1+num2

interface Add2 {
    (num1:number, num2: number): number
}

const add2 : Add2 = (num1, num2)=>num1+num2
    //
}