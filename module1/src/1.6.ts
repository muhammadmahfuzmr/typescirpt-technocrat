{

// Learning function
        // Normal Function
        // Arrow Function

function add (num1 : number, num2 : number) : number {
    return num1 + num2
}
add(2,5)

const addArrow = (num1 : number, num2 : number=10) : number =>{
    return num1 + num2
}
console.log(addArrow(25, 35))
// Object --> function --> method

const poorUser = {
    name: 'mahfuz',
    balance: 20,
    addBalance(balance:number) : string{
        return `My new balance is : ${this.balance + balance}` ;
    }
}

console.log(poorUser.addBalance(500))

const arr : number[] =  [12, 52, 54]
const newArr  : number[] = arr.map((elem: number) : number =>elem*elem)
}