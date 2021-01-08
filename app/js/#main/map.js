let mapBtnTel = document.querySelector('.choose__map-tel');
let mapBtnDekstop = document.querySelector('.choose__map-dekstop');
let chooseListing = document.querySelector('.choose__listing-btn');
let mansionHouseWrapper = document.querySelector('.mansion__house-wrapper');
let map = document.querySelector('.map');

mapBtnTel.addEventListener('click', function(e) {
	e.preventDefault();
	mansionHouseWrapper.classList.toggle('none');
	map.classList.toggle('active');
	chooseListing.classList.remove('active');
    body.classList.add('no-scroll');
    overlayModal.classList.add('visible');
});

mapBtnDekstop.addEventListener('click', function(e) {
    e.preventDefault();
    mansionHouseWrapper.classList.toggle('none');
    map.classList.toggle('active');
    chooseListing.classList.remove('active');
    this.classList.add('active');
});

chooseListing.addEventListener('click', function(e) {
	e.preventDefault();
	mansionHouseWrapper.classList.remove('none');
	map.classList.remove('active');
	chooseListing.classList.toggle('active');
    body.classList.remove('no-scroll');
    mapBtnDekstop.classList.remove('active');
});

overlayModal.addEventListener('click', function() {
    mansionHouseWrapper.classList.remove('none');
    map.classList.remove('active');
    chooseListing.classList.toggle('active');
    body.classList.remove('no-scroll');
    overlayModal.classList.remove('visible');
    mapBtnDekstop.classList.remove('active');
});

