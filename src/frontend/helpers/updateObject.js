const updateObject = (base, extension) => {
	for (var property in base) {
		try {
			extension[property] = base[property];
		} catch(warning) {
			console.log(warning);
		}
	}
};

export default updateObject;
