//Dom의 속성값 가져오기
const link = document.querySelector('a');
link.getAttribute('target');
console.log(link.getAttribute('target'));

//DOM의 속성값 변경하기
//link.setAttribute('target', '_blank');

const attrInfo = [{ href: 'http://www.nate.com' }, { target: '_blank' }, { title: '네이트로 이동' }, { text: '네이트' }];

//한번에 여러가지 속성을 변경해주는 함수
const changeAttr = (selector, info) => {
	info.forEach((data) => {
		const key = Object.keys(data)[0]; //각 객체의 속성명
		const value = Object.values(data)[0]; //각 객체의 속성값
		selector.setAttribute(key, value);
		if (key === 'text') selector.innerText = value;
	});
};

changeAttr(link, attrInfo);
