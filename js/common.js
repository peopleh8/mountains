$(function () {
  $('.header__burger-menu').on('click', function () {
    $('.header__burger-menu').toggleClass('active');
    $('.header__burger-top').toggleClass('active');
    $('.header__burger-mid').toggleClass('active');
    $('.header__burger-bot').toggleClass('active');
    $('.header__menu').toggleClass('active');
  });

  $(window).on('load', function() {
    var clonedHeader = $('.header__top').clone(true);
    clonedHeader.addClass('header__top-cloned');
    $('.header__top').before(clonedHeader);
  });

  var scrollPos = 0;
  $(window).on('load scroll resize', function() {
    var st = $(this).scrollTop();
    if ($(window).scrollTop() >= $('.header').height()) {
      if (st > scrollPos){
        $('.header__top-cloned').removeClass('active');
        $('.header__burger-menu').removeClass('active');
        $('.header__burger-top').removeClass('active');
        $('.header__burger-mid').removeClass('active');
        $('.header__burger-bot').removeClass('active');
        $('.header__menu').removeClass('active');
        
      } else {
        $('.header__top-cloned').addClass('active');
      }
      scrollPos = st;
    } else {
      $('.header__top-cloned').removeClass('active');
    }
  });

  /* Sliders */

  $('.partners__slider').slick({
    arrows: false,
    slidesToShow: 6,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 900,
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 5
        }
      },
      {
        breakpoint: 850,
        settings: {
          arrows: false,
          slidesToShow: 4
        }
      },
      {
        breakpoint: 695,
        settings: {
          arrows: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 474,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      }
    ]
  });

  $('.testimonials__slider').slick({
    slidesToShow: 2,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 900,
    pauseOnDotsHover: false,
    pauseOnFocus: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 794,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });

  /* Modal */

  $('.gallery__grid').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      verticalFit: true
    },
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300,
      opener: function (element) {
        return element.find('img');
      }
    }
  });
});