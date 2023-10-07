const btns = document.querySelectorAll('li');

//es5 (화살표함수 안쓰고 function구문씀)

btns.forEach(function (btn) {
	console.log('forEach', this);
	btn.addEventListener(
		'click',
		function () {
			//function문 안쪽에서는 this객체가 생성됨
			//함수의 호출 위치에 따라서 this값이 변경됨
			console.log('event', this);
		}.bind('this') //코드블록 외부에서 내부 this값을 원하는 값으로 강제 고정, 외부 this값으로 내부 this 객체를 고정
	);
});

//es6
//화살표함수 안에는 this 객체가 생성되지 않기 때문에 undefined가 찍혀야 됨에도 불구하고 window 객체가 찍힘
//화살표 함수에서는 코드블록 안쪽에 참조할 this 객체가 없으면 상위 scope의 this 객체를 가져옴 (this가 없으니까 위로위로위로 올라가다 window를 찾음)
//type = module에서 undefined, defer에서는 window
/*
btns.forEach((btn) => {
	btn.addEventListener('click', () => {
		//this는 window 참조
		console.log(this);
	});
});
*/
