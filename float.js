var FLOAT_EPISLON = 0.0001;

function fequal(a, b) {
	var absA = Math.abs(a);
	var absB = Math.abs(b);
	var diff = Math.abs(a - b);

	if (a == b) {
		return true;
	} else {
		// Use reletive error
		return diff / (absA + absB) < FLOAT_EPISLON;
	}
}

function fpercent(min, current, max) {
	return (current - min)/(max - min);
}

function flerp(min, max, percent) {
	return percent * (max - min) + min;
}

function fgreater(a, b) {
	return (a - b) > FLOAT_EPISLON;
}