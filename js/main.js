
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 2500,
    },
    speed: 800
  });

  
  $('.ov_poster').find('img').bind('mouseover',function(){
    $(this).css('transform','scale(1.1)');
  })

  $('.ov_poster').find('img').bind('mouseout',function(){
    $(this).css('transform','scale(1)');
  })

  $('.ov_poster').children('p').bind('mouseover',function(){
    $(this).css('opacity', '1').css('transform','scale(1.1)')
  })

  $('.ov_poster').children('p').bind('mouseout',function(){
    $(this).css('opacity', '0').css('transform','scale(1.1)')
  })
