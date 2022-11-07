$('.blog_article').find('img').bind('mouseover',function(){
  $(this).css('filter','none');
})

    $('.blog_article').find('img').bind('mouseout',function(){
  $(this).css('filter', 'grayscale(1)');
})