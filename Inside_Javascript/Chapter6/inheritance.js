// 프로토타입을 이용한 상속
function create_object(o){
    function F(){}
    F.prototype = o;
    return new F();
}

var person = {
    name : "zzoon",
    getName : function(){
        return this.name;
    },

    setName : function(arg){
        this.name = arg;
    }

};

var student = create_object(person);
student.setName("me");
console.log(student.getName());

// 자식 클래스의 확장 with 'extend()' 함수

function extend(obj, prop){
    if (!prop) {prop = obj; obj = this;}
    for (var i in prop) obj[i] = prop[i];
    return obj;
}

var added = {
    setAge : function(age){
        this.age = age;
    },

    getAge : function(){
        return this.age;
    }
};

extend(student, added);

student.setAge(25);
console.log(student.getAge());

// 클래스 기반의 상속
function Person(arg){
    this.name = arg;
} // Person 함수가 클래스 역할을 한다.

Person.prototype.setName = function(value){
    this.name = value;
};

Person.prototype.getName = function(){
    return this.name;
};

function Student(arg){
    Person.apply(this, arguments); // apply() 메소드로 부모 클래스 호출
}

var you = new Person("iamSJ");
Student.prototype = you;

var me = new Student("Jun");
// me.setName("Jun"); 자식 클래스 생성시 부모 클래스도 호출되어야 함
console.log(me.getName());

// 클래스 간 중개 객체 생성
function Person4(arg) {
    this.name = arg;
}

Function.prototype.method = function(name, func){
    this.prototype[name] = func;
};

Person4.method("setName", function(value){
    this.name = value;
});

Person4.method("getName", function(){
    return this.name;
});

function F() {};
F.prototype = Person4.prototype;
Student.prototype = new F();
Student.prototype.constructor = Student;
Student.super = Person4.prototype;

var mee = new Student();
mee.setName("zzoon");
console.log(mee.getName());
