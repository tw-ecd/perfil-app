const mongoose = require('mongoose');
const crc = require('crc');

const generateId = () => {
    return crc.crc32(new Date().toISOString()).toString(36).toUpperCase();
};

const PersonSchema = new mongoose.Schema({
    _id: {
        type: String,
        'default': generateId
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    company: {
        type: String
    },
    role: {
        type: String
    },
    profile: {
        type: String
    },
    accepted_conditions: {
        type: Boolean
    },
    image_url: {
        type: String
    },
    datetime: {
        type: Date
    },
    answers:
        [{
            question: String,
            option: String,
            value: Number,
            weight: Number,
            typeOf: String
        }]
});

const Person = mongoose.model('person', PersonSchema);

module.exports = Person;