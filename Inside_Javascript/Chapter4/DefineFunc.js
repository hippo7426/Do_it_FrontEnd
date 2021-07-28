// add() 함수 선언문
function add(x,y) {
    return x+y;
} // 세미콜론 없음

console.log(add(3, 4));

// add() 함수 표현식
var add2 = function (x, y) {
    return x + y;
}; // 세미콜론 있음

var plus = add2;

console.log(add2(3,4));
console.log(plus(3,4));

// 기명 함수 표현식의 함수 호출
var add3 = function sum(x,y){
    return x + y;
}

console.log(add3(3,4));
//console.log(sum(3,4)); // ERROR

// 함수 표현식으로 구현한 팩토리얼 함수 (재귀호출)
var factorialVar = function factorial(n){
    if (n<=1){
        return 1;
    }
    return n* factorial(n-1);
};

console.log(factorialVar(3));
// console.log(factorial(3)); // ERROR

// Function() 생성자 함수를 이용한 함수 생성 : 소스 분석 할때 상식
var add4 = new Function('x', 'y', 'return x + y');
console.log(add4(3,4));

// Hoisting
// 함수 선언문 방식과 호이스팅
add5(2,3);

function add5(x,y){
    return x+y;
}

add5(4,3);

// 함수 표현식 방식과 호이스팅
// add6(2,3); //ERROR

var add6 = function (x,y) {
    return x+y;
};

add6(3,4);