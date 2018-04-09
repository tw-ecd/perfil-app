const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//routes
const person = require('./routes/person');
const feeling = require('./routes/feeling');

const PORT = process.env.PORT || 5000;
const app = express();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/auras').then(() => { 
    console.log('Connected to database') 
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).json({ message: 'API OK' });
});

app.use('/person', person);
app.use('/feeling', feeling);

let server = app.listen(PORT, () => {
    console.log(`Listening @ ${PORT}`);
});

module.exports = server

