// wcs-plat
// Copyright (C) 2020  Logan Devine

// Imports
import enmap from 'enmap';
import morgan from 'morgan';
import express from 'express';
import * as _ from 'lodash';

// Config
import config from './constants/index';

// Create app
const app = express();

// Middleware
app.use(morgan('dev'));