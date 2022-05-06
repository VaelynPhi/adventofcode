#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const day = path.basename(__filename).replace('.js', '');

const input = fs.readFileSync(`${day}.input.txt`, 'utf8').replace(/\r/g, '');

const motions = input
	.split('\n')
	// .slice(0,10)
	.map(c => {
		c = c.split(' ');
		if(c.length != 2){ /* console.log(`Ignoring empty line.`); */ return; }
		return ({ direction: c[0], distance: (1*c[1]) })
	}).filter(c => !!c);
;

const positionSimple = motions.reduce( (p,c,i,a) => {
	switch(c.direction){
		case "forward": p.x += c.distance; break;
		case "down": p.y += c.distance; break;
		case "up": p.y -= c.distance; break;
		default: console.error(`Unsupported input:`, c);
	}
	return p;
}, { x: 0, y: 0 });

console.log("Final simple position: ", positionSimple, (positionSimple.x * positionSimple.y) );

const positionComplex = motions.reduce( (p,c,i,a) => {
	switch(c.direction){
		case "down": p.aim += c.distance; break;
		case "up": p.aim -= c.distance; break;
		case "forward":
			p.x += c.distance;
			p.y += (p.aim * c.distance);
		break;
		default: console.error(`Unsupported input:`, c);
	}
	return p;
}, { x: 0, y: 0, aim: 0 });

console.log("Final simple position: ", positionComplex, (positionComplex.x * positionComplex.y) );
