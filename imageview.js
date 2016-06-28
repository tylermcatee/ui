class ImageView extends View {
	_constructor(x, y, width, height) {
		console.log("ImageView _constructor");
		this.imageView = document.createElement('img');
		this.imageView.style.position = 'absolute';
		this.imageView.style.left = x;
		this.imageView.style.top = y;
		this.imageView.style.width = width;
		this.imageView.style.height = height;
		this.view.appendChild(this.imageView);
	}

	setImage(src) {
		this.imageView.src = src;
	}
}