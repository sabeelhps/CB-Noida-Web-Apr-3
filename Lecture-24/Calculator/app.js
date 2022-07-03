const keypad = document.getElementById('keypad');
const screen = document.getElementById('screen');

keypad.addEventListener('click', (event) => {
    if (event.target.nodeName === 'BUTTON') {
       
        const buttonText = event.target.innerText;

        if (buttonText === 'C') {
            screen.value = "";
        }
        else if (buttonText === 'x') {
            screen.value += "*";
        }
        else if (buttonText === '=') {
            try {
                screen.value=eval(screen.value);
            }
            catch (e) {
                screen.value = "Invalid Operation";
            }
        }
        else {
            screen.value += buttonText;
        }  
    }
});