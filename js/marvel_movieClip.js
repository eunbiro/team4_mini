// 모바일 햄버거 버튼 클릭 시
$(".menu__still").click(function() {
  $(".sub__movieclip").hide()       // display : none
  $(".sub__artwork").hide()       // display : none
  $(".sub__stillshot").show()           // display : block

  // $("#clip__content").empty()           // #mobile_menu 하위 태그 초기화

  // var nav = $(".main__stillshot").clone()

  // $("#clip__content").append(nav)       // append : 선택한 요소 하위 태그로 삽입
  // $("#clip__content").show()
})

$(".menu__clip").click(function() {
  $(".sub__stillshot").hide()
  $(".sub__artwork").hide()       // display : none
  $(".sub__movieclip").show()

  // $("#clip__content").empty()           // #mobile_menu 하위 태그 초기화

  // var nav = $(".main__movieclip").clone()

  // $("#clip__content").append(nav)       // append : 선택한 요소 하위 태그로 삽입
  // $("#clip__content").show()
})

$(".menu__art").click(function() {
  $(".sub__stillshot").hide()
  $(".sub__movieclip").hide()       // display : none
  $(".sub__artwork").show()

  // $("#clip__content .con").empty()           // #mobile_menu 하위 태그 초기화

  // var nav = $(".main__artwork").clone()

  // $("#clip__content").append(nav)       // append : 선택한 요소 하위 태그로 삽입
  // $("#clip__content").show()
})

// const tabList = document.querySelectorAll(".clip__menu .menu__list > li");

// for (var i = 0; tabList.length; i++) {
//   tabList[i].querySelector(".btn").addEventListener('click', function(e) {
//     e.preventDefault();
//     for (var j = 0; j < tabList.length; j++) {
//       tabList[j].classList.remove('tab__on');
//     }
//     this.parentNode.classList.add('tab__on')
//   });
// }