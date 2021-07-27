var arr = ['zero', 'one', 'two', 'three'];
delete arr[2];
console.log(arr);
console.log(arr.length); // length는 불변, arr[2] 값만 undefined로 전환

//splice(start, deleteCount, alternativeItem)
arr. splice(2,1);
console.log(arr);
console.log(arr.length);