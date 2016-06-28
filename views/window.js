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

	setRootViewController(viewController) {
		viewController.view.embedIn(this.containee);
	}
}