//for of : 문자열을 분리, 반복
const text = 'CHINGKA';
for (let letter of text) console.log(letter);

//for in : 객체의 key를 반복
const student = {
	name: 'lily',
	age: 25,
	address: 'sejong',
	hobby: 'pilates',
};

for (let key in student) {
	console.log(key);
	console.log(student[key]);
}

//객체의 key, value값을 배열로 반환
const keys = Object.keys(student);
console.log(keys);

const values = Object.values(student);
console.log(values);

//map함수와 조합해서 객체의 value값을 치환
keys.map((el) => console.log(student[el]));
