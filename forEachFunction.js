let _ = require('underscore');

function CreateSuspectObjects(name) {
    return {
        name: name,
        color: name.split(' ')[1],
        speak() {
            console.log('my name is ', this.name);
        }
    };
}

let suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];
let suspectsList = [];


for (let i = 0; i < suspects.length; i++) {
    suspectsList.push(CreateSuspectObjects(suspects[i]));
}



