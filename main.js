const section = document.querySelector('section');
const articles = section.querySelectorAll('article');
const btn = document.querySelector('.btn');

//부모요소를 기점으로 직계자식요소를 모두 탐색
const childEl = section.children;

//선택자를 기준으로 직계 부모요소 탐색
const parentEl = btn.parentElement;

//선택자를 기준으로 조상요소를 탐색
//const grandParentEl = btn.parentElement.parentElement;

//선택자를 기준으로 제일 가까운 부모요소를 탐색
const grandParentEl = btn.closest('body');

//선택자를 기준으로 이전 형제요소를 탐색
const prevEl = btn.previousElementSibling;

//선택자를 기준으로 다음 형제요소 탐색
const nextEl = btn.nextElementSibling;

//선택자를 기준으로 모든 형제요소 탐색
const sivlings = btn.parentElement;
console.log(nextEl);
