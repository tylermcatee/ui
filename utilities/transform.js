class Transform {
	constructor() {
		this.x = 0;
		this.y = 0;
	}

	static identity() {
		return new Transform();
	}

	static scalar(x, y) {
		var transform = new Transform();
		transform.x = x;
		transform.y = y;
	}
}