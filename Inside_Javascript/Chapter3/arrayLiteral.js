//배열 리터럴을 통한 5개 원소를 가진 배열 생성
// var colorArr = [ 'orange', 'yellow', 'blue', 'green', 'red'];
// console.log(colorArr[0]);
// console.log(colorArr[1]);
// console.log(colorArr[4]);

//빈 배열
var emptyArr = [];
console.log(emptyArr[0]); 

//배열 요소 동적 생성
emptyArr[0] = 100;
emptyArr[3] = 'eight';
emptyArr[7] = true;
console.log(emptyArr);
console.log(emptyArr.length);

// var arr = [];
// console.log(arr.length); // 0 : 빈 배열은 length가 1

var arr = [0,1,2];
console.log(arr.length);

arr.length = 5; // 배열 길이를 명시적으로 변경가능
console.log(arr);

arr.length = 2;
console.log(arr);
console.log(arr[2]);