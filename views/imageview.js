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
		this.imageView.style.width = "100%";
		this.imageView.style.height = "100%";
		this.imageView.style.position = 'relative';
		super.init();
		this.view.appendChild(this.imageView);
	}

	setImage(src) {
		this.imageView.src = src;
	}
}