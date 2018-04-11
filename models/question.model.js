const mongoose = require('mongoose');

const QuestionSchemas = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    order:{
        type: Number,
        required: true
    },
    isLast: {
        type: Boolean,
        required: true
    }
});

const Question = mongoose.model('question', QuestionSchemas);

module.exports = Question;