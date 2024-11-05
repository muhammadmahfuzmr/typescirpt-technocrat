{

// destructuring

const bioData = {
    contactNo: 1256355,
    address: 'agna, kaziganj bazar, nabiganj, habiganj',
    name:{
        firstName: 'Mahfuz',
        middleName: 'Ahmed',
        lastName: 'Bilal'
    }
}
const {contactNo, name: {lastName}} = bioData
console.log(contactNo, lastName)

  // array destructuring

  const myFriends = ['Mahfuz', 'Muhammad', 'Bilal', 'Jawad', 'Omar', 'Usama']
  const [,,bestFriends]= myFriends
  console.log(bestFriends)
  const [,,,...favouriteName]= myFriends
  console.log(favouriteName)
    
}