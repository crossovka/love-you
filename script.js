document.addEventListener('touchstart', function (e) {
	var body = document.querySelector('body');
	var heart = document.createElement('span');

	// var x = e.screenX;
	// var y = e.screenY;
	var x = e.offsetX;
	var y = e.offsetY;
	heart.style.left = x + 'px';
	heart.style.top = y + 'px';

	var size = Math.random() * 100;
	heart.style.width = 50 + size + 'px';
	heart.style.height = 50 + size + 'px';
	body.appendChild(heart);

	console.log(e);

	setTimeout(function () {
		heart.remove();
	}, 700);
});
