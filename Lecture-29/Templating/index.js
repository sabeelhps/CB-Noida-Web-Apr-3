const express = require('express');
const app = express();
const path = require('path');


app.set('view engine', 'ejs');
// console.log(path.join(process.cwd(), 'views'));
// console.log(path.join(__dirname, 'views'));

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname,'public')));


const todos = ["Go to Gym", "Buy Groceries", "Learn Web", "Watch Movies","More Todos"];



app.get('/home', (req, res) => {
    const isLoggedIn = Math.floor(Math.random() * 2);
    console.log(Boolean(isLoggedIn));
    res.render('home',{isLoggedIn});
});

app.get('/random', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 6 + 1);
    res.render('random', { randomNumber });
}); 


app.get('/todos', (req, res) => {
    res.render('todos', { todos });
})


app.listen(3000,()=>{
  console.log('server started at port 3000');
});