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

		this.setTransform(Transform.identity());
		this.setPosition('absolute');
		this.setX(0.0);
		this.setY(0.0);
		this.setWidth(0.0);
		this.setHeight(0.0);
		this.setBackgroundColor('');
		this.setBorderRadius(0.0);
		this.setOpacity(1.0);

		addEventListener('resize', this.layoutSubviews);

		this.eventListeners = {};
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
			default:
				console.error("View: setKeyValue not implemented for key " + key);
				break;
		}
	}

	setTransform(transform) {
		this.transform = transform;

		this.view.style.left = this.calculateLeft();
		this.view.style.top = this.calculateTop();
		this.view.style.width = this.calculateWidth();
		this.view.style.height = this.calculateHeight();
	}

	setPosition(position) {
		this.position = position;
		this.view.style.position = position;
	}

	setX(x) {
		this.x = x;
		this.view.style.left = this.calculateLeft();
	}

	setY(y) {
		this.y = y;
		this.view.style.top = this.calculateTop();
	}

	setWidth(width) {
		this.width = width;
		this.view.style.width = this.calculateWidth();
	}

	setHeight(height) {
		this.height = height;
		this.view.style.height = this.calculateHeight();
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

	// 
	// Property Helpers
	// 

	calculateLeft() {
		var widthDescrepency = this.calculateWidth() - this.width;
		return this.x + this.transform.x - widthDescrepency/2.0;
	}

	calculateTop() {
		var heightDescrepency = this.calculateHeight() - this.height;
		return this.y + this.transform.y - heightDescrepency/2.0;
	}

	calculateWidth() {
		return this.width * this.transform.widthScale;
	}

	calculateHeight() {
		return this.height * this.transform.heightScale;
	}
}