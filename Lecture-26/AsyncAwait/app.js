


// async function add(x, y) {
    
//     if ((x + y) % 2 !== 0) {
//         throw new Error("Sum is not Even");
//     }

//     return x + y;
// }


// add(5, 7)
//     .then((value) => {
//         console.log("Inside Resolve")
//         console.log(value)
//     })
//     .catch((err) => {
//         console.log(err);
//     })


console.log('START');

async function func() {
    
    try {
        console.log('Starting to fetch the data..');
        const res = await fetch('https://api.gitub.com/users/sabeelhps');
        console.log('starting to parse the data');
        const data = await res.json();
        console.log(data);
 
    }
    catch (e) {
        console.log('something went wrong');
        console.log(e.message);
    }
   
}

func();

console.log('after func function')
console.log('after func function')
console.log('after func function')
console.log('after func function')
console.log('after func function')
console.log('after func function')


console.log('END');
