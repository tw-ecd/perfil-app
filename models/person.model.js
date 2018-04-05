const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:
        {
            type: String,
            required: true
        },
    company:
    {
        type: String
    }
},{collection: 'person'});

const Person = mongoose.model('person', PersonSchema);

module.exports = Person;