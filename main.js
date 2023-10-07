//비구조화할당, 구조분해할당 destructuring
//배열이나 객체같은 반복적인 값을 한번에 변수로 추출할 때 유용

const colors = ['red', 'green', 'blue'];

/*
const color1 = colors[0];
const color2 = colors[1];
const color3 = colors[2];
*/
const [color1, color2, color3] = colors;
console.log(color2);

//특정 자식요소 dom을 한번에 변수 초기화할때 유용
const section = document.querySelector('section');
const [h1, div, p] = section.children;

//객체의 각 property를 비구조화할당 가능
//객체는 property의 key값으로만 변수로 추출
const student1 = {
	name: 'daivd',
	age: 20,
	address: 'seoul',
};

const student2 = {
	name: 'boram',
	age: 30,
};

const age = 100;
//key값을 활용해서 값을 추출하되 다른 변수명으로 치환가능 (propery:변수명)
const { name, age: age2, address } = student1;
console.log(age2);

const inform = ({ name, age, address = '불명' }) => {
	console.log(`해당학생의 이름은 ${name}이고 나이는 ${age}이며 사는 곳은 ${address}입니다.`);
};

inform(student2);
