#!/usr/bin/env node

const fs = require('fs');

const input = fs.readFileSync('01.input.txt', 'utf8').replace(/\r/g, '');
const depths = input
	.split('\n')
	.map(v => 1*v)
	// .slice(0, 5)
;

// const dps = depths.map(v => ({
// 	number: 1*v,
// 	text: v,
// 	numInc: null,
// 	textInc: null
// }));

// for(let i = 1; i < dps.length; i++){
// 	dps[i].numInc = dps[i].number > dps[i-1].number;
// 	dps[i].textInc = dps[i].text > dps[i-1].text;
// 	if(dps[i].numInc !== dps[i].textInc){
// 		console.log(dps[i], dps[i-1]);
// 	}
// }

const increasing = depths.map((v, i, a) => {
	if(i == 0) return;
	// let increased = v > a[i-1];
	// console.log(i, a[i-1], v, increased, typeof(v));
	// if(v == a[i-1]) console.log("SAMESIES");
	return v > a[i-1];
});

const increaseCount = increasing.filter(v => v === true).length;

console.log(increaseCount);
