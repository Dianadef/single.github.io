$(function(){
  $('.slider__inner').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<img class="slider__arrow slider__arrow-left" src="images/slider/l.svg" alt="arrow-left">',
    nextArrow: '<img class="slider__arrow slider__arrow-right" src="images/slider/r.svg" alt="arrow-right">',
    responsive: [
       {
         breakpoint: 1300,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1,
         }
       },
       {
         breakpoint: 990,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
         }
       },
       {
         breakpoint: 560,
         settings: {
           arrows: false,
           slidesToShow: 1,
           slidesToScroll: 1,
         }
       }
     ]
  });
  
  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('active');
  });
});