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

//객체의 key, value를 하나의 배열로 반환
const result = Object.entries(student);
console.log(result);
//배열반환값을 다시 비구조화할당으로 추출 (많이 쓰이는 사례는 아님, 외울필요는 없음 이해만!)
const [[key, value]] = result;
console.log(key);
console.log(value);
