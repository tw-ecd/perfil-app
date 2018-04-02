const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).json({message: 'API OK'});
});

app.listen(PORT, () => {
    console.log(`Listening @ ${PORT}`);
});
