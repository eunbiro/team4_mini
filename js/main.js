
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
    $(this).parent().siblings('p').css('display', 'block');
  })

  $('.ov_poster').find('img').bind('mouseout',function(){
    $(this).css('transform','scale(1)');
    $(this).parent().siblings('p').css('display', 'none')
  })
