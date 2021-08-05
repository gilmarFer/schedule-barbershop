let currentdate = new Date('2021-01-01T09:03:00');
var oneJan = new Date(currentdate.getFullYear(), 0, 1);
var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
var result = Math.ceil((currentdate.getDay() + 1 + numberOfDays) / 7);
//console.log(
//   `The week number of the current date (${currentdate}) is ${result}.`,
// );
//console.log(`aa ${currentdate}`);

let person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
  eyeColor: 'blue',
};

delete person.age; // or delete person["age"];
console.log(person);
