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
		this.view.id = 'image view';
	}

	layoutSubviews() {
		this.imageView.style.height = this.view.height;
		this.imageView.style.width = this.view.width;
	}

	setImage(src) {
		this.imageView.src = src;
	}
}