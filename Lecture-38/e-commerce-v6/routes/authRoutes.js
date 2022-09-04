const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');



// router.get('/fakeuser', async (req, res) => {
//     const user = new User({ username: 'max', email: 'max@gmail.com' });
//     const newUser = await User.register(user, "1234");
//     res.send(newUser);
// });

router.get('/register', (req, res) => {
    res.render('auth/signup');
});


router.post('/register', async (req, res) => {
    try {
        const { username, password, email, userType } = req.body;
        const user = new User({ username, email, userType });
        await User.register(user, password);
        req.flash('success', `Signed up successfully as ${user.username} successfully`);
        res.redirect('/login');
    } 
    catch (e) {
        req.flash('error', e.message);
        res.redirect('/register')
    }
});

router.get('/login', (req, res) => {
    res.render('auth/login');
});


router.post('/login',
    passport.authenticate('local', {
        failureRedirect: '/login',
        failureFlash:true
    }), (req, res) => {
        req.flash('success', 'Logged In Successfully');
        res.redirect('/products');
});
  

router.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            req.flash('error', 'cannot logout at the momemt');
            return res.redirect('/products');
        }
        req.flash('success', 'Good Bye!');
        res.redirect('/login');
    })
})

module.exports = router;