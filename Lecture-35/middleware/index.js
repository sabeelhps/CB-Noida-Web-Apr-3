const express = require('express');
const app = express();


// app.use((req, res, next) => {
//     res.send('HIJACKED BY MY APP.USE!!!!');
// })

app.use((req, res, next) => {
    console.log('MY FIRST MIDDLEWARE!');
    req.username = 'Sabeel';
    return next();
    console.log('Inside FIRST MIDDLEWARE AFTER CALLING NEXT()');
});

app.use((req, res, next) => {
    console.log('My Second Middleware');
    next();
});

app.get('/', (req, res) => {
    const { username } = req;
    console.log('Home Route!')
    res.send(`HOME ROUTE!! ---> ${username}`);
});


const verify = (req, res, next) => {
    const { password } = req.query;
    if (password === 'monkey') {
        return next();    
    }
    res.send('Incorrect Password');
}


app.get('/secret',verify, (req, res) => {
    res.send('Sometime i wear headphone in public so that i dont have to talk to anyone!');
});


app.listen(3000,()=>{
  console.log('server started at port 3000');
});