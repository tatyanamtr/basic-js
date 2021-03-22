const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
	if (typeof sampleActivity == "string") {
		let nsa = Number(sampleActivity);
		if (typeof nsa == "number" && nsa > 0  && nsa < MODERN_ACTIVITY) {
			let ln = Math.log(MODERN_ACTIVITY/nsa);
			return Math.ceil(ln/(0.693/HALF_LIFE_PERIOD));
		}
		else {
			return false;
		}
	}

	else {
		return false;
		
	}	
 	
};
