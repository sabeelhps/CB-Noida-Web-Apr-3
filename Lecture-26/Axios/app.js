
axios.get('https://api.github.com/users/sabeelhps')
    .then((res) => {
        console.log(res.data);
    })
    .catch((err) => {
        console.log(err);
    })