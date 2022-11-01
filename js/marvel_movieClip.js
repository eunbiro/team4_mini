// 탭메뉴 클릭 시
$(".menu__still").click(function() {
  $(".main__movieclip").hide()            // display : none
  $(".main__artwork").hide()              // display : none
  $(".main__stillshot").show()            // display : block
  $(".menu__still").css("border-bottom", "0")
  $(".menu__clip").css("border-bottom", "1px solid #666")
  $(".menu__art").css("border-bottom", "1px solid #666")

})

$(".menu__clip").click(function() {
  $(".main__stillshot").hide()
  $(".main__artwork").hide()
  $(".main__movieclip").show()
  $(".menu__clip").css("border-bottom", "0")
  $(".menu__still").css("border-bottom", "1px solid #666")
  $(".menu__art").css("border-bottom", "1px solid #666")
})

$(".menu__art").click(function() {
  $(".main__stillshot").hide()
  $(".main__movieclip").hide()
  $(".main__artwork").show()
  $(".menu__art").css("border-bottom", "0")
  $(".menu__clip").css("border-bottom", "1px solid #666")
  $(".menu__still").css("border-bottom", "1px solid #666")
})
