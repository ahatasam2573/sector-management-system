const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

let schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    sector: {
        type: String,
        required: true
    },
    gender: String,
    terms_condition: String
})

const userDB = mongoose.model('userdb', schema);

module.exports = userDB;