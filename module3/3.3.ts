{
    //
    // type guard

    // typeof as a type guard
    type AlphaNumeric = string | number
    const add = (param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2;
        } else {
            return param1.toString() + param2.toString()
        }
    }

    const result1: AlphaNumeric = add(12, 30)
    const result2: AlphaNumeric = add("34", 24)
    const result3: AlphaNumeric = add("Mahfuz", "Bilal")
    console.log({result1}, {result2}, {result3})
    // console.log(result2)


// In Guard

interface NormalUser {
    name: string
}

type AdminUser = {
    name: string;
    role: "admin"
}
const getUser = (user: NormalUser | AdminUser) =>{
    if('role' in user) {
        console.log(`My name is ${user.name} and my role is ${user.role}`)
    } else{
        console.log(`My name is ${user.name}`)
    }
}
const normalUser : NormalUser = {
    name: "Mr. Normal Bhai"
}
const adminUser : AdminUser = {
    name: "Mr. Admin Bhai",
    role: "admin"
}

getUser(adminUser)
getUser(normalUser)

    //
}