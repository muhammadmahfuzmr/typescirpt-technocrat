{
    //
    // type assertion
    let anything: any;
    anything = "Next level web development";
    anything = 25;
    (anything as number)

    const kgToGm = (value: number | string): number | string | undefined => {
        if (typeof value === "number") {
            return value * 1000
        } else if (typeof value === "string") {
            const convertedValueToNumber = parseFloat(value)
            const convertedValueToGm = convertedValueToNumber * 1000;
            return `The converted Value is: ${convertedValueToGm}`
        }
    }
const result1 = kgToGm(2500) as number;
const result2  = kgToGm("2000") as string;
type customError = {
    message : string
}
try{}
catch(error){
    console.log((error as customError).message)
}
    //
}