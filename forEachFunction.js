let _ = require('underscore');
let suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];

function CreateSuspectObjects(name) {
    return {
        name: name,
        color: name.split(' ')[1],
        speak: function () {
            return `my name is  ${this.name}`;
        }
    };
}

_.each(suspects, function (name) {
   let suspectObject = CreateSuspectObjects(name);
   console.log(suspectObject.speak());
});




