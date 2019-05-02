const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
    path: 'output.csv',
    header: [
        { id: 'rounds', title: 'Rounds' },
        { id: 'heads', title: 'Heads' },
        { id: 'tails', title: 'Tails' },
        { id: 'headsPercentage', title: 'Heads Percentage' },
        { id: 'tailsPercentage', title: 'Tails Percentage' },
        { id: 'variation', title: 'Variation' }
    ]
});

function writeToCsv(output) {
    csvWriter
        .writeRecords(output)
        .then(() => console.log('The CSV file was written successfully'));
}

module.exports = {writeToCsv};