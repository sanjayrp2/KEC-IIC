const mongoose = require('mongoose');
const contestSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    form_link: String
    })
    
module.exports.contest = mongoose.model ("contest", contestSchema);  
    