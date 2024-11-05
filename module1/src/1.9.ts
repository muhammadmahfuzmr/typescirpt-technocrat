{
    // type alias

    type Student = {
        name: string;
        age: number;
        gender: string;
        contactNo?: number;
        isPassed: boolean
    }
    const student1 : Student = {
        name: 'mahfuz',
        age: 22,
        gender: 'Male',
        isPassed: true
    }
const student2 : Student = {
    name: 'bilal',
    age: 23,
    gender: 'Male',
    contactNo:5265632546,
    isPassed: false
    
}

type User = string;
const user : User = 'Mahfuz';
type IsAdmin = boolean;
const isAdmin : IsAdmin = true
type AddNumber = (num1:number, num2:number)=>number
const addNumber : AddNumber = (num1, num2)=>num1 + num2;
}