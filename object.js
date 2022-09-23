const dotPerson = Object.create(null);
dotPerson.name = 'John Boo';
console.log(dotPerson.name);

const objPerson = {
    name: 'John Foo'
};
console.log(objPerson.name);

let person = [];
let plea = 'wouldshe';
person.name = 'Mrs. White';
person[plea] = 'I would do that';

console.log(person[plea]);
