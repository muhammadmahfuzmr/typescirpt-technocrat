{
// spread operator
const friendList1 = ['mahfuz', 'bilal', 'jawad'];
const friendList2 = ['nazmul', 'kawser'];

friendList1.push(...friendList2);
console.log(friendList1);

const mentors1 = {
    lavel1 : 'jhankar vai',
    conceptual: 'rahat vai'
}
const mentors2 = {
    typscirpt: 'mezba vai',
    redux: 'mir vai'
}
const mentorsList = {
    ...mentors1,
    ...mentors2
}
console.log(mentorsList)

// rest operator
const getFriends = (...friends:string[])=>{
    friends.map(friends => console.log(friends))
}
getFriends('mahfuz', 'jawad', 'bilal')
}