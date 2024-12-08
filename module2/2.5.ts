{
    //
    // function with Generic 
    const createArray = (params: string): string[] => {
        return [params]
    }
    const result0 = createArray('Bangladesh')

    const createArrayWithGeneric = <T>(params: T): T[] => {
        return [params]
    }
    const result1 = createArrayWithGeneric<string>('Mahfuz')
    const result2 = createArrayWithGeneric<boolean>(true)
    const result3 = createArrayWithGeneric<number>(12)
    const result4 = createArrayWithGeneric<{ id: number, name: string }>({ id: 12, name: 'Mahfuzur Rahman' })
    type User = {
        userId: number;
        userName: string
    }
    const result5 = createArrayWithGeneric<User>({ userId: 25, userName: 'Bilal' })

    const createTupleWithGeneric = <T, Q>(param1: T, parma2: Q): [T , Q] => {
        return [param1, parma2]
    }

    const result6 = createTupleWithGeneric<string, string>('Ami', 'Mahfuz')
    const result7 = createTupleWithGeneric<number, string>(12, 'Mahfuz')
    const result8 = createTupleWithGeneric<string, { id: number, class: string }>('Mahfuz', { id: 12, class: 'Seven' })


const addCourseToStudent = <T>(student: T) =>{
    const course = 'Next Level Developer'
    return {
        ...student,
        course
    }
}
const result9 = addCourseToStudent({name: 'Mahfuz', class: 12})

    //
}