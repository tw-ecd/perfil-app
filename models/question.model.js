const mongoose = require('mongoose');
const { Schema } = mongoose;
require('./option.model');

const QuestionSchemas = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    order: {
        type: Number,
        required: true
    },
    isLast: {
        type: Boolean,
        required: true
    },
    options: {
        type: [{ type: Schema.Types.ObjectId, ref: 'option' }]
    },
    type:{
        type: String,
        required: true
    },
    weight:{
        type: Number,
        required: true
    }
});

const Question = mongoose.model('question', QuestionSchemas);

module.exports = Question;