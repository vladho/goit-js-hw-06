import users from './users.js';


//!task-1
console.log("task - 1")
// option - 1

// const getUserNames = function (users) {
//     const namesArray = users.map(function (user) {
//         return user.name
//     }
//     )
//     return namesArray
// }
// console.log(getUserNames(users));


// option - 2

// const getUserNames = users => users.map(obj =>  obj.name); 
// console.log(getUserNames(users));


// option - 3

const getUserNames = users => users.map(obj =>obj.name); 
console.log(getUserNames(users));


//!task-2
console.log("task - 2")

// option - 1

// const getUsersWithEyeColor = function (users,color) {
//     const eyeColorArray = users.filter(function (user) {
//         return user.eyeColor === color
//     })
//     return eyeColorArray
// }
// console.table(getUsersWithEyeColor(users, 'green'))



// option - 2

// const getUsersWithEyeColor = (users, color) => users
//     .filter(obj =>
//     {
//         return obj.eyeColor === color
//     })
// console.table(getUsersWithEyeColor(users, 'blue'))



// option - 3

const getUsersWithEyeColor = (users, color) => users.filter(obj => obj.eyeColor === color)
console.table(getUsersWithEyeColor(users, 'blue'))



 //!task-3
console.log("task - 3")
//  option - 1

// const getUsersWithGender = function (users, gender) {
//     const filterOfGender = users.filter(function (obj) {
//         return obj.gender === gender
//     })

//     const array = [...filterOfGender]
//     const namesArray = array.map(function (array) {
//         return array.name
//     })

//     return namesArray
// }
// console.log(getUsersWithGender(users, 'male'));



//  option - 2

const getUsersWithGender = (users, gender) => users.filter(obj => obj.gender === gender).map(array => array.name);
console.log(getUsersWithGender(users, 'male'));

// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//!task-4
console.log("task - 4")
// option - 1

const getInactiveUsers = users => users.filter(obj => !obj.isActive);
console.table(getInactiveUsers(users));
//  [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// option - 2

// const getInactiveUsers = function (users) {
//     const filtOfActive = users.filter(function (active) {
//         return active.isActive === false
//     })
//     return filtOfActive
// }

// console.log(getInactiveUsers(users));


//! task- 5
console.log("task - 5")
// Получить пользоваля (не массив) по email (поле email, он уникальный).

// option - 1


const getUserWithEmail = (users, email) => users
    .filter(obj => obj.email === email)
    .map(nameOfmail => nameOfmail.name)

console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
//  // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));
//  // {объект пользователя Elma Head}

// option - 2

// const getUserWithEmail = function (users, email) {
//     const getObjWithEmail = users.filter(function (obj) {
//         return obj.email === email
//     })

//     const nameArray = [...getObjWithEmail]
//     const getName = nameArray.map(function(nameOfmail){
//         return nameOfmail.name
//     })
//     return getName
// }

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));


//! task - 6
console.log("task - 6")
// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

const getUsersWithAge = (users, min, max) => users
    .filter(obj => obj.age > min && obj.age < max)
    .map(arr => arr.name)

console.log(getUsersWithAge(users, 20, 30));
//  // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//! task - 7
console.log("task - 7")
const calculateTotalBalance = users => users
    .reduce((totalBalance, amount) => totalBalance + amount.balance, 0)

console.log(calculateTotalBalance(users));
 // 20916

//! task - 8
console.log("task - 8")
// Массив имен всех пользователей у которых есть друг с указанным именем.

// option - 1

// const getUsersWithFriend = function (users, nameOfFriends) {
//     const getNameOfFriends = users.reduce(function (acc, array) {

//         if (array.friends.includes(nameOfFriends)) {
//             acc.push(array.name)

//         }
//         return acc;
//     }, []
//     )
//     return getNameOfFriends
// }
// console.log(getUsersWithFriend(users, 'Briana Decker'));
//  // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry'));
//  // [ 'Elma Head', 'Sheree Anthony' ]

// option - 2 

const getUsersWithFriend = (users, nameOfFriends) => 
  users.reduce((acc, array) => {
    array.friends.includes(nameOfFriends)
      ? acc.push(array.name) : null; return acc;
  }, [])
  console.log(getUsersWithFriend(users, 'Briana Decker'));
 
//! task - 9
console.log("task - 9")
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

//   // option - 1

// const getNamesSortedByFriendsCount = function (users) {  
// users.sort(function (a, b) { return a.friends.length - b.friends.length; })
//       const nameArray = users.map(function (array)
//     {
//         return array.name
//     })

//     return nameArray
// }
// console.log(getNamesSortedByFriendsCount(users));
  
  //option - 2 

// const getNamesSortedByFriendsCount = function (users) {  
//     users.sort(function (a, b) {
//         if (a.friends.length > b.friends.length) {
//             return 1
//         }
//         else
//             if (a.friends.length < b.friends.length) {
//                 return -1
//             }
//          else
             
//         return 0
//     }
//     )
//     const nameArray = users.map(function (array)
//     {
//         return array.name
//     })

//     return nameArray
// }
// console.log(getNamesSortedByFriendsCount(users));


// option - 3

const getNamesSortedByFriendsCount = users => 
users.sort((a, b) => a.friends.length - b.friends.length)
      .map((array)=> array.name)

console.log(getNamesSortedByFriendsCount(users));

// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson',
// 'Sheree Anthony', 'Ross Vazquez' ]



//task - 10
console.log("task - 10")

// Получить массив всех умений всех пользователей(поле skills),
//   при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

// option - 1

// const getSortedUniqueSkills = function (users) {
//   const getAllSkills = users.reduce(function (TotalSkills, users) {
//     TotalSkills.push(...users.skills)
//     return TotalSkills;
//   }, []
//   )
//  const filterArr = [];

//   getAllSkills.filter(function (skills) {
//     if (!filterArr.includes(skills)) {
//       filterArr.push(skills)
//     }
//     return filterArr;
//   }
//   )

//   return filterArr.sort()

// }
// console.log(getSortedUniqueSkills(users));

// option - 2

const getSortedUniqueSkills = users =>
  users.reduce((TotalSkills, users) => { TotalSkills.push(...users.skills); return TotalSkills; }, [])
    // users.reduce((TotalSkills, users) => TotalSkills = [...TotalSkills, ...users.skills], [])
    .filter(skills => !users.includes(skills) ? users.push(skills): null)
    .sort();
console.log(getSortedUniqueSkills(users));

// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 
// 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
