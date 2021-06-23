const people = [
     { name: 'bob', age: 20, position: 'developer' },
     { name: 'edy', age: 25, position: 'designer' },
     { name: 'mark', age: 30, position: 'the boss' },
     { name: 'luke', age: 35, position: 'intern' },
]

// Filter
const youngPeople = people.filter((person) => {
     // if (person.age < 30) {
     //      return person;
     // }
     return person.age < 30;
});
console.log(youngPeople);

const developers = people.filter((person) =>
     person.position == 'developer');

console.log(developers);

// no match
const seniorDeves = people.filter((person) => person.position == 'senior');
console.log(seniorDeves);

