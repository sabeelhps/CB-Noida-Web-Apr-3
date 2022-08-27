const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser('weneedabettersecret'));

const cart = [
    {
        name: 'Iphone',
        price:20000,
    },
    {
        name: 'Mac',
        price:400000
    }
]

app.get('/', (req, res) => {
    res.send(req.cookies);
});

app.get('/', (req, res) => {
    res.cookie('mode', 'dark'); // we are simply setting the value of cookie inside a response
    res.cookie('usercart', JSON.stringify(cart));
    res.send('Home Route!');  //here we are actually sending back the http response
});

app.get('/user', (req, res) => {
    console.log(req.cookies);
    res.send(req.cookies);
});

app.get('/signedcookie', (req, res) => {
    res.cookie('fruit', 'Apple', { signed: true });
    res.send('SENT U A SIGNED COOKIE!');
});

app.get('/getsignedcookie', (req, res) => {
    res.send(req.signedCookies);
})



app.listen(8080,()=>{
  console.log('server started at port 8080');
});