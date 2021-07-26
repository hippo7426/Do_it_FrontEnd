var a= 100;
var b= 100;

var objA = { value:100 };
var objB = { value: 100};
var objC = objB;

console.log(a==b); //기본 타입 변수는 값을 비교
console.log(objA == objB); //참조값이 다름
console.log(objB == objC); //참조값이 같음