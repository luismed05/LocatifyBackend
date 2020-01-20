const mongoose = require('mongoose');
const locationSchema = require('./utils/locationSchema')

const UserSchema = new mongoose.Schema({
    name: String,
    senha: String,
    perguntaSeg: String,
    respostaSeg: String,
    location: {
        type: locationSchema,
        index: '2dsphere'
    }
});

module.exports = mongoose.model('User', UserSchema);