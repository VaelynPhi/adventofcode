#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const day = path.basename(__filename).replace('.js', '');

const input = fs.readFileSync(`${day}.input.txt`, 'utf8').replace(/\r/g, '');

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

/* Methodology note:
 Comparing sliding windows of 3 measurements.
 For window n and window n+1, measurements will be at indices:
 n, n+1, n+2
    n+1, n+2, n+3
 This means that the difference in the windows is merely the difference in n and n+3.
 Therefore we start at the first n+3 (index 3) and compare n.
*/

const increasingWindowsOfThree = depths.map((v, i, a) => {
	if(i < 3) return; // first comparison starts at index 3
	return v > a[i-3];
});

const increasingCount = increasing.filter(v => v === true).length;
const increasingWindowsOfThreeCount = increasingWindowsOfThree.filter(v => v === true).length;

console.log(`Increasing: ${increasingCount}`);
console.log(`Increasing windows of 3: ${increasingWindowsOfThreeCount}`);
