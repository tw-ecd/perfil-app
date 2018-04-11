require('dotenv').load();

const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//routes
const person = require('./routes/person');
const question = require('./routes/question');


const PORT = process.env.PORT || 5000;
const app = express();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/auras').then(() => { 
    console.log('Connected to database') 
});

app.use(cors());
app.use(bodyParser.urlencoded({ limit: '5mb', extended: false }));
app.use(bodyParser.json({ limit: '5mb' }));

app.get('/', (req, res) => {
    res.status(200).json({ message: 'API OK' });
});

app.use('/person', person);
question(app);


let server = app.listen(PORT, () => {
    console.log(`Listening @ ${PORT}`);
});

module.exports = server

