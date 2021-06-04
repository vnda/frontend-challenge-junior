$(function () {
  'use strict';

  

  
  // Start navbar 
  (function () {

    $('.swiper-slider').hide();

    $(window).load(function(){
      $('.swiper-slider').show();

    
  
    $('.loader').hide();
    
    AOS.init();  

  $('.navigation').hide();
    $('#nav').click(function() {
      $(this).toggleClass('open')
      $('.navigation').toggle();
    
    });

    var smallScreen = window.matchMedia("(min-width: 640px)");
    if (smallScreen.matches){
      $('.navigation').hide();
    }

    if ($(window).width() >= 640){
          
  $('.navigation').hide();
    }
    
    var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        autoHeight: true
      },
 
    });
  });   
  }());
});
