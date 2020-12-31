ymaps.ready(init);

let placemarks = [
    {
        latitude: 55.734930,
        longitude: 37.659792,
        balloonContentHeader: '<div class="choose__list">'  +
                            '<div class="choose__price">' +
                                '<div class="choose__price-header">'+
                                    '<p class="choose__title">Цена</p>  '  + 
                                    '<div class="choose__price-list">'+
                                        '<a class="choose__price-currency active" href="#">руб</a>'+
                                        '<a class="choose__price-currency" href="#">usd</a>'+
                                        '<a class="choose__price-currency" href="#">eur</a>'+
                                    '</div>'+
                                '</div>'+
                        '</div>'
    }
];

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
        // balloonContentHeader: '<div class="choose__list">'  +
        //                     '<div class="choose__price">' +
        //                         '<div class="choose__price-header">'+
        //                             '<p class="choose__title">Цена</p>  '  + 
        //                             '<div class="choose__price-list">'+
        //                                 '<a class="choose__price-currency active" href="#">руб</a>'+
        //                                 '<a class="choose__price-currency" href="#">usd</a>'+
        //                                 '<a class="choose__price-currency" href="#">eur</a>'+
        //                             '</div>'+
        //                         '</div>'+
        //                 '</div>',
        hintContent: 'zaebalo'
    });

    let placemark2 = new ymaps.Placemark([55.7, 37.653529], {
    },
    {
        iconLayout: 'default#image',
        iconImageHref: '../images/map/placemark.png',
        iconImageSize: [58, 56],
    });

    let placemark3 = new ymaps.Placemark([55.7, 37.54], {
    },
    {
        iconLayout: 'default#image',
        iconImageHref: '../images/map/placemark.png',
        iconImageSize: [58, 56],
    });

    map.geoObjects.add(placemark);
    map.geoObjects.add(placemark2);
    map.geoObjects.add(placemark3);
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

