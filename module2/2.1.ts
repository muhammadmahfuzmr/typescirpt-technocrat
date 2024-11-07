{
    //
    // type assertion

    let anything: any
    anything = 'next level web development';
    //(anything as string).

    const kgToGm = (value: string | number): number | undefined | string => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return `The Converted Value is ${convertedValue}`
        }
        else if (typeof value === 'number') {
            const convertedValue = value * 1000;
            return convertedValue
        }
    }

    const result1 = kgToGm(1000) as number
    const result2 = kgToGm('500') as string
    console.log({ result1 }, { result2 })


    type CustomError = {
        massage: string
    }
    try {

     }catch(error){
        console.log(( error as CustomError).massage)
     }

    //

}