const image = document.querySelector('img');
const h1 = document.querySelector('h1');



// let isTrue = false;

// const toggleImage = function () {
    
//     if (isTrue) {
//         image.setAttribute('src', 'https://images.unsplash.com/photo-1653076362668-a717e53fe8f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60');
//     } else {
//         image.setAttribute('src', 'https://images.unsplash.com/photo-1655578110838-9902484125fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8QkpKTXR0ZURKQTR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60');
//     }

//     isTrue = !isTrue;

// }


// let isTrue = false;

// setInterval(()=> {
    
//     if (isTrue) {
//         image.setAttribute('src', 'https://images.unsplash.com/photo-1653076362668-a717e53fe8f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60');
//     } else {
//         image.setAttribute('src', 'https://images.unsplash.com/photo-1655578110838-9902484125fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8QkpKTXR0ZURKQTR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60');
//     }

//     isTrue = !isTrue;

// }, 1000);


const generateRandomRGBColor = function () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}


setInterval(() => {
    h1.style.backgroundColor = generateRandomRGBColor();
}, 500);