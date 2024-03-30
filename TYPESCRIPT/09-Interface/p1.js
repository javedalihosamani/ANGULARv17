var person = {
    firstName: 'John',
    lastName: 'Doe'
};
function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
console.log(getFullName(person));
