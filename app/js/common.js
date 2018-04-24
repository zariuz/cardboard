$(document).ready(function(){
  //Phone Mask
  $("#phone_one").inputmask({"mask": "+7 (999) 999-9999"});
  $("#phone_two").inputmask({"mask": "+7 (999) 999-9999"});
  $("#phone_three").inputmask({"mask": "+7 (999) 999-9999"});
  $("#phone_four").inputmask({"mask": "+7 (999) 999-9999"});
  $("#phone_five").inputmask({"mask": "+7 (999) 999-9999"});
  $("#phone_six").inputmask({"mask": "+7 (999) 999-9999"});

  //Modal
  $('.button-modal').on("click", function(){
    $('.overlay').show()
  });
  $('.popup-close').on("click", function(){
    $('.overlay').hide()
  });

  //Modal Detail
  $('.button-one').on("click", function(){
    $('.detail-one').show()
  });
  $('.detail-close').on("click", function(){
    $('.detail-one').hide()
  });

  $('.button-two').on("click", function(){
    $('.detail-two').show()
  });
  $('.detail-close').on("click", function(){
    $('.detail-two').hide()
  });


  //Slick
  $('.production-slider__top').slick({
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.production-slider__bottom',
    fade: true,
  });
  $('.production-slider__bottom').slick({
    arrows:true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    prevArrow: '<div class="slider-arrow slider-arrow_prod slider-arrow__left"></div>',
    nextArrow: '<div class="slider-arrow slider-arrow_prod slider-arrow__right"></div>',
    asNavFor: '.production-slider__top',
    focusOnSelect: true
  });
  $('.feedback-slider').slick({
    arrows:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ],
    prevArrow: '<div class="slider-arrow__feedback slider-arrow__feedback-left"></div>',
    nextArrow: '<div class="slider-arrow__feedback slider-arrow__feedback-right"></div>',
  });
  $('.main-slider').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 10000,
  });

  //Menu mobile
  function setHeiHeight() {
    var windowWidth = $(window).width();
    if (windowWidth>1200){
        $('a[href^="#"]').click(function(){
            var target = $(this).attr('href');
            $('html, body').animate({scrollTop: $(target).offset().top - 100}, 1000);
            return false;
        });
    }else{
        var sidebar1 = 0;
        $(document).on("click", ".header-menu__btn", function() {
            if(sidebar1 == 0){
                $(".header-menu__btn span:nth-child(1)").addClass("menu_tool_gear_1");
                $(".header-menu__btn span:nth-child(2)").addClass("menu_tool_gear_2");
                $(".header-menu__btn span:nth-child(3)").addClass("menu_tool_gear_3");
                $('.page-content').animate({
                    left: 320
                }, 320, function() {});
                $('.sidebar').animate({
                    left: 0
                }, 320, function() {});
                sidebar1 = 1
            }else{
                $(".header-menu__btn span:nth-child(1)").removeClass("menu_tool_gear_1");
                $(".header-menu__btn span:nth-child(2)").removeClass("menu_tool_gear_2");
                $(".header-menu__btn span:nth-child(3)").removeClass("menu_tool_gear_3");
                $('.page-content').animate({
                    left: 0
                }, 320, function() {});
                $('.sidebar').animate({
                    left: -320
                }, 320, function() {});
                sidebar1 = 0
            }
        });

        $('a[href^="#"]').click(function(){
            var target = $(this).attr('href');
            $('html, body').animate({scrollTop: $(target).offset().top - 100}, 1000);

            if(sidebar1 == 0){
                $(".header-menu__btn span:nth-child(1)").addClass("menu_tool_gear_1");
                $(".header-menu__btn span:nth-child(2)").addClass("menu_tool_gear_2");
                $(".header-menu__btn span:nth-child(3)").addClass("menu_tool_gear_3");
                $('.page-content').animate({
                    left: 270
                }, 320, function() {});
                $('.sidebar').animate({
                    left: 0
                }, 320, function() {});
                sidebar1 = 1
            }else{
                $(".header-menu__btn span:nth-child(1)").removeClass("menu_tool_gear_1");
                $(".header-menu__btn span:nth-child(2)").removeClass("menu_tool_gear_2");
                $(".header-menu__btn span:nth-child(3)").removeClass("menu_tool_gear_3");
                $('.page-content').animate({
                    left: 0
                }, 320, function() {});
                $('.sidebar').animate({
                    left: -320
                }, 320, function() {});
                sidebar1 = 0
            }

            return false;
        });
    }
  }

  setHeiHeight();
  $(window).resize( setHeiHeight );
});

//Map
ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [59.93684606, 30.31217600],
          zoom: 16
      }, {
          searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Собственный значок метки',
          balloonContent: 'Мы тут!'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: '../img/maps.png',
          // Размеры метки.
          iconImageSize: [40, 40],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-20, -40]
      });

  myMap.geoObjects
      .add(myPlacemark);
      
  myMap.behaviors.disable('scrollZoom');
});
