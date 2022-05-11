#!/usr/bin/env node

const fs = require('fs');
// const path = require('path');

const { argv } = require('process');

const error = msg => {
	console.error(msg);
	process.exit(1); // style?
}

const arg = argv.slice(2);

if(arg.length < 1) error(`No day given to process.`);

const dayVerify = dayArg => {
	const dayIn = Number.parseInt(1*dayArg);
	if(!Number.isInteger(dayIn)) error(`Day is not a number: ${dayArg} / ${dayIn} / ${Number.isInteger(dayIn)}.`);
	if(1 > dayIn || dayIn > 25) error(`Day is out of range (1-15): ${dayArg} / ${dayIn}.`);
	return `${dayIn}`.padStart(2, '0');
}

const dayNumber = dayVerify(arg[0]);
const dayInputFile = `${dayNumber}.input.txt`;
const dayModule = `${dayNumber}.js`;

if(!fs.existsSync(dayModule)) error(`Day module for ${dayNumber} is missing.`);
if(!fs.existsSync(dayInputFile)) error(`Day input for ${dayNumber} is missing.`);

const dayInput = fs
	.readFileSync(dayInputFile, 'utf8')
	.replace(/\r/g, '')
	.split('\n');

const day = require(dayModule);

// console.log(`Arguments: `, arg);

