"use strict";
// wcs-plat
// Copyright (C) 2020  Logan Devine
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var morgan_1 = __importDefault(require("morgan"));
var express_1 = __importDefault(require("express"));
var ejs_1 = __importDefault(require("ejs"));
// Config
var index_1 = __importDefault(require("./constants/index"));
// Import stuff
var onStart_1 = __importDefault(require("./etc/onStart"));
var read_1 = __importDefault(require("./etc/read"));
// Create app
var app = express_1.default();
// Middleware
app.use(morgan_1.default('dev'));
// Init dbs
// Listen
app.listen(index_1.default.port, function () {
    onStart_1.default(index_1.default.port);
});
// Main page
// 404
app.use('/', function (req, res) {
    var _a;
    res.status(404);
    res.end(ejs_1.default.render((_a = read_1.default('/errors/404.ejs')) !== null && _a !== void 0 ? _a : 'Error 404 not found', {}));
});
