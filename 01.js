#!/usr/bin/env node

module.exports = input => {
	const depths = input.map(v => 1*v);

	const increasing = depths.map((v, i, a) => {
		if(i == 0) return;
		return v > a[i-1];
	}).filter(v => v === true).length;

	// /* Methodology note:
	//  Comparing sliding windows of 3 measurements.
	//  For window n and window n+1, measurements will be at indices:
	//  n, n+1, n+2
	//     n+1, n+2, n+3
	//  This means that the difference in the windows is merely the difference in n and n+3.
	//  Therefore we start at the first n+3 (index 3) and compare n.
	// */

	const increasingWindowsOfThree = depths.map((v, i, a) => {
		if(i < 3) return; // first comparison starts at index 3
		return v > a[i-3];
	}).filter(v => v === true).length;

	return `Increasing: ${increasing}.
	Increasing windows of 3: ${increasingWindowsOfThree}.`;
}
