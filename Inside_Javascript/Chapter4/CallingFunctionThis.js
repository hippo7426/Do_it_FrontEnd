// 함수 형식에 맞춰 인자를 전달하지 않아도 호출 가능
function func(arg1, arg2) {
    console.log(arg1, arg2);
}

func(); // 
func(1);
func(1, 2);
func(1, 2, 3);

// arguments 객체
function add(a, b) {
    console.dir(arguments);
    return a + b;
}

console.log(add(1));
console.log(add(1, 2));
console.log(add(1, 2, 3));

function sum() {
    var result = 0;

    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }

    return result;
}

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5, 6));

// 메서드 호출 사용 시 this 바인딩
var myObject = {
    name: 'foo',
    sayName: function () {
        console.log(this.name);
    }
};

// oherObject 객체 생성
var otherObject = {
    name: 'bar'
};

otherObject.sayName = myObject.sayName;

myObject.sayName();
otherObject.sayName();

// 함수를 호출할 때 this 바인딩
var test = "this is test";
console.log(window.test);

var sayFoo = function () {
    console.log(this.test);
};

sayFoo();

// 내부 함수의 this 바인딩 동작을 보여주는 예제 코드
var value = 100;
var myObject2 = {
    value: 1,
    func1: function () {
        this.value += 1;
        console.log('func1() called. this.value : ' + this.value);

        func2 = function () {
            this.value += 1;
            console.log('func2() called. this.value : ' + this.value);

            func3 = function () {
                this.value += 1;
                console.log('func3() called. this.value : ' + this.value);
            }

            func3();
        }
        func2();
    }
};
myObject2.func1();

// 내부 함수의 this 바인딩 문제를 해결
var value2 = 100;

var myObject3 = {
    value: 1,
    func1: function () {
        var that = this;
        this.value += 1;
        console.log('func1() called. this.value : ' + this.value);

        func2 = function () {
            that.value += 1;
            console.log('func2() called. this.value : ' + that.value);

            func3 = function () {
                that.value += 1;
                console.log('func3() called. this.value : ' + that.value);
            }

            func3();
        }
        func2();
    }
};
myObject3.func1();

// 생성자 함수의 동작 방식
var Person = function (name) {
    this.name = name;
};

var foo = new Person('foo');
console.log(foo.name);

// 객체 리터럴 방식 vs 생성자 함수 방식

var foo2 = {
    name: 'foo',
    age: 35,
    gender: 'man'
};
console.dir(foo2);

function Person2(name, age, gender, position) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

var bar = new Person2('bar', 33, 'woman');
console.dir(bar);

// new를 붙이지 않고 생성자 함수 호출 시의 오류
var qux = Person2('qux', 20, 'man');
console.log(qux);

console.log(window.name);
console.log(window.age);
console.log(window.gender);

// 강제로 인스턴스 생성하기

function A(arg) {
    if (!(this instanceof A))
        return new A(arg);
    this.value = arg ? arg : 0;
}

var a = new A(100);
var b = A(10);

console.log(a.value);
console.log(b.value);
// console.log(global.value); // ERROR : UNDEFINED

// apply() 메서드를 이요한 명시적인 this 바인딩
function Person3(name, age, gender){
    this.name = name;
    this.age = age,
    this.gender = gender;
}

var foo3 = {};

Person3.apply(foo3, ['foo', 30, 'man']);
console.dir(foo3);

// apply() 메서드를 활용한 arguments 객체의 배열 표준 메서드 slice() 활용 코드
function myFunction() {
    console.dir(arguments);


// arguments.shift(); // ERROR

var args = Array.prototype.slice.apply(arguments);
console.dir(args);
}

myFunction(1,2,3);

// return 문 없는 일반 함수의 리턴값
var noReturnFunc = function() {
    console.log('This function has no return Statement');
};

var result = noReturnFunc();
console.log(result);

// 생성자 함수에서 명시적으로 객체를 리턴했을 경우
function Person4(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;

    return {name:'bar', age:20, gender:'woman'};
}

var foo4 = new Person4('foo', 30, 'man');
console.dir(foo4);

// 생성자 함수에서 명시적으로 기본 타입 값을 리턴했을 경우
function Person5(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;

    return 100; // 기본값 : 숫자, 문자열 , Boolean

}

var foo5 = new Person5('foo', 30, 'man');
console.log(foo5);