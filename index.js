'use strict';

require(`dotenv`).config();
require(`module-alias/register`);

const appName = process.env.APP_NAME || 'serven berjalan baik';
const port = process.env.PORT || 7000;
const host = process.env.HOST || 'localhost';
const environment = process.env.ENVIRONMENT || 'localy';

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require(`path`);
const bodyParser = require(`body-parser`);

const controller = require(`@controllers`);
const routeApi= require(`@controllers/api`);

const app = express();

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
app.use(helmet())
app.use(morgan(`dev`))

app.use(function(req, res, next) {
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cookie");
    // res.header("Access-Control-Allow-Credentials", true);
    res.header(
        'Content-Security-Policy',
        "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.quilljs.com https://cdnjs.cloudflare.com https://maps.googleapis.com"
    );
    res.header(
        'Content-Security-Policy',
        "worker-src blob: https://unpkg.com/"
    );
    next();
});

app.use(`/api`, routeApi);
app.use(`/`, controller);

app.listen(port, () => {
    console.log(`${appName} runing ${environment} on ${host} port ${port}`);
});
