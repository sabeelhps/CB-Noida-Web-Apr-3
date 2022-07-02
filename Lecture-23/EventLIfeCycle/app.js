const child = document.querySelector('#child');
const parent = document.querySelector('#parent');
const grandparent = document.querySelector('#grandparent');


grandparent.addEventListener('click', function () {
    console.log('grandparent');
}, false);


parent.addEventListener('click', function (event) {
    event.stopPropagation();
    console.log('parent');
}, false);

child.addEventListener('click', (event) =>{
    // event.stopPropagation(); // this stops event from propagating upwards
    console.log('child');
},false);


