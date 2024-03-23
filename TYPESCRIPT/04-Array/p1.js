/* let skills: string[];

skills[0] = "Problem Solving";
skills[1] = "Programming";

console.log(skills); */
var skills;
skills = ['Problem Sovling', 'Software Design', 'Programming'];
console.log(skills);
skills.push('100');
console.log(skills);
// Mixed Array
var scores;
scores = ['Programming', 5, 'Software Design', 4];
console.log(scores);
/* TypeScript Tuple
Introduction to TypeScript Tuple type
A tuple works like an array with some additional considerations:
    -> The number of elements in the tuple is fixed.
    -> The types of elements are known, and need not be the same. */
var skill;
skill = ['Programming', 5];
console.log('skill = ', skill);
/* error TS2322: Type 'string' is not assignable to type 'number'.

let skill1: [string, number];
skill1 = [5, "Typescript"]; */
//Optional Tuple Elements
var color = [255, 0, 0];
console.log('COLORS', color);
var bgColor, headerColor;
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];
console.log("bgColor = ", bgColor);
console.log("headerColor = ", headerColor);
