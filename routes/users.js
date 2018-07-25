const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

// Bring in models
let User = require('../models/user');

// Register Form
router.get('/register', function(req, res){
    res.render('register');
});


router.post('/register', function(req, res){
    const name = req.body.name;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const conpassword = req.body.conpassword;

    req.checkBody('name', 'Name is Required').notEmpty();
    req.checkBody('email', 'Email is Required').notEmpty();
    req.checkBody('email', 'Email is not Valid').isEmail();
    req.checkBody('username', 'Username is Required').notEmpty();
    req.checkBody('password', 'Password is Required').notEmpty();
    req.checkBody('conpassword', 'Password do not match').equals(req.body.password);

    let validationErrors = req.validationErrors();

    if(validationErrors){
        res.render('register', {
            validationErrors : validationErrors
        })
    }else{
        let newUser = new User({
            name:name,
            email:email,
            username:username,
            password:password
        });

        bcrypt.genSalt(10, function(err, salt){
            bcrypt.hash(newUser.password, salt, function(err, hash){
                
                if(err) console.log(err);

                newUser.password = hash;

                newUser.save(function(err){
                    if(err) {
                        console.log(err);
                        return;
                    } else{
                        req.flash('success', 'You are now registere and can log in');
                        res.redirect('/users/login');
                    }
                })
            });

        })
    }

});

router.get('/login', function(req, res){
    res.render('login');
});

module.exports = router;