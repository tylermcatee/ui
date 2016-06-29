class Label extends View {
	static labelWithFrame(x, y, width, height) {
		var newLabel = new Label();
		newLabel.init();
		newLabel.setX(x);
		newLabel.setY(y);
		newLabel.setWidth(width);
		newLabel.setHeight(height);
		return newLabel
	}

	init() {
		super.init();
	}

	setText(text) {
		this.text = text;
		this.view.innerHTML = text;
	}

	setFontSize(fontSize) {
		this.fontSize = fontSize;
		this.view.style.fontSize = fontSize;
	}

	setFontColor(fontColor) {
		this.fontColor = fontColor;
		this.view.style.color = fontColor;
	}

	setTextAlign(textAlign) {
		this.textAlign = textAlign;
		this.view.style.textAlign = textAlign;
	}

}