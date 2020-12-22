import users from './users.js';

// console.table(users)

//task-1

// const getUserNames = function (users) {
//     const namesArray = users.map(function (user) {
//         return user.name
//     }
//     )
//     return namesArray
// }
// console.log(getUserNames(users));


// const getUserNames = users => users.map(obj => {
//     return obj.name
// }); 
// console.log(getUserNames(users));



// const getUserNames = users => users.map(obj =>obj.name); 
// console.log(getUserNames(users));


//task-2

// const getUsersWithEyeColor = function (users,color) {
//     const eyeColorArray = users.filter(function (user) {
//         return user.eyeColor === color
//     })
//     return eyeColorArray
// }
// console.table(getUsersWithEyeColor(users, 'green'))


// const getUsersWithEyeColor = (users, color) => users
//     .filter(obj =>
//     {
//         return obj.eyeColor === color
//     })
// console.table(getUsersWithEyeColor(users, 'blue'))


// const getUsersWithEyeColor = (users, color) => users.filter(obj => obj.eyeColor === color)
// console.table(getUsersWithEyeColor(users, 'blue'))



 //task-3

const getUsersWithGender = function (users, gender) {
    const filterOfGender = users.filter(function (obj) {
        return obj.gender === gender
    })
    const namesArray = users.map(function (array) {
        return array.name
    })

    return namesArray
}

console.log(getUsersWithGender(users, 'male'));

// const getUsersWithGender = (users, gender) => users.filter(obj => obj.gender === gender).map(array => array.name);
// console.log(getUsersWithGender(users, 'male'));

// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]