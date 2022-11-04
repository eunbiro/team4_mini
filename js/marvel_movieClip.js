// 탭메뉴 클릭 시
$('.menu_still').click(function () {
  $('.main_movieclip').hide(); // display : none
  $('.main_artwork').hide(); // display : none
  $('.main_stillshot').show(); // display : block
  $('.menu_still').css('border-bottom', '0');
  $('.menu_clip').css('border-bottom', '1px solid #666');
  $('.menu_art').css('border-bottom', '1px solid #666');
});

$('.menu_clip').click(function () {
  $('.main_stillshot').hide();
  $('.main_artwork').hide();
  $('.main_movieclip').show();
  $('.menu_clip').css('border-bottom', '0');
  $('.menu_still').css('border-bottom', '1px solid #666');
  $('.menu_art').css('border-bottom', '1px solid #666');
});

$('.menu_art').click(function () {
  $('.main_stillshot').hide();
  $('.main_movieclip').hide();
  $('.main_artwork').show();
  $('.menu_art').css('border-bottom', '0');
  $('.menu_clip').css('border-bottom', '1px solid #666');
  $('.menu_still').css('border-bottom', '1px solid #666');
});

lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
  disableScrolling: false,
  fitImagesInViewport: false,
});

$('.rank_like').click(function () {
  $('.recom_chk').hide;
  $('.rank_like').show;
});

$('.recom_chk').click(function () {
  $('.rank_like').hide;
  $('.recom_chk').show;
});
