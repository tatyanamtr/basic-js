

module.exports = function transform(arr) {
	if (!Array.isArray(arr)) {
		throw new Error;
	}
	if (arr.length == 0) {
		return arr;
	}
	let res = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == "--double-next") {
			if (arr[i+1] != undefined) {
				res.push(arr[i+1]);
			}
			else continue;
			
		}
		else if (arr[i] == "--double-prev") {
			if (arr[i-1] != undefined && arr[i-2] != "--discard-next") {
				res.push(arr[i-1]);
			}
			else continue;
			
			
		}
		else if (arr[i] == "--discard-next") {
			i++;
			
		}
		else if (arr[i] == "--discard-prev" && arr[i-2] != "--discard-next") {
			res.pop();
		}
		else if (arr[i] == "--discard-prev" && arr[i-2] == "--discard-next") {
			continue;
		}
		else res.push(arr[i]);
	}
	return res;
};
