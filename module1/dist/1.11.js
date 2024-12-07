"use strict";
var _a, _b;
{
    // ternary operator, nullish coalescing operator,optional chaining
    const age = 15;
    if (age > 18) {
        // console.log('Adult')
    }
    else {
        //console.log('Teenager')
    }
    const isAdult = age > 18 ? 'Adult' : 'Teenager';
    console.log({ isAdult });
    // nullish coalescing operator
    // nullish coalescing operator have to use ,if value is null or undefined and need to make decision.Othewise they retrun variable value.
    const isAuthentication = 5;
    const result1 = isAuthentication !== null && isAuthentication !== void 0 ? isAuthentication : 'Guest';
    console.log(result1);
    const user = {
        name: 'Mahfuz',
        address: {
            city: 'syl',
            postalCode: 3374,
            ps: 'Nabiganj',
            dist: 'Habiganj'
        }
    };
    const roadNo = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.road) !== null && _b !== void 0 ? _b : 'Road Number is not available';
    console.log(roadNo);
}
