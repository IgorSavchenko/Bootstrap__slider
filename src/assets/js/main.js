$(window).on("load", function(){

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  // open burger menu
    $(".burger").click(function(){
  	   $(this).toggleClass("active");
       $(".nav").toggleClass("active");
  	});
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  //navigation menu links
  $(".carousel-nav a").click(function(){
    $(".carousel-nav a").removeClass("active");
    $(".burger").removeClass("active");
    $(".nav").removeClass("active");
    $(this).toggleClass("active");
	});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  // initialize carousel manually
  $('.carousel').carousel();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  // carousel content changing
  $('.carousel').on( 'slid.bs.carousel' , function() {
      $('.carousel-subtitle').text($('.item.active h2').html());
      $('.carousel-price span').text($('.item.active p').html());
      $('.carousel-description').text($('.item.active span').html());
  });

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

});
