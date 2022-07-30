const express = require('express');
const app = express();




app.get('/', (req, res) => {
    res.send('Hello');
});

app.get('/r/:subredit', (req, res) => {
    // console.log(req.params); //Path params

    const { subredit } = req.params;

    res.send(`You are requesting ${subredit} subredit`);
});


app.get('/user/:userid/comments/:commentid', (req, res) => {
    console.log(req.params);
    res.send(req.params);
});


app.get('/search', (req, res) => {
    console.log(req.query);
    const { q } = req.query;
    res.send(`You are searching for ${q}`);
});




app.listen(3000,()=>{
  console.log('server started at port 3000');
});