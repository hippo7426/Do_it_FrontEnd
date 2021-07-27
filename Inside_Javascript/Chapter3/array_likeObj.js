var arr = ['bar'];
var obj = { name : 'foo', length : 1};

arr.push('baz');
console.log(arr);

// obj.push('baz'); // Error

Array.prototype.push.apply(obj, ['baz']);
console.log(obj); 