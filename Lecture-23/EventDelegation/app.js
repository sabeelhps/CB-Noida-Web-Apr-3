const buttons = document.querySelectorAll('button');
const container = document.querySelector('#container');

// Event Delegation
container.addEventListener('click', (e) => {
    if (e.target.nodeName === 'BUTTON') {
        console.log(e.target.innerText);
    }
});

// for (let btn of buttons) {
//     btn.addEventListener('click', () => {
//         console.log('btn clicked');
//     })
// }