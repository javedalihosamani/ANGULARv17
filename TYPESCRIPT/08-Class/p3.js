/* TypeScript provides three access modifiers to class properties and methods: private, protected, and public.
    1)The private modifier allows access within the same class.
    2) The protected modifier allows access within the same class and subclasses.
    3) The public modifier allows access from any location. */
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
var person = new Person('153-07-3130', 'John', 'Doe');
console.log("PERSON = ", person);
console.log("PERSON.SSN = ", person.ssn);
console.log("PERSON.FIRSTNAME = ", person.firstName);
console.log("PERSON.LASTNAME = ", person.lastName);
console.log("PERSON.GETFULLNAME() = ", person.getFullName());
// Assignment
var Person1 = /** @class */ (function () {
    function Person1(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person1.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person1;
}());
