// 전역 실행 컨텍스트의 스코프 체인
var var1 = 1;
var var2 = 2;

console.log(var1);
console.log(var2);

function func(){
    var var1 = 10;
    var var2 = 20;
    console.log(var1);
    console.log(var2);
}
func();

var value = "value1";

function printFunc(){
    var value = "value2";

    function printValue(){
        return value;
    }

    console.log(printValue());
}

printFunc();

// versus

var value2 = "value1";
function printValue2(){
    return value;
}

function printFunc2(func){
    var value = "value2";
    console.log(func());
}

printFunc2(printValue2);

// with 구문

var y = {x:5};

function withExamFunc() {
    var x = 10;
    var z;

    with(y) {
        z = function() {
            console.log(x);
        }
    }
    z();
}
withExamFunc();

// 호이스팅

//foo(); 
bar();

var foo = function(){
    console.log("foo and x = " + x);

}; // 표현식은 활성 객체 생성 이후에 실행되므로 foo 값은 foo() 호출 시엔 undefined

function bar(){
    console.log("bar and x = " + x);
}

var x = 1;