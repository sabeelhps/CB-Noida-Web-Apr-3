

const person = {
    name: 'Kartik',
    age: 22,
    isAdult: true,
    favColors: ['Blue', 'Green'],
    sayHello: function () {
        console.log(`Hello from Kartik`);
    }
}

const p1 = Object.create(person);

const p2 = Object.create(p1);