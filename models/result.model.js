const mongoose = require('mongoose');
const { Schema } = mongoose;

const ResultSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
});

const Result = mongoose.model('result', ResultSchema);

module.exports = Result;