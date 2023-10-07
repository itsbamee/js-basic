//filer: 기존의 배열의 불변성을 유지하면서 특정조건에 부합되는 새로운 배열을 반환
//filer를 쓰는 실제 사례는 기존 배열값에서 특정 값을 제외한 나머지값을 반환받을 때 주로 사용

const colors1 = ['red', 'green', 'blue'];
const colors2 = colors1.filter((el) => el !== 'red');
console.log(colors1);
console.log(colors2);

const studentDB = [
	{ name: 'jin', age: 23, hobby: 'cooking' },
	{ name: 'emliy', age: 28, hobby: 'reading' },
	{ name: 'john', age: 24 },
];

//실제 데이터값에 출력되면 안되는 값(정상적이지 않은 값) 을 제외할 때 주로 쓰임
const result = studentDB.map((data) => data.hobby);
console.log(result);
const result2 = result.filter((data) => data !== undefined);
console.log(result2);
