const joke = require('give-me-a-joke');
const colors = require('colors');
const figlet = require('figlet');


// joke.getRandomCNJoke (function(joke) {
//     console.log(joke.rainbow);
// });

figlet('Hello World!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data.rainbow)
});