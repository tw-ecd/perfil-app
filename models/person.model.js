const mongoose = require('mongoose');
const crc = require('crc');
const { Schema } = mongoose;

const generateId = () => {
    let id = crc.crc32(new Date().toISOString()).toString(24) + '12345678';
    return id.toUpperCase().slice(0, 6);
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
    function: {
        type: String
    },
    career_email_permission: {
        type: Boolean
    },
    access_events_permission: {
        type: Boolean
    },
    information_share_permission: {
        type: Boolean
    },
    profile: {
        type: String
    },
    image_permission: {
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
            value: Schema.Types.Mixed,
            weight: Number,
            typeOf: String
        }]
});

const Person = mongoose.model('person', PersonSchema);

module.exports = Person;