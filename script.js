1.// const users = [
//     { name: 'Moore Hensley'  },
//     { name: 'Sharlene Bush' },
//     { name: 'Ross Vazquez'  },
//     { name: 'Elma Head'  },
//     { name: 'Carey Barr' },
//     { name: 'Blackburn Dotson' },
//     { name: 'Sheree Anthony' }
//   ];
//   const getUserNames = users => {
//     return users.map(user => user.name);
//   };
//   console.log(getUserNames(users));



2.// const users = [
//   { name: 'Moore Hensley', eyeColor: 'blue' },
//   { name: 'Sharlene Bush', eyeColor: 'blue' },
//   { name: 'Ross Vazquez', eyeColor: 'green' },
//   { name: 'Elma Head', eyeColor: 'brown' },
//   { name: 'Carey Barr', eyeColor: 'blue' },
//   { name: 'Blackburn Dotson', eyeColor: 'brown' },
//   { name: 'Sheree Anthony', eyeColor: 'green' }
// ];
// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(user => user.eyeColor === color);
// };

// console.log(getUsersWithEyeColor(users, 'blue'));



3.// const users = [
//   { name: 'Moore Hensley', gender: 'male' },
//   { name: 'Sharlene Bush', gender: 'female' },
//   { name: 'Ross Vazquez', gender: 'male' },
//   { name: 'Elma Head', gender: 'female' },
//   { name: 'Carey Barr', gender: 'male' },
//   { name: 'Blackburn Dotson', gender: 'male' },
//   { name: 'Sheree Anthony', gender: 'female' }
// ];
// const getUsersWithGender = (users, gender) => {
//   return users
//     .filter(user => user.gender === gender)
//     .map(user => user.name);
// };

// console.log(getUsersWithGender(users, 'male'));


4.// const users = [
//   { name: 'Moore Hensley', isActive: false },
//   { name: 'Sharlene Bush', isActive: true },
//   { name: 'Ross Vazquez', isActive: false },
//   { name: 'Elma Head', isActive: true },
//   { name: 'Carey Barr', isActive: true },
//   { name: 'Blackburn Dotson', isActive: false },
//   { name: 'Sheree Anthony', isActive: true }
// ];

// const getInactiveUsers = users => {
//   return users.filter(user => !user.isActive);
// };

// console.log(getInactiveUsers(users));



5.// const getUserWithEmail = (users, email) => {
//   return users.find(user => user.email === email);
// };

// const users = [
//   { id: 1, name: 'Sheree Anthony', email: 'shereeanthony@kog.com' },
//   { id: 2, name: 'Elma Head', email: 'elmahead@omatom.com' },
// ];
// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); 
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); 


6.// const getUsersWithAge = (users, min, max) => {
//   return users.filter(user => user.age >= min && user.age <= max);
// };
// const users = [
//   { id: 1, name: 'Ross Vazquez', age: 24 },
//   { id: 2, name: 'Elma Head', age: 28 },
//   { id: 3, name: 'Carey Barr', age: 27 },
//   { id: 4, name: 'Moore Hensley', age: 32 },
//   { id: 5, name: 'Sharlene Bush', age: 34 },
//   { id: 6, name: 'Blackburn Dotson', age: 36 },
//   { id: 7, name: 'Sheree Anthony', age: 39 },
// ];
// console.log(getUsersWithAge(users, 20, 30)); 
// console.log(getUsersWithAge(users, 30, 40)); 


7.// const calculateTotalBalance = users => {
//   return users.reduce((total, user) => total + user.balance, 0);
// };
// const users = [
//   { id: 1, name: 'Ross Vazquez', balance: 2500 },
//   { id: 2, name: 'Elma Head', balance: 3000 },
//   { id: 3, name: 'Carey Barr', balance: 1500 },
//   { id: 4, name: 'Moore Hensley', balance: 5000 },
//   { id: 5, name: 'Sharlene Bush', balance: 4000 },
//   { id: 6, name: 'Blackburn Dotson', balance: 1200 },
//   { id: 7, name: 'Sheree Anthony', balance: 2716 },
// ];

// console.log(calculateTotalBalance(users));



8.// const getUsersWithFriend = (users, friendName) => {
//   return users
//     .filter(user => user.friends.includes(friendName))
//     .map(user => user.name);
// };
// const users = [
//   { id: 1, name: 'Sharlene Bush', friends: ['Briana Decker', 'Goldie Gentry'] },
//   { id: 2, name: 'Elma Head', friends: ['Goldie Gentry', 'Carey Barr'] },
//   { id: 3, name: 'Carey Barr', friends: ['Ross Vazquez', 'Blackburn Dotson'] },
//   { id: 4, name: 'Moore Hensley', friends: ['Sharlene Bush', 'Elma Head'] },
//   { id: 5, name: 'Blackburn Dotson', friends: ['Briana Decker', 'Moore Hensley'] },
//   { id: 6, name: 'Sheree Anthony', friends: ['Goldie Gentry', 'Briana Decker'] },
// ];
// console.log(getUsersWithFriend(users, 'Briana Decker')); 
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); 




9.// const getNamesSortedByFriendsCount = users => {
//   return users
//     .slice() 
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map(user => user.name);
// };
// const users = [
//   { id: 1, name: 'Sharlene Bush', friends: ['Briana Decker', 'Goldie Gentry', 'Ross Vazquez'] },
//   { id: 2, name: 'Elma Head', friends: ['Goldie Gentry', 'Carey Barr'] },
//   { id: 3, name: 'Carey Barr', friends: ['Ross Vazquez', 'Blackburn Dotson'] },
//   { id: 4, name: 'Moore Hensley', friends: ['Sharlene Bush'] },
//   { id: 5, name: 'Blackburn Dotson', friends: ['Briana Decker', 'Moore Hensley'] },
//   { id: 6, name: 'Sheree Anthony', friends: ['Goldie Gentry', 'Briana Decker', 'Carey Barr'] },
//   { id: 7, name: 'Ross Vazquez', friends: [] },
// ];
// console.log(getNamesSortedByFriendsCount(users));


10.// const getSortedUniqueSkills = users => {
//   const allSkills = users.flatMap(user => user.skills);
//   const uniqueSkills = Array.from(new Set(allSkills));
//   uniqueSkills.sort();
//   return uniqueSkills;
// };
// const users = [
//   { id: 1, name: 'Sharlene Bush', skills: ['lorem', 'ipsum', 'dolor'] },
//   { id: 2, name: 'Elma Head', skills: ['ipsum', 'lorem', 'amet'] },
//   { id: 3, name: 'Carey Barr', skills: ['adipisicing', 'elit', 'ex'] },
//   { id: 4, name: 'Moore Hensley', skills: ['nostrud', 'tempor', 'velit'] },
//   { id: 5, name: 'Blackburn Dotson', skills: ['proident', 'culpa', 'commodo'] },
//   { id: 6, name: 'Sheree Anthony', skills: ['veniam', 'mollit', 'non'] },
//   { id: 7, name: 'Ross Vazquez', skills: ['irure', 'anim', 'nulla'] },
// ];
// console.log(getSortedUniqueSkills(users));