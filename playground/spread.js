// function add(a,b) {
//   return a+b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9, 5];
//
// console.log(add(...toAdd));
//
// var groupA = [
//   'Jen',
//   'Cory'
// ];
//
// var groupB = [
//   'Vikram'
// ];
//
// var final =[3, ...groupA, ...groupB];
// console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];
// Hi Andrew, you are 25;

function greeter(name, age) {
  console.log('hi ' + name + ", you are "+ age);
}

greeter(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Andrew', ...names];

final.forEach( element => {
  console.log('hi ' + element);
});
