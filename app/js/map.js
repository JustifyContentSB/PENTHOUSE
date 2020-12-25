ymaps.ready(init);

function init() {
    let map = new ymaps.Map('map', {
        center: [55.735573, 37.659792],
        zoom: 12,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    let placemark = new ymaps.Placemark([55.734930, 37.653529], {
    },
    {
    	iconLayout: 'default#image',
        iconImageHref: '../images/map/placemark.png',
        iconImageSize: [58, 56],
    });

    map.geoObjects.add(placemark);
}

let mapBtn = document.querySelector('.choose__map');
let chooseListing = document.querySelector('.choose__listing-btn');
let mansionHouseWrapper = document.querySelector('.mansion__house-wrapper');
let map = document.querySelector('#map');

mapBtn.addEventListener('click', function(e) {
	e.preventDefault();
	mansionHouseWrapper.classList.toggle('none');
	map.classList.toggle('active');
	mapBtn.classList.toggle('active');
	chooseListing.classList.remove('active');
});

chooseListing.addEventListener('click', function(e) {
	e.preventDefault();
	mansionHouseWrapper.classList.remove('none');
	map.classList.remove('active');
	mapBtn.classList.remove('active');
	chooseListing.classList.toggle('active');
});

