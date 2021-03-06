var DummyLabel = (function () {
    var instance;
 
    function createInstance() {
        var testDummy = document.createElement("div");
		testDummy.style.position = 'absolute';
		testDummy.style.top = -1000;
		testDummy.style.left = -1000;
		testDummy.style.height = 'auto';
		testDummy.style.width = 'auto';
		testDummy.style.whiteSpace = 'none';
		document.body.appendChild(testDummy);
        return testDummy;
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

class Label extends View {

	static textSize(text, fontSize) {
		var testDummy = Label.textSize.testDummy || function() {
			Label.textSize.testDummy = document.createElement("div");
			Label.textSize.testDummy.style.position = 'absolute';
			Label.textSize.testDummy.style.top = -1000;
			Label.textSize.testDummy.style.left = -1000;
			Label.textSize.testDummy.style.height = 'auto';
			Label.textSize.testDummy.style.width = 'auto';
			Label.textSize.testDummy.style.whiteSpace = 'nowrap';
			document.body.appendChild(Label.textSize.testDummy);
			return Label.textSize.testDummy;
		}();

		testDummy.innerHTML = text;
		testDummy.style.fontSize = fontSize;
		var dummyWidth = (testDummy.clientWidth + 1);
		var dummyHeight = (testDummy.clientHeight + 1);
		return {'width' : dummyWidth, 'height' : dummyHeight};
	}

	heightForWidth() {
		var test = DummyLabel.getInstance();
		test.style.height = 'auto';
		test.style.width = this.width;
		test.style.fontSize = this.fontSize;
		test.style.fontFamily = this.fontFamily;
		test.innerHTML = this.text;
		return test.clientHeight + 1;
	}

	static labelWithFrame(x, y, width, height) {
		var newLabel = new Label();
		newLabel.init();
		newLabel.setX(x);
		newLabel.setY(y);
		newLabel.setWidth(width);
		newLabel.setHeight(height);
		return newLabel;
	}

	init() {
		super.init();
		this.text = '';
		this.setFontFamily('monospace');
		this.setFontSize(16.0);
		this.setFontColor('black');
		this.setFontWeight('normal');
		this.setTextAlign('left');
	}

	copy() {
		var copyView = Label.labelWithFrame(this.x, this.y, this.width, this.height);
		this.copyParams(copyView);
		return copyView;
	}

	copyParams(copyView) {
		super.copyParams(copyView);
		copyView.setText(this.text);
		copyView.setFontFamily(this.fontFamily);
		copyView.setFontSize(this.fontSize);
		copyView.setFontColor(this.fontColor);
		copyView.setFontWeight(this.fontWeight);
		copyView.setTextAlign(this.textAlign);
	}

	setText(text) {
		this.text = text;
		this.view.innerHTML = text;
	}

	setFontFamily(fontFamily) {
		this.fontFamily = fontFamily;
		this.view.style.fontFamily = fontFamily;
	}

	setFontSize(fontSize) {
		this.fontSize = fontSize;
		this.view.style.fontSize = fontSize;
	}

	setFontColor(fontColor) {
		this.fontColor = fontColor;
		this.view.style.color = fontColor;
	}

	setFontWeight(fontWeight) {
		this.fontWeight = fontWeight;
		this.view.style.fontWeight = fontWeight;
	}

	setTextAlign(textAlign) {
		this.textAlign = textAlign;
		this.view.style.textAlign = textAlign;
	}
}
