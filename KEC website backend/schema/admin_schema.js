const mongoose = require('mongoose');
const adminSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone_num: Number,
    password: String,
    role: String,
    department:String
})
module.exports.Details = mongoose.model ("Details", adminSchema);