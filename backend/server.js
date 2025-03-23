const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const hpp = require('hpp');
const helmet = require('helmet');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const app = express();

const port = process.env.PORT || 5700

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(cors({
    origin: "*",
    methods: ['PUT', 'POST', 'GET', 'DELETE']
}))

app.use(helmet());
app.use(xss());
app.use(mongoSanitize());

app.get('/', (request, response) => {
    return response.status(200).json({success: true, message: 'Root Route'})
})

app.listen(port, (error) => {
    if(!error) {
        console.log('Server listening for requests on port ', port)
    }

    else {
        console.log('Could not listen for HTTP requests')
    }
})