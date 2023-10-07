/*
아래와 같은 경우는 돔을 생성하기 전에 이벤트 연결을 시도하기 때문에 오류발생
하지만, 실제 작업을 하다보면 동적 돔이 생성되기 전에 미리 이벤트를 연결해야될 경우가 많음
이때는, 이벤트 위임 처리 (Event Delegate)
const link = document.querySelector('article a');

link.addEventListener('click', (e) => {
	e.preventDefault();
	console.log('click')
});
*/

document.body.addEventListener('click', (e) => {
	//실제 화면에서 이벤트가 발생한 대상을 지칭
	// console.log('e.target', e.target);
	//코드 구문상에서 이벤트가 연결된 선택자를 지칭
	// console.log('e.currentTarget', e.currentTarget);

	// console.dir(e.target);
	if (e.target.nodeName === 'A') console.log('a clicked');
});

createDOM();

function createDOM() {
	const article = document.createElement('article');
	const a = document.createElement('a');
	const href = document.createAttribute('href');
	href.value = '#';
	a.setAttributeNode(href);
	a.innerText = 'link';
	console.log(a);

	article.append(a);
	document.body.append(article);
}
