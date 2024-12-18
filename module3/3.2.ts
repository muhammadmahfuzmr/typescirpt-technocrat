{
    //
    // Oop -inheritance
    class Parent {
        name: string;
        age: number;
        address: string;
        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address
        }
        getSleep(numOfSleepingHour: number) {
            console.log(`${this.name} will sleep for ${numOfSleepingHour} hour.`)
        }
    }

    class Student extends Parent {

        constructor(name: string, age: number, address: string) {
            super(name, age, address)
        }

    }
    const student = new Student("Mr. M", 22, "Agna")
    student.getSleep(25)
    //console.log(student)


    class Teacher extends Parent {

        designation: string
        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address)
            this.designation = designation
        }

        takeClass(numOfClass: number) {
            console.log(`${this.name} will take ${numOfClass} classes.`)
        }
    }

    const teacher = new Teacher("Mr. Teacher", 40, "Habiganj", "Professor")
    teacher.takeClass(2)
    teacher.getSleep(5)
    //
}