let searchBtn = document.querySelector('.header__search-icon');
let searchForm = document.querySelector('.header__search-inner');
let searchClear = document.querySelector('.header__search-delete');
let searchInput = document.querySelector('.header__search-input');
let searchClose = document.querySelector('.header__search-toggle');

searchBtn.addEventListener('click', function(e) {
	e.preventDefault();
	searchForm.classList.add('active');
});

searchClear.addEventListener('click', function(e) {
	e.preventDefault();
	searchInput.value = '';
	searchInput.focus();
});

searchClose.addEventListener('click', function(e) {
	e.preventDefault();
	searchForm.classList.remove('active');
});