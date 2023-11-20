const mongoose = require('mongoose');
const app = require('./app');
const colors = require('colors')
const dotenv = require('dotenv').config();
const port = process.env.PORT || 8080;


mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    try {
        console.log('Database Connect Is Successfully'.magenta.bold);       
    } catch (error) {
        console.log(error.message, 'Could not Connect Database'.red.bold)
    }
});


app.listen(port, () => { console.log(`Server is Running Successfully On Port ${port}`.cyan.bold) })

