{
    //
    // Generic Array
    type GenericArray<T> = Array<T> 
    // const Roll : number[] =[12, 52, 36];
    const roll: GenericArray<number> = [12, 52, 36] ;

    // const friends : string[] = ['Mahfuz', 'Jawad', 'Bilal'];
    const friends: GenericArray<string> = ['Mahfuz', 'Jawad', 'Bilal'] ;

    // const isPassed : boolean[] = [true, false, true];
    const isPassed: GenericArray<boolean> = [true, false, true] ;

    const user : GenericArray<{name?:string, age:number, role?:string}> = [
        {
            name:'Mahfuz',
            age:22
        },
        {
            name: 'Bilal',
            age: 23
        },
        {
            role: 'Admin',
            age:23
        }
    ]
// Generic Tuple 
type GenericTuple<X, Y> = [X, Y]
const manus : GenericTuple<string, string> = ['Mx. X', 'Mx. Y']
const user100 : GenericTuple<number, {name:string, age:number}> = [125, {name:'Mahfuzur Rahman Bilal',age: 22}]

    //
}