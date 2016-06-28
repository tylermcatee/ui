class Transform {
	constructor() {
		this.x = 0;
		this.y = 0;
		this.widthScale = 1.0;
		this.heightScale = 1.0;
	}

	static identity() {
		return new Transform();
	}

	static translate(x, y) {
		var transform = new Transform();
		transform.x = x;
		transform.y = y;
		return transform;
	}

	static scale(width, height) {
		var transform = new Transform();
		transform.widthScale = width;
		transform.heightScale = height;
		return transform;
	}
}

function interpolatedTransform(min, max, percent) {
	var x = flerp(min.x, max.x, percent);
	var y = flerp(min.y, max.y, percent);
	var widthScale = flerp(min.widthScale, max.widthScale, percent);
	var heightScale = flerp(min.heightScale, max.heightScale, percent);
	var transform = new Transform();
	transform.x = x;
	transform.y = y;
	transform.widthScale= widthScale;
	transform.heightScale = heightScale;
	return transform;
}