const box = document.querySelector('article');

//함수를 호출할때 인수를 전달해야 되는 경우 한번더 화살표함수로 wrapping해서 정의형태로 변환
box.addEventListener('click', () => changeStyle(box, 'background-color', 'orange'));

//미션 - 해당함수를 범용적으로 쓰기위해서 안쪽의 상수값들을 호출할때 파라미터로 전달
function changeStyle(selector, key, color) {
	selector.style[key] = color;
}
