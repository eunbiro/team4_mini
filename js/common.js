//버튼 업다운

const $btnUp = document.querySelector(".button__up");
const $btnDown = document.querySelector(".button__down");

$btnUp.onclick = () => {
  window.scrollTo({top: 0, behavior: "smooth"});
}

$btnDown.click = () => {
	$("html, body").animate({ scrollTop: $(document).height() }, 500);
};
