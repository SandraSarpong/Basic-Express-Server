const mongoose = require('mongoose');

const express = require('express');

const cors = require('cors');

const app = express();

const port = 1000;

const detailsRoutes = require('./routes/detailsRoutes');

const {json} = require('express');

const dbURI = 'mongodb+srv://Shandibenz:Dntbrkmahrt1@cluster0.eogeo.mongodb.net/basicExpressServer?retryWrites=true&w=majority';

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(function(result) {
        console.log('Database is connected');
    })
    .catch((err) => console.log(err));

app.use (cors());

app.use(json());

app.use('/details',detailsRoutes );

app.get('/', (req,res) => res.send('Welcome to my Homepage!'));

app.listen(port, () => console.log(`Server Running on port: http://localhost:${port}`));