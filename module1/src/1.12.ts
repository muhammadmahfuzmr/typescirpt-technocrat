{
    //
    // nullable type:
    const searchName = (value: string | null) => {
        if (value) {
            //console.log('Searching')
        }
        else {
            //console.log("there is nothing to serch")
        }
    }
    searchName(null)

    // unknown typeof

    const getSpeedInMetersPerSecond = (value: unknown): unknown => {
        if (typeof value === 'number') {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The Speed is ${convertedSpeed} ms^-1`)
        }
        else if (typeof value === 'string') {
            const [valueInNumber, units] = value.split(' ')
            const convertedSpeed = (parseFloat(valueInNumber) * 1000) / 3600;
            console.log(`The Speed is ${convertedSpeed} ms^-1`)
        } else {
            console.log('Wrong Input')
        }
    }
    getSpeedInMetersPerSecond(true)

    // Never type:

const throwNow = (msg:string):never=>{
    throw new Error(msg)
}

throwNow('nothing')
    //
}