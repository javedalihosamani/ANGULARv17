/* Optional properties
    -> An interface may have optional properties. To declare an optional property, you use the question mark (?) at the end of the property name in the declaration, like this */

// Assignment
interface Person {
    firstName: string;
    middleName?: string;
    lastName: string;
}
function getFullName(person: Person) {
    if (person.middleName) {
        return `${person.firstName} ${person.middleName} ${person.lastName}`;
    }
    return `${person.firstName} ${person.lastName}`;
}
