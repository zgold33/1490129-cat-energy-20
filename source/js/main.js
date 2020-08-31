//Карта

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

//Меню

var burgerButton = document.querySelector(".page-header__toggle")
var mainMenu = document.querySelector(".menu")

burgerButton.classList.remove("page-header__toggle--nojs")
mainMenu.classList.remove("menu--nojs")

burgerButton.addEventListener("click", function () {
  mainMenu.classList.toggle("menu--opened");
  burgerButton.classList.toggle("page-header__toggle--inactive")
})

//Слайдер

function imangeComparison() {
    const sliderWrap = document.querySelector(".slider__wrapper");
    const imgBefore = sliderWrap.querySelector(".slider__picture--before");
    const imgAfter = sliderWrap.querySelector(".slider__picture--after");
    const range = sliderWrap.querySelector("#slider");
    const buttonBefore = sliderWrap.querySelector(".slider__button--before");
    const buttonAfter = sliderWrap.querySelector(".slider__button--after");
    const checkbox = sliderWrap.querySelector("slider__checkbox");

    function _setImageWidth(event) {
        imgBefore.style.width = 100 - event.currentTarget.value + "%";
        imgAfter.style.width  = event.currentTarget.value + "%";
    }


function setImageClassHidden(event) {
    if (event.currentTarget === buttonBefore || !event.currentTarget.checked) {
        imgAfter.classlist.add("slider__picture--disables");
        imgBefore.classlist.remove("slider__picture--disables");
        imgAfter.style.width = 0 + "%";
        imgBefore.style.width = 100 + "%";
        checkbox.checked = false;
    }
    if (event.currentTarget === buttonBefore || !event.currentTarget.checked) {
        imgBefore.classlist.add("slider__picture--disables");
        imgAfter.classlist.remove("slider__picture--disables");
        imgBefore.style.width = 0 + "%";
        imgAfter.style.width = 100 + "%";
        checkbox.checked = false;
    }
}

range.addEventListener("input", _setImageWidth);
range.addEventListener("change", _setImageWidth);
checkbox.addEventListener("change", setImageClassHidden);
buttonBefore.addEventListener("click", setImageClassHidden);
buttonAfter.addEventListener("click", setImageClassHidden);

window.onload = imangeComparison; }