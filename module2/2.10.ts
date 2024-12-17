{
    //
    // mapped types
    const marks: number[] = [98, 39, 89, 36];
    const marksString: string[] = marks.map(mark => mark.toString())
    console.log(marksString)

    //
    type AreaNumber = {
        height: string;
        width: string;
    }

    type Height = AreaNumber["height"] // look up types

    type AreaString<T> = {
        [key in keyof T]: T[key]
    }


const area1: AreaString<{ height: string; width: number }> = { height: "55", width: 500 }
console.log(area1)
    ///
}