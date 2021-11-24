const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();

// TODO: Create a whitelist
app.use(cors());    
app.use(morgan("dev"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(helmet());

mongoose.connect(process.env.MONGO_URL, 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    })
    .then(() => console.log('Successfully connectly to DB'))
    .catch((err) => console.log('Error:>> ', err));

app.get('/', (req, res) => {
    res.json({
        message: 'tasty!'
    });
})

module.exports = app;