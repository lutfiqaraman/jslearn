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

function showGameSuspects() {
    for (let i = 0; i < game.suspects.length; i++) {
        console.log(game.suspects[i]);
    }
}

showGameSuspects();
