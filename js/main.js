$(function(){
    $('.slider-inner').slick({
        prevArrow: '<button class="slick-arrow arrow-prev"><img src="images/arrow-prev.png" alt=""></button>',
        nextArrow: '<button class="slick-arrow arrow-next"><img src="images/arrow-next.png" alt=""></button>',
        dots: false,
        infinite: true,
        speed: 1200,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
              {
                breakpoint: 1376,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                  infinite: true,
                  dots: true,
                  arrows: false,
                  autoplay: true,
                }
              },
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true,
                  arrows: false,
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  dots: true,
                  arrows: false
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: true,
                  arrows: false
                }
              }
        ]
    });


    $('.header-inner__menu__btn').on('click', function(){
      $('.header-inner__menu__list').slideToggle();
    });

});