const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

//routes
const person = require('./routes/person');

const PORT = process.env.PORT || 5000;
const app = express();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/auras').then(() => { console.log('FUNFOU') });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).json({ message: 'API OK' });
});

app.use('/person', person);

app.listen(PORT, () => {
    console.log(`Listening @ ${PORT}`);
});

