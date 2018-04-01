class ViewController {
	constructor() {
		this.view = this.loadView();
		this.viewDidLoad();
	}

	loadView() {
		// This is where subclasses should create their custom view hierarchy
		return View.viewWithFrame(0, 0, 0, 0);
	}

	viewDidLoad() {
		// Called after the view has been loaded.
		return;
	}

	viewDidAppear() {
		// Called once the view is visible on screen.
		document.title = this.title;
		return;
	}

	windowDidResize() {
		// Called whenever the window resizes
		return;
	}

	setTitle(title) {
		this.title = title;
		document.title = title;
	}
}