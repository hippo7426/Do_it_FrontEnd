// 클로저의 개념
function outerFunc(){
    var x = 10;
    var innerFunc = function() {console.log(x);}
    return innerFunc;
}

var inner = outerFunc;
inner();

function outerFunc2(arg1, arg2) {
    var local = 8;
    function innerFunc(innerArg){
        console.log((arg1+arg2)/(innerArg+local));
    }
    return innerFunc;
}

var exam1 = outerFunc2(2,4);
exam1(2);

// 클로저의 활용
// 특정 함수에 사용자가 정의한 객체의 메소드 연결하기
function HelloFunc(){
    this.greeting = "hello";
}

HelloFunc.prototype.call = function(func){
    func ? func(this.greeting) : this.func(this.greeting);
}

var userFunc = function(greeting){
    console.log(greeting);
}

var objHello = new HelloFunc();
objHello.func = userFunc;
objHello.call();

function saySomething(obj, methodName, name){
    return (function(greeting) {
        return obj[methodName](greeting,name);
    });
}

function newObj(obj, name) {
    obj.func = saySomething(this, "who", name); 
    return obj;
}

// saySomething 함수의 실행 컨텍스트의 변수 객체의 argumetns 프로퍼티들 중
// obj : this 의 경우 이 때의 this는 생성된 newObj 객체를 가리킨다. 그래서 클로저인 function(greeting){} 함수의
// 2순위 scope인 saySomething의 obj[methodName]이 새로 생성된 newObj 객체의 (반환되지 않기 때문에 부를 이름 없음)
// [[Prototype]] 이 참조하는 newObj.prototype.who 를 프로토타입 체이닝에 의해 참조하게 되는것
// 그렇기 때문에 function(greeting){}은 closure 라고 할 수 있다.

newObj.prototype.who = function(greeting, name){
    console.log(greeting+" " + (name||"everyone"));

}

var obj1 = new newObj(objHello, );
obj1.call();

// 함수의 캡슐화
// Before capsulization
var buffArr = [
    'I am ',
    '',
    '. I live in ',
    '',
    '. I\'m ',
    '',
    ' years old.'
];

function getCompletedStr(name, city, age) {
    buffArr[1] = name;
    buffArr[3] = city;
    buffArr[5] = age;

    return buffArr.join('');
}

var str = getCompletedStr('zzoon', 'seoul', 16);
console.log(str);

// After capsulization
var getCompletedStr2 = (function(){
    var buffAr = [
        'I am ',
        '',
        '. I live in ',
        '',
        '. I\'m ',
        '',
        ' years old.'
    ];

    return (function(name, city, age){
        buffAr[1] = name;
        buffAr[3] = city;
        buffAr[5] = age;
        
        return buffAr.join('');

    });

})();

var str2 = getCompletedStr2('jun','seoul',16);
console.log(str2);

// setTimeou()에 지정되는 함수의 사용자 정의 : 자유 변수를 통한 인수 전달
function callLater(obj, a, b){
    return (function(){
        obj.sum= a+b;
        console.log(obj["sum"]);
    });
}

var sumObj = {
    sum:0
}

var func = callLater(sumObj, 1, 2);
setTimeout(func,500);

// Closure 사용시 주의사항
// 클로저의 프로퍼티값이 쓰기 가능하므로 여러 번 호출하면서 그 값이 변할 수 있음
function outerFunc3(argNum){
    var num = argNum;
    return (function(x){
        num+=x;
        console.log('num: ' + num);
    });
}
var exam2 = outerFunc3(40);
exam2(5);
exam2(-10);

// 하나의 클로저(동일한 환경을 참조하는)가 여러 함수 객체의 스코프 체인에 들어가 있는 경우
function funC(){
    var x = 1;
    return {
        func1 : function(){ console.log(++x);},
        func2 : function(){console.log(-x);}
    };
}

var exam3 = funC();
exam3.func1();
exam3.func2();

// 루프 안에서 클로저를 활용할 때는 주의하자 : 의도한 생성 환경에서 변경사항이 존재 할수 있음
function countSeconds(howMany){
    for (var i=1; i<=howMany; i++){
        (function (currentI){
            setTimeout(function(){
                console.log(currentI);
            }, currentI * 1000);
        }(i));
    }
}; //setTimeout 함수를 감싸는 외부 함수가 없다면 익명 함수가 참조하는 값이 이미 howMany로 고정되버린다.

countSeconds(3);