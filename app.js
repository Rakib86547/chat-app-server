const express = require('express');
const app = express();
const cors = require('cors');
// const dotenv = require('dotenv').config()
// const port = process.env.PORT || 8080
// const colors = require('colors')
// const mongoose = require('mongoose');
const errorHandler = require('./middleware/errorHandler/errorHandler');

// Middleware
app.use(errorHandler);
app.use(express.json());
app.use(cors());


const userRoute = require('./routes/v1/userRoute');

app.get('/', (req, res) => {
    res.send('Route is Running Yah!')
});

app.use('/v1/user', userRoute);

module.exports = app;