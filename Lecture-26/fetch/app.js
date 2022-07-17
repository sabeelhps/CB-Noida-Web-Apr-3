fetch('https://api.github.com/users/sabeelhps')
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })