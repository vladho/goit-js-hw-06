import users from './users.js';

// console.table(users)

//!task-1

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

// const getUserNames = users => users.map(obj => {
//     return obj.name
// }); 
// console.log(getUserNames(users));


// option - 3

// const getUserNames = users => users.map(obj =>obj.name); 
// console.log(getUserNames(users));


//!task-2


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

// const getUsersWithEyeColor = (users, color) => users.filter(obj => obj.eyeColor === color)
// console.table(getUsersWithEyeColor(users, 'blue'))



 //!task-3

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

// const getUsersWithGender = (users, gender) => users.filter(obj => obj.gender === gender).map(array => array.name);
// console.log(getUsersWithGender(users, 'male'));

// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//!task-4

// option - 1

// const getInactiveUsers = users => users.filter(obj => !obj.isActive);
// console.log(getInactiveUsers(users));
 // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// option - 2

// const getInactiveUsers = function (users) {
//     const filtOfActive = users.filter(function (active) {
//         return active.isActive === false
//     })
//     return filtOfActive
// }

// console.log(getInactiveUsers(users));


//! task- 5

// option - 1


// const getUserWithEmail = (users, email) => users
//     .filter(obj => obj.email === email)
//     .map(nameOfmail => nameOfmail.name)

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
//  // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com'));
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

// const getUsersWithAge = (users, min, max) => users
//     .filter(obj => obj.age > min && obj.age < max)
//     .map(arr => arr.name)

// console.log(getUsersWithAge(users, 20, 30));
//  // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//! task - 7

// const calculateTotalBalance = users => users
//     .reduce((totalBalance, amount) => totalBalance + amount.balance, 0)

// console.log(calculateTotalBalance(users)); // 20916

//! task - 8

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

//! task - 9

// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

// const getNamesSortedByFriendsCount = function (users) {   
//     users.sort(function (a, b) { return a.friends.length - b.friends.length;})
//     // users.sort(function (a, b) {
//     //     if (a.friends.length > b.friends.length) {
//     //         return 1
//     //     }
//     //     else
//     //         if (a.friends.length < b.friends.length) {
//     //             return -1
//     //         }
//     //      else
             
//     //     return 0
//     // }
//     // )
//     const nameArray = users.map(function (array)
//     {
//         return array.name
//     })

//     return nameArray
// }
// console.table(users)
// console.log("console ", getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson',
// 'Sheree Anthony', 'Ross Vazquez' ]

//! const array = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

// const mapped = array.map(function (el, i) {
// return { index: i, value: el };
// });


// // сортируем массив, содержащий уменьшенные значения
// mapped.reduce(function (a, b) {
//     // console.log("a", a.value)
//     // console.log("b", b.value)
//     if (b % 2) {
       
//     }
//     // else { return 2 }
// });


// // контейнер для результа
//     const result = mapped.map(function (el) {   
//         console.log("index",el.index)
//         console.log(el.value)
//   return array[el.index];
// });



//     console.log(result);