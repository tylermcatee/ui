class EventHandler {

	static clickHandler(action) {
		var handler = new EventHandler(action);
		handler.eventName = "click";
		return handler;
	}

	constructor(action) {
		this.action = action;
		this.eventName = "";
		this.target = null;
		this.lastEvent = null;
	}

	performAction(event) {
		this.lastEvent = event;
		this.action(this);
	}

	locationInView(view) {
		return {x: this.lastEvent.x, y: this.lastEvent.y};
	}
}