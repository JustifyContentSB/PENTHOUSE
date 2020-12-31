let phoneToggle = document.querySelector('.phone');
let phoneModal = document.querySelector('.phone__modal');
let phoneModalClose = document.querySelector('.phone__modal-close');
let overlayModal = document.querySelector('.overlay-modal');
let body = document.querySelector('body');

phoneToggle.addEventListener('click', function(e) {
	e.preventDefault();
	phoneModal.classList.add('active');
	overlayModal.classList.add('visible');
	body.classList.add('no-scroll');
});

phoneModalClose.addEventListener('click', function(e) {
	e.preventDefault();
	phoneModal.classList.remove('active');
	overlayModal.classList.remove('visible');
	body.classList.remove('no-scroll');
});

overlayModal.addEventListener('click', function(e) {
	phoneModal.classList.remove('active');
	this.classList.remove('visible');
	body.classList.remove('no-scroll');
});