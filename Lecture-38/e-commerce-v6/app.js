if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStratgey = require('passport-local');
const User = require('./models/user');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const MongoStore = require('connect-mongo');


// Routes 
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');
const cartRoutes = require('./routes/cartRoutes');

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/shopping-app-noida-apr-3';

mongoose.connect(dbUrl)
    .then(() => console.log('DB Connected'))
    .catch((err) => console.log(err));


app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(mongoSanitize()); //this prevents injection attack
app.use(helmet({contentSecurityPolicy: false }));


const store = MongoStore.create({
  mongoUrl: dbUrl,
  touchAfter: 60 * 60 * 24 * 1
});

const secret = process.env.SECRET || 'we need a better secret';


const sessionConfig = {
  store:store,
  secret: secret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    // secure: true,
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7 * 1,
  }
}

app.use(session(sessionConfig));
app.use(flash());


app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(new LocalStratgey(User.authenticate()));


app.use((req, res, next) => {
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  res.locals.currentUser = req.user;
  next();
})



app.get('/', (req, res) => {
  console.log(req.query);
  res.render('home');
});


app.use(productRoutes);
app.use(authRoutes);
app.use(cartRoutes);


app.get('/error', (req, res) => {
  res.render('error');
});

const port = process.env.PORT || 3000;

app.listen(port,()=>{
  console.log(`server started at port ${port}`);
});