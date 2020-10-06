// wcs-plat
// Copyright (C) 2020  Logan Devine

// Imports
import enmap from 'enmap';
import morgan from 'morgan';
import express, { json } from 'express';
import * as _ from 'lodash';
import ejs from 'ejs';
import fs from 'fs';

// Config
import config from './constants/index';

// Import stuff
import onStart from './etc/onStart';
import read from './etc/read';

// Create app
const app = express();

// Middleware
app.use(morgan('dev'));

// Init dbs

// Listen
app.listen(config.port, () => {
    onStart(config.port);
});

// Routes
app.use('/partials', express.static('./partials/'))

// 404
app.use('/', (req, res) => {
    res.status(404);
    res.end(ejs.render(read('./errors/404.ejs') || 'Error 404 not found', {}));
});