ymaps.ready(init);

function init() {
    var map = new ymaps.Map("map", {
        center: [59.93884369, 30.32318398],
        zoom: 15,
        controls: ["zoomControl"],
        behaviors: ["drag"]
    });

    var placemark = new ymaps.Placemark([59.93884369, 30.32318398], {
        hintContent: '<div class="map-hint">ул. Большая Конюшенная, д. 19/8</div>',
        balloonContent: [
            '<div class="map-balloon">',
            '<img class="map-supercat-img" src="img/map-pin.png" alt="Супер-кот"/>',
            'Супер еда для супер котов по адресу: ул. Большая Конюшенная, д. 19/8',
        ].join("")
    },
    {
        iconLayout: "default#image",
        iconImageHref: "img/map-pin.png",
        iconImageSize: [57, 53],
        iconImageOffset: [-28, -53]
    });

    map.geoObjects.add(placemark);
}