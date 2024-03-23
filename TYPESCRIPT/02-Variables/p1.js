var box;
console.log(typeof (box)); // undefined
box = "Hello";
console.log(typeof (box)); // string
box = 100;
console.log(typeof (box)); // number
console.log('Hello'.length); // 5
console.log('Hello'.toLocaleUpperCase()); // HELLO 
var name1 = 'John';
var age1 = 25;
var active1 = true;
console.log('NAME1 = ', name1);
console.log('AGE1 = ', age1);
console.log('ACTIVE1 = ', active1);
/*  Type annotation examples
Arrays
To annotate an array type you use use a specific type followed by a square bracket : type[] :

let arrayName: type[]; */
var names = ['John', 'Jane', 'Peter', 'David', 'Mary'];
console.log('NAMES = ', names);
