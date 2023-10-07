const lis = document.querySelectorAll('li');
console.log(lis);
//querysSelectorAll로 반환받은 요소들은 유사배열
//유사배열은 배열은 아니지만 제한적으로 배열기능을 쓸수 있음
//Array.from() : 유사배열을 순수배열로 변환해서 변환
Array.from(lis).map((li) => console.log(li));
