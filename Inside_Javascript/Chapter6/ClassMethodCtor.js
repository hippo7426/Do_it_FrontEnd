function Person(arg) {
    this.name = arg;

    this.getName = function(){
        return this.name;
    }

    this.setName = function(value){
        this.name = value;
    }
}

var me = new Person("jun");
console.log(me.getName());

me.setName('SJ');
console.log(me.getName());

// 공통적으로 사용되는 getName 과 setName 함수가 중복생성되어 메모리 낭비 -> 수정 필요

function Person2(arg){
    this.name = arg;
}

Person2.prototype.getName = function(){
    return this.name;
}

Person2.prototype.setName = function(value){
    this.name = value;
}

var me2 = new Person2("me2");
var you = new Person2("you");
console.log(me2.getName());
console.log(you.getName());

// 메서드를 정의하는 방법 by 더글라스 크락포드

Function.prototype.method = function(name, func){
    if (!this.prototype[name]){
        this.prototype[name] = func;
    }
}

// 적용
function Person3(arg) {
    this.name = arg;
}

Person3.method("setName", function(value){
    this.name = value;
});

Person3.method("getName", function(){
    return this.name;
});

var me3 = new Person3("me");
var you3 = new Person3("you");
console.log(me3.getName());
console.log(you3.getName());