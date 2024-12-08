{
    //

    // conditional type

    type a1 = number;
    type b1 = undefined;
    
    type x = a1 extends null ? true :false // conditional type

    type y = a1 extends null ? true : b1 extends undefined ? undefined : any;
type sheikh = {
    car: string;
    bike: string;
    bus: string;
    plane: string;
}
type checkType<T> = T extends keyof sheikh ? 'Yes' : 'Not Available';

type hasCar = checkType<'car'> 
type hasBike = checkType<'bike'>
type hasPlane = checkType<'plane'>
type hasTractor = checkType<'tractor'>

    //
}