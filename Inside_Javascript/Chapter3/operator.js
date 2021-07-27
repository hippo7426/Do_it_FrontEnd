var add1 = 1+2;
var add2 = 'my' + 'string';
var add3 = 1 + 'string';
var add4 = 'string' + 2;

// == (동등) 연산자와 === (일치) 연산자
console.log(1=='1');
console.log(1==='1');

// !! 연산자
console.log(!!0); 
console.log(!!1);
console.log(!!'string');
console.log(!!'');
console.log(!!true);
console.log(!!false);
console.log(!!null);
console.log(!!undefined);
console.log(!!{});
console.log(!![1,2,3]);