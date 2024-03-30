/* TypeScript provides three access modifiers to class properties and methods: private, protected, and public.
    1)The private modifier allows access within the same class.
    2) The protected modifier allows access within the same class and subclasses.
    3) The public modifier allows access from any location. */

class Person{
    private ssn: string;
    private firstName: string;
    private lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`; 
    }
}
let person = new Person('153-07-3130', 'John', 'Doe');
console.log("PERSON = ", person);
console.log("PERSON.SSN = ", person.ssn);
console.log("PERSON.FIRSTNAME = ", person.firstName);
console.log("PERSON.LASTNAME = ", person.lastName);
console.log("PERSON.GETFULLNAME() = ", person.getFullName());


// Assignment
class Person1 {
    constructor(protected ssn: string, private firstName: string, private lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}