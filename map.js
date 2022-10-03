let _ = require('underscore');
let listNumber = [1, 2, 3];

let result = _.map(listNumber, function (number) {
    return number * 10;
});

console.log(listNumber);
console.log(result);

let weapons = ['candlestick', 'lead pipe', 'revolver'];
let makeWeaponBroken = function (item) {
    return `broken ${item}`;
};

const underScoreWeaponsResult = _.map(weapons, makeWeaponBroken);
const JSWeaponResult          = weapons.map(makeWeaponBroken);

console.log(weapons);
console.log(underScoreWeaponsResult);
console.log(JSWeaponResult);
