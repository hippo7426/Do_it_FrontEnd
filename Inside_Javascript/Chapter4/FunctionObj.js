// 함수도 객체다
function add(x,y){
    return x+y;
}

add.result = add(3,2);
add.status = 'OK';

console.log(add.result);
console.log(add.status);

// 변수나 객체의 프로퍼티에 함수를 할당
var foo = 100;
var bar = function () { return 100;}
console.log(bar());

var obj = {};
obj.baz = function(){return 200;}
console.log(obj.baz());

// 함수를 다른 함수의 인자로 넘김
var foo2 = function (func) {
    func();
};

foo2 (function(){
    console.log('Function can be used as the argument.');
});

// 함수를 리턴하는 함수
var foo3 = function() {
    return function (){
        console.log('this function is the return value.')
    };
};

var bar = foo3();
bar();

// add() 함수 개체 프로퍼티를 출력
function add2 (x,y) {
    return x+y;
}

console.dir(add2);

// 함수 객체의 length 프로퍼티 : 정상적인 실행 시 인자의 개수
function func0(){

}

function func1(x){
    return x;
}

function func2(x,y){
    return x+y;
}

console.log('func0.length - ' + func0.length);
console.log('func1.length - ' + func1.length);
console.log('func2.length - ' + func2.length);

// 함수 객체와 프로토타입 객체와의 관계
function myFunction(){
    return true;
}

console.dir(myFunction.prototype);
console.dir(myFunction.prototype.constructor);