const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
	
  calculateDepth(arr, depth) {
  	 if (!depth) {
  	 	depth = 1;
  	 }
    for (let elem of arr) {
    	if (Array.isArray(elem)) {
    		// depth++;
    		depth += Math.max(this.calculateDepth(elem,depth),depth)
    	}
    	else {
    		depth=depth;
    	}
    }

    return depth;
  }
  
};
