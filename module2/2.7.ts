{
    //

    // constraints use with keyof
    type vehicle = {
        car: string;
        bike: string;
        ship: string
    }

    type owner1 = "car" | 'bike' | 'ship' /// manually
    type owner2 = keyof vehicle
const user = {
    name: 'Mahfuz',
    roll: 23,
    email: 'mahfuz@gmail.com'
}
    const getUserData = <X, Y extends keyof X> (obj: X, key: Y)=>{
        return obj[key]

    }
    const  user1 = getUserData(user, 'name')
    //

}