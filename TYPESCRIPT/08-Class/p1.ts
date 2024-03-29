//ES-5
function Person(ssn, firstName, lastName){
    // Local Props
    let x,y;

    // Constructor
    this.ssn1 = ssn;
    this.firstName1 = firstName;
    this.lastName1 = lastName;
}

Person.prototype.getFullName = function(){
    return this.firstName1 + " " + this.lastName1;
}

Person.prototype.age = 100;

let person = new Person('171-28-0926','John',"Deo");
console.log("PERSON = ", person);
console.log("PERSON.SSN1 = ", person.ssn1);
console.log("PERSON.FIRSTNAME1 = ", person.firstName1);
console.log("PERSON.FIRSTNAME1 = ", person.firstName1);
console.log("PERSON.GETFULLNAME() = ", person.getFullName());
console.log("PERSON.AGE = ", person.age);
