// 객체 리터럴 방식
var foo = {
    name : 'foo',
    major : 'computer science'
}

// 객체 프로퍼티 읽기
console.log(foo.name);
console.log(foo['name']);
console.log(foo.nickname);

// 객체 프로퍼티 갱신
foo.major = 'electronics engineering';
console.log(foo.major);
console.log(foo['major']);

// 객체 프로퍼티 동적 생성
foo.age = 30;
console.log(foo.age);

// 대괄호 표기법만을 사용해야 하는 경우
foo['full-name'] = 'foo bar'; // 프로퍼티가 '-' 연산자가 있는 표현식인 경우
console.log(foo['full-name']);
console.log(foo.full);

// Note : undefined vs not defined
// 전자는 선언되었으나 값이 할당되지 않은 경우, 후자는 아예 선언조차 되지 않음 -> 에러