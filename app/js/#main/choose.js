$(document).ready(function() {
	$('.choose__parameter').on('click', function() {
		let chooseList = document.querySelector('.choose__list');
		if(chooseList.style.maxHeight) {
			chooseList.style.maxHeight = null;
		} else {
			chooseList.style.maxHeight = chooseList.scrollHeight + 'px';
		}
		let inputs = document.querySelectorAll('.choose__list input');
		let chooseReset = document.querySelector('.choose__reset');
		for(let i = 0; i < inputs.length; i++) {
			inputs[i].addEventListener('change', function() {
				if(inputs[i].checked) {
					chooseReset.classList.add('active');
				}
			})
		}
	});
});