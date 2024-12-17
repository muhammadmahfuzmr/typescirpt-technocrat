{
    //
    // generic constraint with key of Operator

    type Vehicle = {
        bike: string;
        car: string;
        ship: string
    }
    type Owner1 = "bike" | "car" | "ship";
    type Owner2 = keyof Vehicle
    // Owner1 = Owner2

    const person1: Owner2 = "bike";
    const person2: Owner1 = "bike";

const getPropertyValue =<X, Y extends keyof X> (obj:X, key: Y)=>{
    return obj[key]
}

const user1 = {
    name: "Mahfuz",
    hasCar: true,
    id:21,
    favouriteNashed: "Nat-e-Rasul"
}
const car = {
    model: "Tesla",
    color: "Red",
    hasAirCondition: true
}
const result1 = getPropertyValue(user1, "hasCar")
const result2 = getPropertyValue(car, "hasAirCondition")



    //
}