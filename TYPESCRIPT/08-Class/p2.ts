// ES6 allowed you to define a class that is simply syntactic sugar for creating constructor functions and prototypal

// Example-1
class Tea{
    constructor(){
        console.log("This is Tea Class..!");
    }
}

let tea = new Tea();

// Example-2
class Person{
    ssn;
    firstName;
    lastName;
    constructor(ssn, firstName, lastName){
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    } 
    
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

let person = new Person('171-28-0926','John',"Deo");
console.log("PERSON = ", person);
console.log("PERSON.SSN1 = ", person.ssn);
console.log("PERSON.FIRSTNAME1 = ", person.firstName);
console.log("PERSON.FIRSTNAME1 = ", person.firstName);
console.log("PERSON.GETFULLNAME() = ", person.getFullName());