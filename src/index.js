import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import https from 'https';
import { readFileSync } from 'fs';
import { resolve, join } from 'path';
import passport from 'passport';
import all_routes from 'express-list-endpoints';
const helmet = require("helmet");
var fs = require('fs');
const port = 5000;

import routes from './routes';
import { seedDb } from './utils/seed';


const app = express();

app.use(helmet());




// Bodyparser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());
require('./services/jwtStrategy');
require('./services/facebookStrategy');
require('./services/googleStrategy');
require('./services/localStrategy');

const isProduction = process.env.NODE_ENV === 'production';

// DB Config
const dbConnection = isProduction ? process.env.MONGO_URI_PROD : process.env.MONGO_URI_DEV;

// Connect to Mongo
mongoose
    .connect(dbConnection, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => {
        console.log('MongoDB Successfully Connected...');
        seedDb();
    })
    .catch((err) => console.log(err));

// Use Routes
app.use('/', routes);
app.use('/public', express.static(join(__dirname, '../public')));


var key = fs.readFileSync(resolve(__dirname, '../security/cert.key'));
var cert = fs.readFileSync(resolve(__dirname, '../security/cert.pem'));
var options = {
    key: key,
    cert: cert
};

//app = express()
app.get('/', (req, res) => {
    res.send('Now using https..');
});

var server = https.createServer(options, app);

server.listen(port, () => {
    console.log("server starting on port : " + port)
});