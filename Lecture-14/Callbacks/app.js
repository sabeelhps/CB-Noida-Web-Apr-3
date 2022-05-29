

function innerFun() {
    console.log("Inside Inner Fun");
}




function fun(f) {
    f();
}


// fun(innerFun);

// fun(function innerFun() {
//         console.log("Inside Inner Fun");
// })

// fun(function () {
//     console.log("Inside Inner Fun");
// });

fun(()=> {
    console.log("Inside Inner Fun");
});
    
