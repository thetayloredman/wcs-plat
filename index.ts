// wcs-plat
// Copyright (C) 2020  Logan Devine

// Imports
import 'enmap';
import 'morgan';
import express from 'express';
import * as _ from 'lodash';
import 'morgan';

// Config
import config from './constants/index';

// Create app
const app = express();

// Listen
app.listen(config.port, () => {
    console.log('Up!');
});