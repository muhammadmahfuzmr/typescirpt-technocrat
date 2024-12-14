{
    //

    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param]
    }

    const result1 = createArrayWithGeneric<string>("Bangladesh")

    const result2 = createArrayWithGeneric<number>(20)
    const isPassed = createArrayWithGeneric<boolean>(true)


    type User = { name: string; id: number }
    const user = createArrayWithGeneric<User>({ id: 12, name: "Mahfuz" })



    const createGenericWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2]
    }
    interface UserInfo {
        id: number;
        roll: number;
        course: string
    }
    const result5 = createGenericWithTuple<string, number>("Mahfuz", 200)
    const result6 = createGenericWithTuple<string, string>("Mr. X", "Mr.Y")
    const result7 = createGenericWithTuple<number, number>(12, 30)
    const result8 = createGenericWithTuple<string, UserInfo>("Mahfuz", { id: 12, roll: 1, course: "Next Level Web Dev" })

    const addToCourse =<T>(student:T)=>{
        const course = "Next Level Web Dev"
        return {
            ...student,
            course
        }
    }
type studentInfo = {
    id: number;
    name: string
}

const result9 = addToCourse<studentInfo>({id:12, name:"Bilal"})

const result10 = addToCourse({id:12, name: "Mahfuz", expertsIn: "React", studentType: "Regular"})


    //
}