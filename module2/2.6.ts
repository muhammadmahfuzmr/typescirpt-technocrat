{
    //
    // Constraints
    const addToCourse =<T extends {id:number; name: string; email:string}> (student: T) => {
        const course: string = "Next Level Web Development";
        return {
            ...student,
            course
        }
    }

const student1 = addToCourse({id:12, name: "Mahfuz", email:"mahfuz@gmail.com", expertsIn: "React"})
const student2 = addToCourse({id:12, name: "Bilal", email:"bilal@gmail.com", hasWatch: true, })
const student3 = addToCourse({id:12, name: "Jawad",email:"jawad@gmail.com"})
    //
}