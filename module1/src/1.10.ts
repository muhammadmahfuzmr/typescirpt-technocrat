{
    // Union Type
    type FrontendDeveloper = 'Fakibaz Developer' | 'Junior Developer';
    type BackendDeveloper = 'Frontend Developer' | 'Expert Developer';
    type FullstackDeveloper = FrontendDeveloper | BackendDeveloper;
    const newDeveloper: FullstackDeveloper = 'Expert Developer'

    type User = {
        name: string;
        age: number;
        gender: 'Male' | 'Female';
        contactNo?: string;
        email?: string;
        bloodGroup: 'A+' | 'O+' | 'AB+' | 'B+'
    }

    const user1: User = {
        name: 'Mahfuz',
        age: 22,
        gender: 'Male',
        bloodGroup: 'B+',
        contactNo: '0152453222'

    }

    const user20: User = {
        name: "Mahfuz",
        age:22,
        gender: "Male",
        bloodGroup: "O+",
      };
    // intersection
    type FontEndDeveloper = {
        skills: string[];
        expertsIn1: 'React';

    }
    type BackEndDeveloper = {
        skills: string[];
        expertsIn2: 'Typescript'
    }
    type FullStackDeveloper = FontEndDeveloper & BackEndDeveloper;
    const fullStackDeveloper : FullStackDeveloper = {
        skills: ['html', 'js', 'node'],
        expertsIn1: 'React' ,
        expertsIn2: 'Typescript'
    }

}