const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('Hello from my first ever server is');
})

app.listen(port, () => {
    console.log(`My first is running on port: ${port}`);
})