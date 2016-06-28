class ImageView extends View {

	static imageViewWithFrame(x, y, width, height) {
		var newImageView = new ImageView();
		newImageView.init();
		newImageView.setX(x);
		newImageView.setY(y);
		newImageView.setWidth(width);
		newImageView.setHeight(height);
		return newImageView;
	}

	init() {
		this.imageView = document.createElement('img');
		super.init();
		this.view.appendChild(this.imageView);
	}

	setImage(src) {
		this.imageView.src = src;
	}

	setHeight(height) {
		super.setHeight(height);
		this.imageView.style.height = height;
	}

	setWidth(width) {
		super.setWidth(width);
		this.imageView.style.width = width;
	}
}