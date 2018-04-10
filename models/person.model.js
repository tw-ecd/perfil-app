const mongoose = require('mongoose');
const crc = require('crc');

const generateId  = () => {
    return crc.crc32(new Date().toISOString()).toString(36).toUpperCase();
}

const PersonSchema = new mongoose.Schema({
    _id:{
        type: String,
        'default': generateId
    },
    name: {
        type: String
    },
    email:
        {
            type: String
        },
    company:
        {
            type: String
        },
    role:
        {
            type: String
        }
});

const Person = mongoose.model('person', PersonSchema);

module.exports = Person;