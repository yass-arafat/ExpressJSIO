const express = require('express');
const router = express.Router();

// Article Model
let Article = require('../models/article');

// User Model
let User = require('../models/user');

// Add Route
router.get('/add', ensureAuthenticated, function (req, res) {
    res.render('add_articles', {
        title: 'Add Articles'
    });
});

// Add Articles Route

// Load edit form
router.get('/edit/:id', ensureAuthenticated, function (req, res) {
    Article.findById(req.params.id, function (err, article) {
        if (article.author != req.user._id) {
            req.flash('danger', 'Not Authorized');
            res.redirect('/');
        }
        res.render('edit_article', {
            title: 'Edit Article',
            article: article
        });
    });
});

// Saving Article to DB
router.post('/add', function (req, res) {

    req.checkBody('title', 'Title Is Required').notEmpty();
    // req.checkBody('author', 'Author Is Required').notEmpty();
    req.checkBody('body', 'Body Is Required').notEmpty();

    let errors = req.validationErrors();

    if (errors) {
        res.render('add_articles', {
            title: "Add Article",
            errors: errors
        })
    } else {
        let article = new Article();
        article.title = req.body.title;
        article.author = req.user._id;
        article.body = req.body.body;

        article.save(function (err) {
            if (err) {
                console.log(err);
                return;
            } else {
                req.flash('success', 'Article Added');
                res.redirect('/');
            }
        });
    }
});


// edit Article
router.post('/edit/:id', function (req, res) {
    let article = {};

    article.title = req.body.title;
    article.author = req.user._id;
    article.body = req.body.body;

    let query = { _id: req.params.id }

    Article.update(query, article, function (err) {
        if (err) {
            console.log(err);
            return;
        }
        else {
            req.flash('success', 'Article Updated');
            res.redirect('/');
        }
    });
});

// Delete Article
router.delete('/:id', function (req, res) {
    if (!req.user._id) {
        res.status(500).send();
    }

    let query = { _id: req.params.id }

    Article.findById(req.params.id, function (err, article) {
        if (article.author != req.user._id) {
            res.status(500).send();
        } else {
            Article.remove(query, function (err) {
                if (err) {
                    coonsole.log(err);
                }
                res.send("Success");
            });
        }
    });

});

// Get Single Article
router.get('/:id', function (req, res) {

    Article.findById(req.params.id, function (err, article) {
        if (err) {
            console.log(err);
            return;
        }
        else {
            User.findById(article.author, function (err, user) {

                res.render('article', {
                    article: article,
                    author: user.name
                });
            });
        }

    });

});

// Access Control
function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        req.flash('danger', 'Please Log in');
        res.redirect('/users/login');
    }
}

module.exports = router;