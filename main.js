/*
	static DOM (HTML태그를 브라우저가 해석해서 생성하는 객체)
	- 브라우저 리소스 활용
	- 해당요소를 동적으로 제어하려면 브라우저 리소스를 불필요하게 낭비

	dynamic DOM (JS로 메모리단에서 동적으로 생성하는 객체)
	- 브라우저 리소스활용 안함
	- 실제로 브라우저 리소스를 활용하는게 아니기 때문에 동적인 변화의 기회비용이 적음
*/
//아래가 선생님

const article = document.createElement('article');
const a = document.createElement('a');
const href = document.createAttribute('href');
href.value = '#';
a.setAttributeNode(href);
a.innerText = 'link';
console.log(a);

article.append(a);
document.body.append(article);
//append 메소드는 인수로 문자열을 받을 수 없고 무조건
//document.createElement로 생성한 노드만 전달가능

//아래가 보통 쓰는 것
/*
document.body.innerHTML = `
	<article>
		<a href="#">link</a>
	</article>
`;
*/
//innerHTML은 선택자에서 문자열형태로 돔요소를 편하게 생성할 수 있음
//단점 기존 선택자안의 내용을 비우고 변경하는 형식이기 때문에
//기존 선택자 안의 DOM구조를 유지하면서 추가 돔을 생성하는게 불가
