const btn = document.querySelector('button');
const h1 = document.querySelector('h1');
const inp = document.querySelector('input');
const form = document.querySelector('form');
const para = document.querySelector('p');
// console.dir(btn);


// function fun() {
//     console.log('Button Clicked');
// }

// function scream() {
//     console.log('Screaming.......');
// }

// function shout() {
//     console.log('Shout....');
// }

// btn.onclick = fun;

// btn.ondblclick = function () {
//     console.log('double clicked');
// }

// btn.onclick = scream;
// btn.onclick = shout;


// btn.addEventListener('click', scream);
// btn.addEventListener('click', shout);


// -----------------------------mouse events-----


h1.addEventListener('mouseenter', () => {
    h1.classList.add('heading');
});


h1.addEventListener('mouseleave', () => {
    h1.classList.remove('heading');
});

// ---------------------------keyboard events

inp.addEventListener('keydown', function (e) {
    // console.log('keypressed');
    // console.log(inp.value);
    if (e.keyCode === 13) {
        console.log('You pressed enter key');
    }
    console.log(e);

});

// ---------------------------form events---------

form.addEventListener('submit', function (e) {
    e.preventDefault(); //prevent the form from getting submitted by default
    console.log('form  submitted');
});

// -------------------------copy------------


para.addEventListener('copy', function () {
    alert('DONT COPY!!😠😠😠😠😠😠');
})




