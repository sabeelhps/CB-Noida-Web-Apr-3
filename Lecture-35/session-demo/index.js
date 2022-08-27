const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
    secret: 'weneedabettersecret',
    resave: false,
    saveUninitialized: true,
}));


app.get('/user', (req, res) => {
    res.send('User Route');
});

app.get('/setusername', (req, res) => {
    const { username } = req.query;
    req.session.username = username;
    res.redirect('/greet');
});

app.get('/greet', (req, res) => {
    const { username } = req.session;
    res.send(`Hello from ${username}`); 
});

app.get('/viewcount', (req, res) => {
    if (req.session.viewcount) {
        req.session.viewcount += 1;
    } else {
        req.session.viewcount = 1;
    }
    res.send(`You have viewed this page ${req.session.viewcount} times!`);
})



app.listen(3000,()=>{
  console.log('server started at port 3000');
});