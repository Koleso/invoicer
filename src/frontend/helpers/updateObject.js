/*
const updateObject = (obj) => {
	for (let i=1; i<arguments.length; i++) {
		for (let prop in arguments[i]) {
			const val = arguments[i][prop];
			if (typeof val == "object") {
				updateObject(obj[prop], val);
			} else {
				obj[prop] = val;
			}
		}
	}
	return obj;
};
*/

const updateObject = (base, extension) => {
	for (var property in base) {
		try {
			extension[property] = base[property];
		} catch(warning) {
			console.log('neco se posralo');
		}
	}
};

export default updateObject;
