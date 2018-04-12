const mongoose = require('mongoose');
const { Schema } = mongoose;

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
        type: [{ type: Schema.Types.ObjectId, ref: 'Option' }]
    }
});

const Question = mongoose.model('question', QuestionSchemas);

module.exports = Question;