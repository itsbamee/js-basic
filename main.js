const box = document.querySelector('article');

console.dir(box);

//box.onclick = () => console.log('엄청 중요한 작업');
//box.onclick = () => console.log('쓸데없는 작업');

//돔의 이벤트 property에 직접 핸들러함수를 등록하면 추후에 중요핸들러를 덮어쓰기 할수도 있으므로 비권장
//addEventListener라는 메서드를 활용해서 이벤트 연결
box.addEventListener('click', () => console.log('엄청중요한작업'));
box.addEventListener('click', () => console.log('쓸데없는작업'));
