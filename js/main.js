// $(function () {

//   $('.header-slider').slick({
//     arrows: false,
//     vertical: true,
//     dots: true,
//     dotsClass: 'header-dots',
//     autoplay: 2000
//   });

//   // $('.header__burger').on('click', function () {
//   //   $('.header__list').slideToggle();
//   // });  
// });

$(document).ready(function () {
	$('.slider').slick({ 
  centerMode: true,
  centerPadding: '160px',
  slidesToShow: 1,
   slidesToScroll: 1,
   variableWidth: true,
   arrows: false,

	});
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});