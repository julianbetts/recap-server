const express = require('express');
const data = require('./db/dogs.json');

const app = express();

app.use(express.static('public'));

app.get('/api/dogs', (req, res) => {
    // console.log(req);
    res.json(data)
})

app.listen(3001, () => console.log("app is runnin on http://localhost:3001"))