const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
	let result = "";

 	let addition = options.addition;
 	if (addition === undefined) {
 		addition = "";
 	} 
 	else String(addition);

 	let additionSeparator = options.additionSeparator;
 	if (!additionSeparator) {
 		additionSeparator = "|";
 	}
 	else String(additionSeparator);

 	let separator = options.separator;
 	if (!separator) {
 		separator = "+";
 	}
 	let repeatTimes = options.repeatTimes;
 	let additionRepeatTimes = options.additionRepeatTimes;

 	if (!repeatTimes) {
 		return str+addition;
 	}
 	else if (!additionRepeatTimes){
 		let strSep = str + addition + separator;
 	result+=strSep.repeat(repeatTimes).slice(0, -separator.length);
 	return result;
 	}
 	else {
 		let addAddSep = addition+additionSeparator;
 		let strSep =str +addAddSep.repeat(additionRepeatTimes).slice(0, -additionSeparator.length);
 		result+=strSep+separator;
 		return result.repeat(repeatTimes).slice(0, -separator.length);
 	}

 	
};
