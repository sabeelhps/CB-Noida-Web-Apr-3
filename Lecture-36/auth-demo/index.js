const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const User = require('./models/user');
const bcrypt = require('bcrypt');
const session = require('express-session');

mongoose.connect('mongodb://localhost:27017/auth-demo')
    .then(() => console.log('db connected'))
    .catch((err) => console.log(err));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie:{
        // secure:true ,
        maxAge: 1000 * 60 * 1,
    }
}));



const isLoggedIn = (req, res, next) => {
    if (req.session.user_id) {
        return next();
    }
    console.log('Please login to continue');
    res.redirect('/login');
}

app.get('/', (req, res) => {
    res.send('Home Route!');
});


app.get('/register', (req, res) => {
    res.render('signup');
});

app.post('/register', async (req, res) => {
    try {
        const { username, password, email } = req.body;

        // generate salt based upon salt rounds
        const salt = await bcrypt.genSalt(10);
        // generate hash using given salt
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({ username, email, hash: hashedPassword });


        res.send(user);
    }
    catch (e) {
        console.log('Something went wrong');
        console.log(e.message);
    }
});


app.get('/login', (req, res) => {
    res.render('login');
});


app.post('/login', async (req, res) => {
    
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });

        if (!user) {
            console.log('Invalid Username');
            return res.redirect('/login');
        }

        const isValidPassword = bcrypt.compare(password, user.hash);

        if (!isValidPassword) {
            console.log('Invalid Password');
            return res.redirect('/login');
        }

        req.session.user_id = user._id;

        console.log(req.session.cookie.maxAge);

        res.redirect('/secret');
    }
    catch (e) {
        console.log('Something went wrong');
        console.log(e.message);
    }
});


app.get('/secret',isLoggedIn, (req, res) => {
    res.send('THIS IS MY TOP SECRET!');
});


app.get('/logout', (req, res) => {
    req.session.destroy();
    console.log('Logged Out SuccessFully');
    res.redirect('/login');
})


app.listen(3000,()=>{
  console.log('server started at port 3000');
});