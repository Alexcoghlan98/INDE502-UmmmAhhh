const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

router.get('/', (req, res) => {
    res.render('home');
})

router.get('/dashboard', ensureAuthenticated, (req, res) => {
    res.render('dashboard', {
        firstName: req.user.firstName,
        lastName: req.user.lastName
    })
})

router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'Succesful Logout');
    res.redirect('/account/signin');
})

router.get('/results', ensureAuthenticated, (req, res) => {
    res.render('results');
})

router.get('/quiz', ensureAuthenticated, (req, res) => {
    res.render('quiz');
})

router.get('/riddles', ensureAuthenticated, (req, res) => {
    res.render('riddles');
})

router.get('/jokes', ensureAuthenticated, (req, res) => {
    res.render('jokes');
})

router.get('/maths', ensureAuthenticated, (req, res) => {
    res.render('maths');
})

router.get('/openclose', ensureAuthenticated, (req, res) => {
    res.render('openclose');
})
module.exports = router;
