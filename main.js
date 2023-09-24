const menus = document.querySelectorAll('ul li');
const boxs = document.querySelectorAll('section article');

menus.forEach((menu, idx) => {
	//모든 그릅요소를 반복돌면서 반복도는 요소와 그 순번을 내부에서 활용
	menu.addEventListener('click', () => {
		//현재 반복도는 버튼 클릭했을때 현재의 순번을 activation함수에 활성화시킬 그룹요소와 같이 인수로 전달
		activation(menus, idx);
		activation(boxs, idx);
	});
});

//인수로 활성화시킬 그룹배열, 활성화순번을 파라미터를 통해서 전달받음
function activation(targetArr, activeIndex) {
	//첫번째 인수로 받은 그룹요소를 모두 반복돌면서 일단은 초기화
	targetArr.forEach((el) => el.classList.remove('on'));
	//그룹요소에서 두번째 인수로 받은 활성화 순번의 요소만 활성화
	targetArr[activeIndex].classList.add('on');
}
