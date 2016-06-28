class View {

	//
	// Constructors
	//

	static viewWithFrame(x, y, width, height) {
		var newView = new View();
		newView.init();
		newView.setX(x);
		newView.setY(y);
		newView.setWidth(width);
		newView.setHeight(height);
		return newView;
	}

	// 
	// Internal init
	//

	init() {
		this.view = document.createElement('div');
		this.view.id = Date.now();

		this.setPosition('absolute');
		this.setX(0.0);
		this.setY(0.0);
		this.setWidth(0.0);
		this.setHeight(0.0);
		this.setBackgroundColor('');
		this.setBorderRadius(0.0);
		this.setOpacity(1.0);

		addEventListener('resize', this.layoutSubviews);
	}

	// 
	//  Not yet sorted
	// 

	copy() {
		// This sets position, x, y, width, height
		var copyView = View.viewWithFrame(this.x, this.y, this.width, this.height);
		// Copy the rest of the parameters
		copyView.setBackgroundColor(this.backgroundColor);
		copyView.setBorderRadius(this.borderRadius);
		copyView.setOpacity(this.opacity);
		return copyView;
	}

	embedIn(element) {
		element.appendChild(this.view);
	}

	addSubview(view) {
		this.view.appendChild(view.view);
	}

	removeFromSuperview() {
		this.view.parentNode.removeChild(this.view);
	}

	layoutSubviews() {
		// Subclass
	}

	// 
	// Style Properties
	// 

	setKeyValue(key, value) {
		// TODO: Clean this up, it sucks
		// Also are animations broken for non simply mapped values?
		switch(key) {
			case 'position':
				this.setPosition(value);
				break;
			case 'x':
				this.setX(value);
				break;
			case 'y':
				this.setY(value);
				break;
			case 'width':
				this.setWidth(value);
				break;
			case 'height':
				this.setHeight(value);
				break;
			case 'backgroundColor':
				this.setBackgroundColor(value);
				break;
			case 'borderRadius':
				this.setBorderRadius(value);
				break;
			case 'opacity':
				this.setOpacity(value);
				break;
			default:
				console.error("View: setKeyValue not implemented for key " + key);
				break;
		}
	}

	setPosition(position) {
		this.position = position;
		this.view.style.position = position;
	}

	setX(x) {
		this.x = x;
		this.view.style.left = x;
	}

	setY(y) {
		this.y = y;
		this.view.style.top = y;
	}

	setWidth(width) {
		this.width = width;
		this.view.style.width = width;
	}

	setHeight(height) {
		this.height = height;
		this.view.style.height = height;
	}

	setBackgroundColor(color) {
		this.backgroundColor = color;
		this.view.style.background = color;
	}

	setBorderRadius(radius) {
		this.borderRadius = radius;
		this.view.style.borderRadius = radius;
	}

	setOpacity(opacity) {
		this.opacity = opacity;
		this.view.style.opacity = opacity;
	}
}