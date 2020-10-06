"use strict";
// wcs-plat
// Copyright (C) 2020  Logan Devine
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import
var fs_1 = __importDefault(require("fs"));
var chalk_1 = __importDefault(require("chalk"));
function read(file) {
    var content;
    fs_1.default.readFile(file, 'utf-8', function (err, contents) {
        if (err) {
            console.log(chalk_1.default.red('Failed to read ' + file + ': ' + err));
        }
        else {
            content = contents;
        }
    });
    return content;
}
exports.default = read;
