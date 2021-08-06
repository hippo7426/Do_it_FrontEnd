var subClass = function () {
    var F = function () { };

    var subClass = function (obj) {
        var parent = this === window ? Function : this;


        var child = function () {
            var _parent = child.parent;

            if (_parent && _parent != Function) {
                _parent.apply(this, arguments);
            }

            if (child.prototype._init) {
                child.prototype._init.apply(this, arguments);
            }
        };

        F.prototype = parent.prototype;
        child.prototype = new F();
        child.prototype.constructor = child;
        child.parent = parent;
        child.subClass = arguments.callee;

        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                child.prototype[i] = obj[i];
            }
        }

        return child;
    }
    return subClass;
}();

 var person_obj = {
     _init : function() {
         console.log("person init");
     },

     getName : function(){
         return this._name;
     },

     setName : function(name){
         this._name = name;
     }
 };

 var student_obj = {
     _init : function() {
         console.log("student init");
     },

     getName : function(){
         return "Student Name : " + this._name;
     }
 }

 var Person = subClass(person_obj);
 var person = new Person();

 person.setName("Jun");
 console.log(person.getName());

 var Student = Person.subClass(student_obj);
 var student = new Student();
 student.setName("hsj");
 console.log(student.getName());

// -------------------------------------------------------------------------------------------------

// var person = function(arg){
//     var name = undefined;

//     var Func = function(){}
//     Func.prototype = {
//         _init : function(arg) {
//             name = arg ? arg : "Jun";
//         },
//         getName : function(){
//             return name;
//         },
//         setName : function(arg){
//             name = arg;
//         }

//     };
//     return Func;
// }();

// var student_obj = function(){
    
//     var Func = function(){}
//     Func.prototype={
     
//         getName : function(){
//             return name + "!";
//         }
//     };

//     return Func;

// }();

// Person = subClass(person_obj);
// var iamhjoo = new Person();
// console.log(iamhjoo.getName());

// Student = Person.subClass(student_obj.prototype);
// var student = new Student("student");
// console.log(student.getName());

// Q1. 자바스크립트의 상속 & 캡슐화는 private 밖에 안되는것인가? protected 는 불가능한건가?