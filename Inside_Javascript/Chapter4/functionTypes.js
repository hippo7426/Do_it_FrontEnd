// 즉시 실행 함수 - 주로 초기화에 사용 ex) jQuery 라이브러리

(function (name) {
    console.log('this is the immediate function -> ' + name);
})('foo');


// 내부 실행 함수

function parent(){
    var a = 100;
    var b = 200;

    function child() {
        var b = 300;

        console.log(a);
        console.log(b);
    }
    child();
}

parent();
// child(); // ERROR

// 함수 스코프 외부에서 내부 함수 호출

function parent2(){
    var a = 100;
    var child = function(){
        console.log(a);
    }

    return child;
}

var inner = parent2();
inner(); // CLOSER

// 자신을 재정의 하는함수

var self = function(){
    console.log('a');
    return function(){
        console.log('b');
    }
}
self = self();
self();