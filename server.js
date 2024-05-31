// Express Server Requires
const express = require('express');
const cors = require('cors');

// Body Requests
const bodyParser = require('body-parser');

// Clear Console
console.clear();

// Set .env
require('dotenv').config({ path: './.env' })
const port = process.env.PORT || 3001;
const host = process.env.HOST;

// Express Application Init
const app = express();
const http = require('http');
const server = http.createServer(app);

// Cors Options
// This is modificable to your needs
const corsOptions = {
    origin: origins,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Bearer'],
    optionsSuccessStatus: 200,
    credentials: true
};

//Set uses of cors and body-parser
app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: '50mb' })); // This is modificable to your needs
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' })); // This is modificable to your needs

//HTTP, Routes and Guards
const helmet = require('helmet');
const { studioLogger, condor } = require('./data/common/middlewares');

const routes = require('./data/models/router');

app.use(helmet())
app.use(studioLogger)
app.use(condor)
app.use(routes)

server.listen(port, host, () => {
    console.log(`-----------------------------------------------------------------------------------------------------------`)
    console.log(`| Method |                    Route                    |       Origins       |            Date            |`);
    console.log(`-----------------------------------------------------------------------------------------------------------`)
});