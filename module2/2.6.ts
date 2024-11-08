{
    //
    // constraints

    const addCourseToStudent = <T extends {name: string; id:number;email:string}>(student: T) => {
        const course = 'Next Level Developer'
        return {
            ...student,
            course
        }
    }
    const student1 = addCourseToStudent({id:125, name: 'Mahfuz', class: 12, email: 'lsl@gmail.com', })
    const student2 = addCourseToStudent({id:256, name: 'Bilal', email: 'bilal@gmail.com', class:11})
    const student3 = addCourseToStudent({class: 25,id:125, email: 'mahfuz@gmail.com', name:'Mahfuz'})

    //
}