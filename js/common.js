//버튼 업다운

const $btnUp = document.querySelector(".button__up");
const $btnDown = document.querySelector(".button__down");

$btnUp.onclick = () => {
  $('html,body').animate({ scrollTop: 0 }, 500);
  // window.scrollTo({top: 0, behavior: "smooth"});
  console.log(1)
}

$btnDown.onclick = () => {
	$("html, body").animate({ scrollTop: $(document).height() }, 500);
  console.log(2)
};
