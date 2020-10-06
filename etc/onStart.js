"use strict";
// wcs-plat
// Copyright (C) 2020  Logan Devine
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import
var chalk_1 = __importDefault(require("chalk"));
function onStart(port) {
    console.log(chalk_1.default.green.bold("Online at port " + port + "!"));
}
exports.default = onStart;
