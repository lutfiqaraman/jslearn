let _ = require('underscore');
let listNumber = [1, 2, 3];

let result = _.map(listNumber, function (number) {
    return number * 10;
});

console.log(listNumber);
console.log(result);
