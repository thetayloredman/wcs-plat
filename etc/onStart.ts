// wcs-plat
// Copyright (C) 2020  Logan Devine

// Import
import chalk from 'chalk';

export default function onStart(port: number) {
    console.log(chalk.green.bold(`Online at port ${port}!`));
}