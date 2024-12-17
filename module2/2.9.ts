{
    //
    // conditional type

    type A1 = number;
    type B1 = string;
    type X = A1 extends null ? true : false;
    type Y = A1 extends null ? true : B1 extends undefined ? undefined : any;


    type sheikh = {
        car: string;
        bike: string;
        ship: string;
        plane: string;
    }

type CheckVehicle<T> = T extends keyof sheikh ? true : false;
type hasPlane= CheckVehicle<"plane">
type hasTrack = CheckVehicle<"track">
type hasHelicopter = CheckVehicle<"helicopter">



    //
}