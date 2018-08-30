$(window).on("load", function(){

  // open burger menu
  $(".burger").click(function(){
	   $(this).toggleClass("active");
     $(".navigation__menu").toggleClass("active");
	});

  //navigation menu links
  $(".carousel-nav a").click(function(){
    $(".carousel-nav a").removeClass("active");
	   $(this).toggleClass("active");
	});

  // initialize carousel manually
  $('.carousel').carousel();
  // carousel content changing
  $('.carousel').on( 'slid.bs.carousel' , function() {
    if ( $('.item--1').hasClass('active') ) {
      $('.carousel-subtitle').text('Для зала');
      $('.carousel-price span').text('50');
    };
    if ( $('.item--2').hasClass('active') ) {
      $('.carousel-subtitle').text('Для детской');
      $('.carousel-price span').text('60');
    };
    if ( $('.item--3').hasClass('active') ) {
      $('.carousel-subtitle').text('Для кухни');
      $('.carousel-price span').text('30');
    };
    if ( $('.item--4').hasClass('active') ) {
      $('.carousel-subtitle').text('Для спальни');
      $('.carousel-price span').text('40');
    };
  });

});
