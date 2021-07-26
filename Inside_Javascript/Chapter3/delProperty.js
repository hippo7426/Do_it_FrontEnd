// 객체 리터럴 방식

var foo = {
    name:'foo',
    nickname:'babo'
};

console.log(foo.nickname);
delete foo.nickname;
console.log(foo.nickname);

delete foo; // delete 연산자는 프로퍼티만 삭제 가능, 객체 자체는 X
console.log(foo.name);