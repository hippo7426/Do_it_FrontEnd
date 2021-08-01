// prototype 프로퍼티와 [[Prototype]] 링크 구분
function Person(name){
    this.name = name;
}

var foo = new Person('foo');

console.dir(Person);
console.dir(foo);


// 객체 리터럴 방식에서의 프로토타입 체이닝
var myObject = {
    name: 'foo',
    sayName : function(){
        console.log('My name is '+ + this.name);
    }
};

myObject.sayName();
console.log(myObject.hasOwnProperty('name'));
console.log(myObject.hasOwnProperty('nickname'));
//myObject.sayNickName(); // ERROR

// 생성자 함수 방식에서의 프로토타입 체이닝

function Person2(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
}

var foo2 = new Person2('foo', 30, 'tennis');

console.log(foo.hasOwnProperty('name'));
console.dir(Person2.prototype);

// String 기본 타입에 메서드 추가

String.prototype.testMethod = function() {
    console.log('This is the Test Method');
};

var str = 'this is the test';
str.testMethod();

console.dir(String.prototype);

// 프로토타입 객체의 동적 메세지 생성

//foo.sayHello(); // ERROR

Person.prototype.sayHello = function(){
    console.log('Hello');
}

foo.sayHello(); 

// 프로토타입 메서드와 this 바인딩

Person.prototype.getName = function() {
    return this.name;
}

console.log(foo.getName());
Person.prototype.name = 'person';
console.log(Person.prototype.getName());

// 프로토타입 객체 변경

console.log(Person.prototype.constructor);
console.log(foo.country);

Person.prototype = {
    country: 'korea'
};
console.log(Person.prototype.constructor);

var bar = new Person('bar');
console.log(foo.country);
console.log(bar.country);
console.log(foo.constructor);
console.log(bar.constructor);

// 프로토타입 체이닝과 동적 프로퍼티 생성
function Person3(name){
    this.name = name;
}

Person3.prototype.country = 'Korea';

var foo3 = new Person3('foo3');
var bar3 = new Person3('bar3');
console.log(foo3.country);
console.log(bar3.country);
foo3.country = 'USA';

console.log(foo3.country); // foo3 객체의 country 프로퍼티
console.log(bar3.country); // bar3 객체의 [[Prototype]] 인 Person3.prototype 객체의 country 프로퍼티