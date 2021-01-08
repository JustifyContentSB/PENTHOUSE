$(document).ready(function() {
	let chooseList = document.querySelector('.choose__list');
	$('.choose__parameter').on('click', function() {
		let inputs = document.querySelectorAll('.choose__list input');
		let chooseReset = document.querySelector('.choose__reset');
		for(let i = 0; i < inputs.length; i++) {
			inputs[i].addEventListener('change', function() {
				if(inputs[i].checked) {
					chooseReset.classList.add('active');
				}
			})
		}
		chooseList.classList.add('visible');
		overlayModal.classList.add('visible');
		body.classList.add('no-scroll');
	});
	$(overlayModal).on('click', function() {
		chooseList.classList.remove('visible');
	});
	$('.choose__about-btn').on('click', function(e) {
		e.preventDefault();
		$(this).next('.choose__about-list').toggleClass('visible');
	});
});