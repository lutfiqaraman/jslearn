let _ = require('underscore');
let listNumber = [1, 2, 3];
let listResult = [];

_.map(listNumber, function (number) {
    let result = number * 10;
    listResult.push(result);
});

console.log(listNumber);
console.log(listResult);

