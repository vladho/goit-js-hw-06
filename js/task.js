import users from './users.js';

// console.table(users)

//task-1

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


//task-2


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



 //task-3

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

//task-4

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


// task- 5

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


// task - 6

// const getUsersWithAge = (users, min, max) => users
//     .filter(obj => obj.age > min && obj.age < max)
//     .map(arr => arr.name)

// console.log(getUsersWithAge(users, 20, 30));
//  // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// task - 7

// const calculateTotalBalance = users => users
//     .reduce((totalBalance, amount) => totalBalance + amount.balance, 0)

// console.log(calculateTotalBalance(users)); // 20916

// task - 8

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

// task - 9

// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

const getNamesSortedByFriendsCount = function (users) {
    const a = users.reduce(function (acc, array) {

        console.log(array.friends)
       
        return array.friends
    }, [])

    return a
}

console.log("comsole ", getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson',
// 'Sheree Anthony', 'Ross Vazquez' ]