const { name, room, weapon } =
    {
        name: 'Rusty',
        room: 'Kitchen',
        weapon: 'Candlestick'
    };

console.log("name: " + name.toLocaleLowerCase());
console.log("kitchen: " + room.toLocaleLowerCase());
console.log("weapon: " + weapon.toLocaleLowerCase());

let a = 1;
let b = 2;

[b, a] = [a , b];
console.log('a = ' + a);
console.log('b = ' + b);
