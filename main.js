const box = document.querySelector('article');

//함수를 호출할때 인수를 전달해야 되는 경우 한번더 화살표함수로 wrapping해서 정의형태로 변환
//box.addEventListener('click', () => changeStyle(box, 'background-color', 'orange'));
box.addEventListener('click', () => getStyle(box, 'background-color'));

//미션 - 해당함수를 범용적으로 쓰기위해서 안쪽의 상수값들을 호출할때 파라미터로 전달
function changeStyle(selector, key, color) {
	selector.style[key] = color;
}

//js는 html, js외에는 접근권한이 없으므로 css에 기술되어 있는 스타일값을 자스고 가져오는 것이 불가
//해결방법: 이미 css에 의해서 스타일이 적용되어 렌더링완료되 화면을 다시 분석해서 연산한후 해당 반환값을 추출
//css에 적용되어 있는 스타일값을 구할때는 getComputedStyle 활용
function getStyle(selector, key) {
	console.log(getComputedStyle(selector)[key]);
}
