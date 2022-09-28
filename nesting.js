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

function ShowSuspectsDetails(game) {
    for (let i = 0; i < game.suspects.length; i++) {
        console.log(game.suspects[i]);
    }
}

function DestructuringGame(game) {
    let jsonGame = JSON.stringify(game.suspects[0]);
    let { name, color } = {name: jsonGame.name, color: jsonGame.color};

    console.log(name);
    console.log(color);
}

let game = gameBuilder();
ShowSuspectsDetails(game);
DestructuringGame(game);
