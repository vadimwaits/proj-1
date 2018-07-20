$(document).ready(function({}) {

  // yandex map
  ymaps.ready(init);
  var myMap,
      myPlacemark;

  function init(){     
      myMap = new ymaps.Map("map", {
          center: [53.8557280706954, 27.451347499999994],
          zoom: 18
      });
      myPlacemark = new ymaps.Placemark([53.8557280706954, 27.451347499999994], {
        hintContent: 'Москва!',
        balloonContent: 'Столица России'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'assets/images/icons/icon__map-marker.svg',
          // Размеры метки.
          iconImageSize: [50, 72],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-20, -72]
      });

      myMap.geoObjects
        .add(myPlacemark)
  }

  //sticky header
  $(window).on("load scroll", function () {
      if ($(this).scrollTop() > 159) {
          $(".header").addClass("scroll");
      }
      else {
          $(".header").removeClass("scroll");
      }
  });

  //mobile nav
  $(window).on("load resize", function () {
    if ($(window).width() < 990) {
      $('.header__mobile-btn').on("click", function () {
        $('.header__list').toggleClass('active');
      });
    } else {
      $('.header__list').removeClass('active');
    }
  });

  //smooth scroll anchor btn
  var $root = $('html, body');

  $('.index-company__anchor-btn').click(function () {
      $root.animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top - 70
      }, 500);

      return false;
  });

});