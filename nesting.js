function gameBuilder() {
    const clueGame = {};

    clueGame['suspects'] = [];

    clueGame.suspects.push({
        name: 'Rusty',
        color: 'orange'
    });

    clueGame.suspects.push({
        name: 'Miss Scarlet',
        color: 'red'
    });

    return clueGame;
}

function showSuspectsDetails(game) {
    for (let i = 0; i < game.suspects.length; i++) {
        console.log(game.suspects[i]);
    }
}

let game = gameBuilder();
showSuspectsDetails(game);
