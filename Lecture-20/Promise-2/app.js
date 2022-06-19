const names = ['Vivek', 'Garvit', 'Ajay'];

function display() {
    setTimeout(() => {
        let str = "";
        for (let name of names) {
            str+=`<li>${name}</li>`
        }
        // console.log(str);
        document.write(str);
    }, 1000);
}

function addPerson(newName) {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            names.push(newName);
            let isTrue = true;
            if (isTrue) {
                resolve();
            } else {
                reject();
            }
        }, 2000);
    });
}

addPerson('Kartik')
    .then(display)
    .catch(() => {
        console.log('Error.....');
    });