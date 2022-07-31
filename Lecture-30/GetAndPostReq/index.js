const express = require('express');
const app = express();
const path = require('path');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.render('index');
});


app.get('/user', (req, res) => {
    console.log(req.query);
    res.send('YOU MADE A GET REQUEST!'); 
});

app.post('/user', (req, res) => {
    console.log(req.body);
    res.send('POST REQUEST');
});



app.listen(3000,()=>{
  console.log('server started at port 3000');
});