
const people = [
    {name: 'August', age: 25, budget: 4000},
    {name: 'Rick', age: 14, budget: 4200},
    {name: 'Elena', age: 27, budget: 1000},
    {name: 'Andrey', age: 15, budget: 8000},
];

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

people.forEach(person => console.log(person));


const adults = people.filter(person => person.age >= 18);
console.log(adults);

// for (let i = 0; i < people.length; i++) {
//     amount += people[i].budget;
// }

const amount = people.reduce((total, person) => total + person.budget, 0);

//find
const Rick = people.find(person => person.name === 'Rick');

console.log(Rick);




people
    .filter(person => person.budget > 10000)
    .map(person => {
        return{
            info: `${person.name} ${person.age}`,
            budget: person.budget
        };

    });