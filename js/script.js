$(function(){

  var imgHeight = $('.main-img').outerHeight();
  var bgHeight = $('.main-copy').outerHeight();

  $('.burger-btn').on('click',function(){
    if($(window).scrollTop() < bgHeight -50){
      $('.burger-btn').toggleClass('close');
      $('.nav-wrapper').fadeToggle(500);
      $('.burger-musk').fadeToggle(300);
      $('body').toggleClass('noscroll');
    }else{
      $('.bar').toggleClass('black');
      $('.menu').toggleClass('black');
      $('.burger-btn').toggleClass('close');
      $('.nav-wrapper').fadeToggle(500);
      $('.burger-musk').fadeToggle(300);
      $('body').toggleClass('noscroll');
    }
  });

  $(window).on('load scroll',function(){
    if($(window).scrollTop() < imgHeight -50 ){
      $('.site-title a').removeClass('black');
      $('.site-title a .header-svg').removeClass('black');
    }else{
      $('.site-title a').addClass('black');
      $('.site-title a .header-svg').addClass('black');
    }

    if($(window).scrollTop() < bgHeight -50 ){
      $('.bar').removeClass('black');
      $('.menu').removeClass('black');
    }else{
      $('.bar').addClass('black');
      $('.menu').addClass('black');
    }
  });
});