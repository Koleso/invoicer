const kmFormatter = (num) => {
	const round = Math.round(num / 1000) * 1000;
	if (round > 999999) {
		return `${(num / 1000000).toFixed(1)}M`;
	}
	if (round > 999) {
		return `${(num / 1000).toFixed(1)}k`;
	}
	return round;
};

export default kmFormatter;
