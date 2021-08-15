let burger = document.getElementById('js-burger');

burger.onclick = function() {
	let mnu = document.getElementById("js-menu");
	mnu.classList.toggle('open');

	let body = document.getElementsByTagName('body');
	body[0].classList.add('scrolloff');

	window.scrollTo(0, 0);
};

let exitMenu = document.getElementById('js-menu__exit')
exitMenu.onclick = function() {
	let mnu = document.getElementById("js-menu");
	mnu.classList.toggle('open');

	let body = document.getElementsByTagName('body');
	body[0].classList.remove('scrolloff');
};


