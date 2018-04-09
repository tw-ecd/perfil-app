const mongoose = require('mongoose');

const FeelingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    colors:
        {
            type: [String],
            required: true
        },
    active:
    {
        type: Boolean,
        required: true
    }
});

const Feeling = mongoose.model('feeling', FeelingSchema);

module.exports = Feeling;