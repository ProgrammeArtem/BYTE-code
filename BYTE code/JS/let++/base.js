let person = {
    name: 'Artem',
    surname: 'Dyritskiy',
    age: 14,
    addres: {
        street: 'Sofi',
        city: 'Kiyv',
        country: 'Ukraine',
    },

    cars: ['BMW', 'Tesla', 'bike'],

    job: function () {
        console.log('Work...Work...Work...Work...');
    }
}

console.log(person.job());

console.log(person.name);

console.log(person.addres.street);

console.log(person.age);
person.age = 11;

console.log("My name is " + person.name + " " + person.surname + " and i's " + person.age + "year's old " + "<br>" + "I'm from " + person.addres.country);
console.log("I have " + person.cars[0] + ',' + person.cars[1] + 'and ' + person.cars[1]);