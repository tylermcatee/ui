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
	}

	performAction() {
		this.action(this);
	}
}