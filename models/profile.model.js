const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    identifier: {
        type: String
    }
});

const Profile = mongoose.model('profile', ProfileSchema);

module.exports = Profile;