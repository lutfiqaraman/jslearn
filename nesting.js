const game = {};

game['suspects'] = [];

game.suspects.push({
    name: 'Rusty',
    color: 'orange'
});

game.suspects.push({
    name: 'Miss Scarlet',
    color: 'red'
});

for (const gameObject of game.suspects) {
    console.log(gameObject.name);
}
