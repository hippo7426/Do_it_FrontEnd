var Person = function(arg) {
    var name = arg?arg : "Jun";

    this.getName = function() {
        return name;
    }

    this.setName = function(arg){
        name = arg;
    }

};

var me = new Person();
console.log(me.getName());
me.setName("iamhjoo");
console.log(me.getName());
console.log(me.name);

// 

var Person2 = function(arg) {
    var name = arg ? arg : "Jun";

    return {
        getName : function() {
            return name;
        },

        setName : function() {
            name = arg;
        }
    };
}

var me = Person2(); // or var me = new Person2();
console.log(me.getName());

// 클로저를 사용했음에도 참조를 반환하는 객체 배열 같은 경우는 외부 접근이 가능
var ArrCreate = function(arg){
    var arr = [1,2,3];

    return {
        getArr : function(){
            return arr;
        }
    };
}

var obj = ArrCreate();
var arr = obj.getArr();
arr.push(5);
console.log(obj.getArr());

// 객체를 반환해야 할 때는 깊은 복사 (재귀 호출) 사용

// Person2 를 통해 생성된 객체는 Person2 함수 객체의 프로토타입에 접근할 수 없다
// 그렇게 되면 상속 기능 구현에 용이하지 않기 때문에 객체 대신 함수를 반환하자

var Person3 = function(arg){
    var name = arg?arg : "Jun";
    
    var Func = function(){
    };
    Func.prototype = {
        getName : function(){
            return name;
        },

        setName : function(arg){
            name = arg;
        }
    };

    return Func;
}();

//즉시 실행함수로 Person3 = Func 참조
var me3= new Person3(); // var me3 = new Func();
console.log(me3.getName());
