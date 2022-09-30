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

    let { firstColor, secondColor } =
        {
            firstColor:  game.suspects[0].color,
            secondColor: game.suspects[1].color
        };

    console.log('first color: '  + firstColor);
    console.log('second color: ' + secondColor);
}

let game = gameBuilder();

ShowSuspectsDetails(game);
DestructuringGame(game);
