// Reference Type --> Object

const user: {
    readonly company:string; //type --> literal types
    firstName: string;
    middleName?: string; // optional
    lastName: string;
    isMarried: boolean
} = {
    company: 'Programming Hero',
    firstName: 'Mahfuz',

    lastName: 'bilal',
    isMarried: true,
}

const student : {
    firstName: string;
    middleName?: string; // Optional type
    lastName: string;
    roll:number;
    class:string;
    readonly isPassed: boolean; // value will not change
    institution: "BGPSC" // Literal type
} = {
    firstName: "Muhammad",
    lastName:  "Bilal",
    roll: 2,
    class: "Twelve",
    institution: "BGPSC",
    isPassed: true

}

