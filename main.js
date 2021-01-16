
window.addEventListener('load', function () {
	let block = document.querySelector('.block');
	const step = 50;
	const height = 50;

	function keyup(event) {
		if (event.keyCode == 17) {
			block.style.transform = 'scaleY(1) scaleX(1)';
		}
	}

	function keydown(event) {
		let offsetLeft = block.offsetLeft;
		let offsetTop = block.offsetTop;

		if (event.keyCode == 39) {
			block.style.left = offsetLeft + step + 'px';
			if (offsetLeft + block.offsetWidth >= window.innerWidth) {
				block.style.left = window.innerWidth - block.offsetWidth - step * 2 + 'px';
			}
		}

		else if (event.keyCode == 37) {
			block.style.left = offsetLeft - step + 'px';
			if (offsetLeft <= 0) {
				block.style.left = step * 2 + 'px';
			}
		}

		else if (event.keyCode == 40 && block.style.transform != 'scaleY(0.6) scaleX(1.15)') {
			block.style.top = offsetTop + step + 'px';
			if (offsetTop + block.offsetHeight >= window.innerHeight) {
				block.style.top = window.innerHeight - block.offsetHeight - step * 2 + 'px';
			}
		}
		
		else if (event.keyCode == 38 && block.style.transform != 'scaleY(0.6) scaleX(1.15)' ) {
			block.style.top = offsetTop - step + 'px';
			if (offsetTop <= 0) {
				block.style.top = step * 2 + 'px';
			}
		}

		else if (event.keyCode == 17) {
			 block.style.transform = 'scaleY(0.6) scaleX(1.15)';		
		}

		else if (event.keyCode == 32 && block.style.transform != 'scaleY(0.6) scaleX(1.15)') {
			block.style.top = offsetTop - height + 'px';
			setTimeout(() => block.style.top = block.offsetTop + height + 'px' , 1000);
		}
	}

	document.addEventListener('keydown', keydown);
	document.addEventListener('keyup', keyup);

});
