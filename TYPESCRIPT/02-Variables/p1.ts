let box;
console.log(typeof(box)); // undefined

box = "Hello";
console.log(typeof(box)); // string

box = 100;
console.log(typeof(box)); // number

console.log('Hello'.length); // 5

console.log('Hello'.toLocaleUpperCase()); // HELLO 

let name1 : string = 'John';
let age1 : number = 25;
let active1 : boolean = true;

console.log('NAME1 = ', name1);
console.log('AGE1 = ', age1);
console.log('ACTIVE1 = ', active1);

/*  Type annotation examples
Arrays
To annotate an array type you use use a specific type followed by a square bracket : type[] :

let arrayName: type[]; */

let names: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];
console.log('NAMES = ' ,names);