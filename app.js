const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').config()
const port = process.env.PORT || 8080
const colors = require('colors')
const mongoose = require('mongoose');
// Middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Route is Running Yah!')
});


module.exports = app;