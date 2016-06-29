class Label extends View {
	static labelWithFrame(x, y, width, height) {
		var newLabel = new Label();
		newLabel.init();
		newLabel.setX(x);
		newLabel.setY(y);
		newLabel.setWidth(width);
		newLabel.setHeight(height);
		newLabel.text = '';
		newLabel.fontSize = 16.0;
		newLabel.fontColor = 'black';
		newLabel.textAlign = 'left';
		return newLabel;
	}

	init() {
		super.init();
		this.view.id = 'label';
	}

	static textSize(text, fontSize) {
		var testDummy = textSize.testDummy || function() {
			textSize.testDummy = document.createElement("div");
			textSize.testDummy.style.position = 'absolute';
			textSize.testDummy.style.top = -1000;
			textSize.testDummy.style.left = -1000;
			textSize.testDummy.style.height = 'auto';
			textSize.testDummy.style.width = 'auto';
			textSize.testDummy.style.whiteSpace = 'nowrap';
			document.body.appendChild(textSize.testDummy);
			return textSize.testDummy;
		}();
		testDummy.innerHTML = text;
		testDummy.style.fontSize = fontSize;
		var dummyWidth = (testDummy.clientWidth + 1);
		var dummyHeight = (testDummy.clientHeight + 1);
		return {'width' : dummyWidth, 'height' : dummyHeight};
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
