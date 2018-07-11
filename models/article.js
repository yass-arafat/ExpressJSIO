let mongoose = require('mongoose');

// Article Schema
let articleSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    body:{
        type: String,
        rwquired: true
    }
});

let Article = module.exports = mongoose.model('Article', articleSchema);