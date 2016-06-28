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

	windowDidResize() {
		// Called whenever the window resizes
		return;
	}
}