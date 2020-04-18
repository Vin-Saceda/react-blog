const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/dbone', {useNewUrlParser:true})
        .then(() => console.log('DB connected'))
        .catch(err => console.error(err));

app.get('/', (req, res)=>{
    res.send('Hello');
});

app.listen(5000, () => console.log('Running on port 5000'));