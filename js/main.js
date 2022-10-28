ov_text
ov_poster

/* 1. PC버전 서브메뉴 관련 */
const ovPoster = document.querySelector('.ov_poster')
const ovText = document.querySelectorAll('.ov_text')

// 마우스 오버 시 하위 메뉴 보이기
ovPoster.addEventListener('mouseover', () => {
    ovText.style.display = 'block';                            // 마우스 오버시 panel 나타냄
});

// 마우스 치울 때 하위 메뉴 숨기기
ovPoster.addEventListener('mouseout', () => {
    ovText.style.display = 'none';                             // 마우스 아웃 시 panel 숨기기
});