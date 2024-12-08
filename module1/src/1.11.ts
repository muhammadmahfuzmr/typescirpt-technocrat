{
    // ternary operator, nullish coalescing operator,optional chaining
    const age = 15;
    if (age > 18) {
        // console.log('Adult')
    } else {
        //console.log('Teenager')
    }


    const isAdult = age > 18 ? 'Adult' : 'Teenager'
    console.log({ isAdult })
    // nullish coalescing operator
    // nullish coalescing operator have to use ,if value is null or undefined and need to make decision.Othewise they retrun variable value.
    const isAuthentication = null;
    const result1 = isAuthentication ?? 'Guest'
    console.log({result1})

    // Optional chaining ,optional type
    type User = {
        name: string;
        address: {
            city: string;
            road?: string;
            postalCode: number;
            ps: string;
            dist: string
        }
    }
    const user: User = {
        name: 'Mahfuz',
        address: {
            city: 'syl',
            postalCode: 3374,
            ps: 'Nabiganj',
            dist: 'Habiganj'
        }
    }
    const roadNo = user?.address?.road 
    console.log(roadNo)
}