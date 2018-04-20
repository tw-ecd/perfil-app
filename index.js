require('dotenv').load();

const mongoose = require('mongoose');
const winston = require('winston');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 5000;
const app = express();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/auras').then(() => { 
    winston.log('info', 'Connected to database');
});

//routes
const person = require('./routes/person');
const question = require('./routes/question');
const profile = require('./routes/profile');

const corsOptions = {
    origin: [
        process.env.CORS_PHOTO_TEST_ORIGIN,
        process.env.CORS_PHOTO_PROD_ORIGIN,
        process.env.CORS_QUIZZ_TEST_ORIGIN,
        process.env.CORS_QUIZZ_PROD_ORIGIN
    ],
    optionsSuccessStatus: 200
};


app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: false }));
app.use(bodyParser.json({ limit: '5mb' }));

app.get('/', (req, res) => {
    res.status(200).json({ message: 'API OK' });
});

app.use('/person', person);
question(app);
profile(app);



let server = app.listen(PORT, () => {
    winston.log('info', `Listening @ ${PORT}`);
});

module.exports = server;

