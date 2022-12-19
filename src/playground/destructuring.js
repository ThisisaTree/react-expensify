// Object destructuring

/*
const person = {
    age: 26,
    location: {
        city: 'B',
        temp: 92
    }
};

const {name: firstName = 'Anonymus', age} = person;

console.log(`${firstName} is ${age}.`);

const {temp, city} = person.location;

console.log(`It's ${temp} in ${city}.`);

const book = {
    title: 'Ego is the Enemty',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const {name: publisherName = 'Self-published'} = book.publisher;

console.log(publisherName);
*/

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19'];

const [, city, state = 'New York', ] = address;

console.log(`You are in ${city} ${state}.`)