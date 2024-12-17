{
    // Utility types

    // Pick

    type Person = {
        name: string;
        age: number;
        contact: number;
        email?: string
    }

    type Name = Pick<Person, "name">
    type NameAge = Pick<Person, "name" | "age">

    // Omit

    type Contact = Omit<Person, "name" | "age">

    // Required

    type PersonRequired = Required<Person>

    // Partial

    type PersonPartial = Partial<Person>

    // ReadOnly
    type PersonReadOnly = Readonly<Person>
    const person: PersonReadOnly = {
        name: "Mr. Mahfuz",
        age: 22,
        contact: 25632,
        email: "mahfuz@gmail.com"
    }
    //  person.name = "Mr.Jawad"

    // Record

    type MyObj = {
        a: string;
        b: string;
    }
    const myObj1: MyObj = {
        a: "aa",
        b: "bb",
        c: "cc"
    }
    type MyObjRecord = Record<string, string>
    const myObj2: MyObjRecord = {
        a: "aa",
        b: "bb",
        c: "cc",
        d: "cc"
    }


type EmptyObject = Record<string, unknown>
const emptyObject : EmptyObject = {
    name: "Mahfuz",
    roll: 12,
    age: 22,
    email: "mahfuz@gmail.com"
}


    //
}