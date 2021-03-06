var __mainWindow;

class Window {
	static mainWindow() {
		if (__mainWindow == null) {
			__mainWindow = new Window();
			__mainWindow.setContainee(document.body);
		}
		return __mainWindow;
	}

	setContainee(containee) {
		this.containee = containee;
	}

	layoutContainee() {
		this.rootViewController.view.setWidth(document.body.clientWidth);
		this.rootViewController.view.setHeight(document.body.clientHeight);
		this.rootViewController.view.setX(0.0);
		this.rootViewController.view.setY(0.0);
		this.rootViewController.windowDidResize();
	}

	load() {
		this.rootViewController.viewDidAppear();
	}

	setRootViewController(viewController) {
		viewController.view.embedIn(this.containee);
		this.rootViewController = viewController;
		window.addEventListener("resize", this.layoutContainee.bind(this));
		window.onload = this.load.bind(this);
		this.layoutContainee();
	}
}