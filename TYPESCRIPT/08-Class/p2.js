// ES6 allowed you to define a class that is simply syntactic sugar for creating constructor functions and prototypal
// Example-1
var Tea = /** @class */ (function () {
    function Tea() {
        console.log("This is Tea Class..!");
    }
    return Tea;
}());
var tea = new Tea();
// Example-2
var Person = /** @class */ (function () {
    function Person(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
var person = new Person('171-28-0926', 'John', "Deo");
console.log("PERSON = ", person);
console.log("PERSON.SSN1 = ", person.ssn);
console.log("PERSON.FIRSTNAME1 = ", person.firstName);
console.log("PERSON.FIRSTNAME1 = ", person.firstName);
console.log("PERSON.GETFULLNAME() = ", person.getFullName());
