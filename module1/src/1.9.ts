{
    // type alias

    type Student = {
        name: string;
        age: number;
        gender: string;
        contactNo?: number;
        isPassed: boolean
    }
    const student1: Student = {
        name: 'mahfuz',
        age: 22,
        gender: 'Male',
        isPassed: true
    }
    const student2: Student = {
        name: 'bilal',
        age: 23,
        gender: 'Male',
        contactNo: 5265632546,
        isPassed: false

    }
    type Students = {
        name: string,
        roll: number,
        isPassed: boolean,
    };

    const student3: Students = {
        name: "Mahfuz",
        roll: 11,
        isPassed: true,
    };
    console.log(student3)
    const student4: Students = {
        name: "Bilal",
        roll: 12,
        isPassed: true,
    };
    type User = string;
    const user: User = 'Mahfuz';
    type IsAdmin = boolean;
    const isAdmin: IsAdmin = true
    type AddNumber = (num1: number, num2: number) => number
    const addNumber: AddNumber = (num1, num2) => num1 + num2;
    type AddN = (num1: number, num2: number) => number;
    const addN: AddNumber = (num1, num2) => num1 + num2;
    console.log(addN(25,30))
}