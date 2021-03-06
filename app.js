const express = require('express');
const path = require('path');// we don't need to install path module separately as it's a core module
const mongoose = require('mongoose');// it is an object relational mapping libraries of Mongodb
const bodyParser = require('body-parser');//This body-parser module parses the JSON, buffer, string and URL encoded data submitted using HTTP POST request in req.body.
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const config = require('./config/database');
const passport = require('passport');

mongoose.connect(config.database);
let db = mongoose.connection;

// Check Connection
db.once('open', function () {
    console.log('Connected to Mongo DB');
});

// Check for DB error
db.on('error', function (err) {
    console.log(err);
});

// Init App
const app = express();

// Bring in models
let Article = require('./models/article');

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Body Parser Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Set public folder
app.use(express.static(path.join(__dirname, 'public')));

// Express Messages Middleware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
    res.locals.messages = require('express-messages')(req, res);// setting global variable 'messages' to express messages module. it needs connect flash module
    next();
});

// Express Session Middleware
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
    // cookie: { secure: true }
}));

// Express Validator Middleware
app.use(expressValidator({
    errorFormatter: function (param, msg, value) {
        var namespace = param.split('.')
            , root = namespace.shift()
            , formParam = root;

        while (namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param: formParam,
            msg: msg,
            value: value
        };
    }
}));

// Passport Config
require('./config/passport')(passport);
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Home Route
//------------------------------//

/*For Hello world
 app.get('/', function(req, res){
     res.send('Hello World');
 });
*/

// showing page from 'views'
/*
app.get('/', function(req, res){

    let articles = [
        {
            id:1,
            title:'Article One',
            author:'Yassir Arafat',
            body:'This is Artcile one'
        },
        {
            id:2,
            title:'Article Two',
            author:'Tazdik Ershad',
            body:'This is Artcile two'
        },
        {
            id:1,
            title:'Article Three',
            author:'Hasan Arim',
            body:'This is Artcile three'
        }
    ];
    res.render('index', {
        title: 'Articles',
        articles:articles
    });
});
*/
// Setting Global Variable
app.get('*', function(req, res, next){
    res.locals.user = req.user || null;
    next();
})

// collecting articles from mongodb and showing it to page
app.get('/', function (req, res) {
    Article.find({}, function (err, articlesres) {
        if (err) {
            console.log(err);
        } else {
            res.render('index', {
                title: 'Articles',
                articles: articlesres
            });
        }
    });
});

// Route files
let articles = require('./routes/articles');
let users = require('./routes/users');
app.use('/articles', articles);
app.use('/users', users);

// Start Server
app.listen(3000, function () {
    console.log('server started on port 3000');
});