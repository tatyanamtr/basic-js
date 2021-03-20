const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
	
	if (Array.isArray(array)) {
		let newarr = [];
 for ( let name of array) { 

 	if (typeof(name) == "string") {
 		
 		newarr.push(name.trim().toUpperCase().charAt(0));
 	}
 	
 }
 newarr.sort();
 return newarr.join("");
	}
	else {
	return false;
}
};
