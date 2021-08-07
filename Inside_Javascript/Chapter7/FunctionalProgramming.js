// 함수형 프로그래밍의 개념
var f1 = function(input){
    var result;

    result = 1;
    return result;
}

var get_encrypted = function(func){
    var str = 'zzoon';

    return function(){
        return func.call(null, str);
    }
}

var encrypted_value = get_encrypted(f1)();
console.log(encrypted_value);

// 배열의 각 원소 총합 구하기
// 명령형 (Imperative) 프로그래밍

function sum(arr) {
    var len = arr.length;
    var i = 0, sum = 0;

    for (; i< len; i++){
        sum += arr[i];
    }

    return sum;
}

var arr = [ 1, 2, 3, 4];
console.log(sum(arr));

// 함수형 프로그래밍
function reduce(func, arr, memo) {
    var len = arr.length,
    i=0,
    accum = memo;

    for (; i<len; i++){
        accum = func(accum, arr[i]);
    }

    return accum;
}

var sumF = function(x, y){
    return x+y;
};

var multiply = function(x,y) {
    return x*y;
};

console.log(reduce(sumF, arr, 0));
console.log(reduce(multiply, arr, 1));

// Factorial
var fact = function(){
    var cache = {'0' : 1};
    var func = function(n) {
        var result = 0;

        if (typeof(cache[n]) === 'number') {
            result = cache[n];
        }else {
            result = cache[n] = n*func(n-1);
        }

        return result;
    }

    return func;
}();

console.log(fact(10));
console.log(fact(20));

// 클로저를 통해 cache에 기존 연산결과를 저장해 중복 호출 시 계산 시간을 줄였다. (Memoization)

// Fibonacci
var fibo = function() {
    var cache = { '0' : 0, '1' : 1};

    var func = function(n) {
        if (typeof(cache[n]) === 'number'){
            result = cache[n];
        }else {
            result = cache[n] = func(n-1) + func(n-2);
        }

        return result;
    }

    return func;
}();

console.log(fibo(10));

//

var cacher = function(cache, func) {
    var calculate = function(n) {
        if (typeof(cache[n])==='number'){
            result = cache[n];
        } else {
            result = cache[n] = func(calculate, n);
        }
        return result;
    }
    return calculate;
};

var fact2 = cacher({'0':1}, function(func, n){
    return n*func(n-1);
});

var fibo2 = cacher({'0':0, '1' : 1}, function(func, n){
    return func(n-1) + func(n-2);
});

console.log(fact2(10));
console.log(fibo2(10));
