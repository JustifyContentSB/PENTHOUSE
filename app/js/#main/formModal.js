let formToggle = document.querySelectorAll('.form-toggle');
let formModal = document.querySelector('.main-form--modal');
let formClose = document.querySelector('.main-form__close');

for(let i = 0; i < formToggle.length; i++) {
	formToggle[i].addEventListener('click', function(e) {
		e.preventDefault();
		formModal.classList.add('visible');
		overlayModal.classList.add('visible');
		body.classList.add('no-scroll');
	});
}

formClose.addEventListener('click', function(e) {
	e.preventDefault();
	formModal.classList.remove('visible');
	body.classList.remove('no-scroll');
	overlayModal.classList.remove('visible');
});

overlayModal.addEventListener('click', function() {
	formModal.classList.remove('visible');
});