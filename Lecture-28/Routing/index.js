const express = require('express');
const app = express();


// Routes
app.get('/', (req, res) => {
    res.send('HOME ROUTE');
});


app.get('/cat', (req, res) => {
    res.send('MEOOWWWW');
});

app.get('/dog', (req, res) => {
    res.send('WOOOF WOOOF');
});

app.post('/cat', (req, res) => {
    res.send('YOU ARE SENDING POST REQUEST!!!!');
});


app.patch('/user', (req, res) => {
    res.send('YOU ARE MAKING A PATCH REQUEST');
});


app.all("*", (req, res) => {
    res.send('YOU ARE REQUESTING A WRONG URL!');
});


app.listen(3000,()=>{
  console.log('server started at port 3000');
});