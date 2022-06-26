const h1 = document.querySelector('h1');
const buttons = document.querySelectorAll('button');
const para = document.querySelector('p');



function colorize() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.style.backgroundColor=`rgb(${r}, ${g}, ${b})`;
}

h1.addEventListener('click',colorize);

for (let btn of buttons) {
    btn.addEventListener('click',colorize);
}
para.addEventListener('click', colorize);