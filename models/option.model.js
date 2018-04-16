const mongoose = require('mongoose');
const { Schema } = mongoose;

const OptionSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    value:{
        type: Number,
        required: true
    },
    questionId: {
        type: Schema.Types.ObjectId, ref: 'question'
    }
});

const Option = mongoose.model('option', OptionSchema);

module.exports = Option;