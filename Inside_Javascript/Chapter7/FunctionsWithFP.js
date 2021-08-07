Function.prototype.bind = function (oThis) {
    if (typeof this !== 'function') {
        // ECMAScript 5 내부 IsCallable 함수와
        // 가능한 가장 가까운 것
        throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var aArgs = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP = function () { },
        fBound = function () {
            return fToBind.apply(this instanceof fNOP
                ? this
                : oThis,
                aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    if (this.prototype) {
        // Function.prototype은 prototype 속성이 없음
        fNOP.prototype = this.prototype;
    }
    fBound.prototype = new fNOP();

    return fBound;
};
//
// 커링 (currying) : 특정 함수에서 정의된 인자의 일부를 고정시키고, 나머지를 인자로 받는 새로운 함수를 만드는 것
function calculate(a, b, c) {
    return a * b + c;
}

function curry(func) {
    var args = Array.prototype.slice.call(arguments, 1);

    return function () {
        return func.apply(null, args.concat(Array.prototype.slice.call(arguments)));
    }
}

var new_func1 = curry(calculate, 1);
console.log(new_func1(2, 3));
var new_func2 = (curry(calculate, 1, 3));
console.log(new_func2(3));

function curry2(func) {
    var args = Array.prototype.slice.call(arguments, 1);

    return function () {
        var arg_idx = 0;
        for (var i = 0; i < args.length && arg_idx < arguments.length; i++)
            if (args[i] === undefined)
                args[i] = arguments[arg_idx++];
        return func.apply(null, args);

    }
}

var new_func = curry2(calculate, 1, undefined, 4);
console.log(new_func(3));

// bind
var print_all = function (arg) {
    for (var i in this) console.log(i + " : " + this[i]);
    for (var i in arguments) console.log(i + " : " + arguments[i]);
}

var myobj = { name: "zzoon" };
var myfunc = print_all.bind(myobj);
myfunc();

var myfunc1 = print_all.bind(myobj, "SJ", "others");
myfunc1("insider");

function Person(arg) {
    if (this.name == undefined) this.name = arg ? arg : "Jun";
    console.log("Name : " + this.name);
}

Person.prototype.setName = function (value) {
    this.name = value;
};

Person.prototype.getName = function () {
    return this.name;
};

var myobj = { name: "iamhjoo" };
var new_func = Person.bind(myobj);
new_func();

var obj1 = new new_func();
console.log(obj1.getName());
console.log(obj1 instanceof new_func);
console.log(obj1.name);

obj1.test = new_func;
obj1.test();

console.dir(obj1);
// https://stackoverflow.com/questions/5774070/mozillas-bind-function-question
// about fToBind.apply(this instanceof FNOP && oThis ? this : oThis, ~ )

// Wrapper
function wrap(object, method, wrapper) {
    var fn = object[method];
    return object[method] = function () {
        return wrapper.apply(this, [fn.bind(this)].concat(Array.prototype.slice.call(arguments)));
    };
}

Function.prototype.original = function (value) {
    this.value = value;
    console.log("value : " + this.value);
}

var mywrap = wrap(Function.prototype, "original", function (orig_func, value) {
    this.value = 20;
    orig_func(value);
    console.log("wrapper value : " + this.value);
});

var obj = new mywrap("zzoon");

// each
function each(obj, fn, args) {
    if (obj.length == undefined)
        for (var i in obj)
            fn.apply(obj[i], args || [i, obj[i]]);
    else
        for (var i = 0; i < obj.length; i++)
            fn.apply(obj[i], args || [i, obj[i]]);
    return obj;
};

each([1,2,3], function(idx, num) {
    console.log(idx + ": " + num);
});

var zzoon1 = {
    name : "jun",
    age : 30,
    sex : "Male"
};

each (zzoon1, function(idx, value){
    console.log(idx+": " + value);
})

// map
Array.prototype.map = function(callback) {
    var obj = this;
    var value, mapped_value;
    var A = new Array(obj.length);

    for (var i=0; i<obj.length; i++){
        value = obj[i];
        mapped_value = callback.call(null, value);
        A[i] = mapped_value;
    }

    return A;
};

var arr = [1,2,3];
var new_arr = arr.map(function(value) {
    return value * value;
});

console.log(new_arr);

// reduce
Array.prototype.reduce = function(callback, memo) {
    var obj = this;
    var value, accumulated_value = 0;

    for (var i=0; i<obj.length; i++){
        value = obj[i];
        accumulated_value = callback.call(null, accumulated_value, value);
    }

    return accumulated_value;
};

var accumulated_val = arr.reduce(function(a,b) {
    return a + b*b;
});

console.log(accumulated_val);