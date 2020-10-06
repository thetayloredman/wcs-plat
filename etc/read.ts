// wcs-plat
// Copyright (C) 2020  Logan Devine

// Import
import fs from 'fs';
import chalk from 'chalk';

export default function read(file: string) {
    let content;
    fs.readFile(file, 'utf-8', (err, contents) => {
        if (err) {
            console.log(chalk.red('Failed to read ' + file + ': ' + err));
        } else {
            content = contents;
        }
    });
    return content;
}