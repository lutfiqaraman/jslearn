const _ = require('underscore');

const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    }
];

// Using UnderScore JS :: Start

// Return only suspects that has present true
const presentSuspects = _.filter(videoData, function (suspect) {
    return suspect.present;
});

// Return only the name of the suspects
const suspectsName = _.map(presentSuspects, function (suspect) {
    return suspect.name;
});

console.log('The list of suspects that present that day are : ' + suspectsName);

// Using UnderScore JS :: End

// Using JS :: Start

// Return only suspects that has present true
const presentSuspectsJS = videoData.filter(function (suspect) {
    return suspect.present;
});

// Return only the name of the suspects
const suspectsNameJS = presentSuspectsJS.map(function (suspect) {
    return suspect.name;
});

console.log('The list of suspects that present that day are : ' + suspectsNameJS);

// Using JS :: End
