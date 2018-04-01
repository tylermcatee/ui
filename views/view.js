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
	// Initializer
	//

	init() {
		this.view = document.createElement('div');
		this.view.id = Date.now();

		this.superview = null;
		this.subviews = [];

		this.setTransform(Transform.identity());
		this.setPosition('absolute');
		this.setX(0.0);
		this.setY(0.0);
		this.setWidth(0.0);
		this.setHeight(0.0);
		this.setBackgroundColor('');
		this.setBorderRadius(0.0);
		this.setBorderColor('');
		this.setOpacity(1.0);
		this.setOverflow('visible');

		this.borderColor = 'black';
		this.setBorderWidth(0.0);

		this.eventListeners = {};
	}

	// 
	// Copying
	// 

	copy() {
		// This sets position, x, y, width, height
		var copyView = View.viewWithFrame(this.x, this.y, this.width, this.height);
		this.copyParams(copyView);
		return copyView;
	}

	copyParams(copyView) {
		// Copy the rest of the parameters
		copyView.setTransform(this.transform);
		copyView.setBackgroundColor(this.backgroundColor);
		copyView.setBorderRadius(this.borderRadius);
		copyView.setOpacity(this.opacity);
		copyView.setOverflow(this.overflow);
		copyView.setBorderWidth(this.borderWidth);
		copyView.setBorderColor(this.borderColor);
	}

	// 
	//  Not yet sorted
	// 

	embedIn(element) {
		element.appendChild(this.view);
	}

	addSubview(view) {
		this.view.appendChild(view.view);
		view.superview = this;
		this.subviews.push(view);
	}

	removeFromSuperview() {
		this.view.parentNode.removeChild(this.view);
		var indexOfSelfInParentsSubviews = this.superview.subviews.indexOf(this);
		console.log(this.superview.subviews);
		this.superview.subviews.splice(indexOfSelfInParentsSubviews, 1);
		this.view.superview = null;
	}

	// 
	// Events
	// 

	addEventHandler(eventHandler) {
		if (this.eventListeners[eventHandler.eventName] == null) {
			this.eventListeners[eventHandler.eventName] = eventHandler;
		} else {
			console.log.error("Need to add support for handling collision of eventHanlders, and removing them.");
		}
		eventHandler.target = this;
		this.view.addEventListener(eventHandler.eventName, this.callbackEventHandler.bind(this));
	}

	callbackEventHandler(event) {
		var eventHandler = this.eventListeners[event.type];
		eventHandler.performAction(event);
		event.stopPropagation();
	}

	// 
	// Style Properties
	// 

	setKeyValue(key, value) {
		// TODO: Clean this up, it sucks
		// Also are animations broken for non simply mapped values?
		switch(key) {
			case 'transform':
				this.setTransform(value);
				break;
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
			case 'borderWidth':
				this.setBorderWidth(value);
				break;
			case 'borderColor':
				this.setBorderColor(value);
				break;
			default:
				console.error("View: setKeyValue not implemented for key " + key);
				break;
		}
	}

	setTransform(transform) {
		this.transform = transform;
		var transformString = transform.asString();
		this.view.style.webkitTransform = transformString;
	    this.view.style.MozTransform = transformString;
	    this.view.style.msTransform = transformString;
	    this.view.style.OTransform = transformString;
	    this.view.style.transform = transformString;
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
		if (opacity == 0.0) {
			this.view.style.pointerEvents = "none";
		}
	}

	setOverflow(overflow) {
		this.overflow = overflow;
		this.view.style.overflow = overflow;
		console.log("Set overflow to ", overflow);
	}

	setBorderWidth(borderWidth) {
		this.borderWidth = borderWidth;
		this.updateBorder();
	}

	setBorderColor(borderColor) {
		this.borderColor = borderColor;
		this.updateBorder();
	}

	// 
	// Property Helpers
	// 

	updateBorder() {
		if (this.borderWidth == 0.0) {
			this.view.style.border = 'none';
		} else {
			this.view.style.border = this.borderWidth + "px solid " + this.borderColor;
		}
	}
}