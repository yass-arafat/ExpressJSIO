const express = require('express');
const router = express.router();

// Bring in models
let Article = require('./models/article');

// Add Route
router.get('/add', function (req, res) {
    res.render('add_articles', {
        title: 'Add Articles'
    });
});

// Add Articles Route

// Get Single Article
router.get('/:id', function (req, res) {

    Article.findById(req.params.id, function (err, article) {
        if (err) {
            console.log(err);
            return;
        }
        else {
            res.render('article', {
                article: article
            })
        }

    });

});

// Load edit form
router.get('/edit/:id', function (req, res) {
    Article.findById(req.params.id, function (err, article) {
        res.render('edit_article', {
            title: 'Edit Article',
            article: article
        });
    });
});

// Saving Article to DB
router.post('/add', function (req, res) {

    req.checkBody('title', 'Title Is Required').notEmpty();
    req.checkBody('author', 'Author Is Required').notEmpty();
    req.checkBody('body', 'Body Is Required').notEmpty();

    let errors = req.validationErrors();

    if (errors) {
        res.render('add_articles', {
            title:"Add Article",
            errors:errors
        })
    } else {
        let article = new Article();
        article.title = req.body.title;
        article.author = req.body.author;
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
    article.author = req.body.author;
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

    let query = { _id: req.params.id }

    Article.remove(query, function (err) {
        if (err) {
            coonsole.log(err);
        }
        res.send("Success");
    })
});

module.exports = router;