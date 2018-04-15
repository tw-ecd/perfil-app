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
    }
});

const Option = mongoose.model('option', OptionSchema);

module.exports = Option;