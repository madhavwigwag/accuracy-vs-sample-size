


function generateData(rounds) {
    let data = [];
    for (let j = 0; j < rounds; j++) {
        data.push(randomizeAndAddResult())
    }

    data.sort((a, b) => {
      
        return a.rounds - b.rounds
    })
    return data;
}



function randomizeAndAddResult() {

    var rounds = Math.floor((Math.random() * 10000) + 1);
    var heads = 0;
    var tails = 0;

    for (let i = 0; i < rounds; i++) {
        Math.random().toFixed() === "1" ? heads++ : tails++;
    }
    var o = {
        "rounds": rounds,
        "heads": heads,
        "tails": tails,
        "headsPercentage": Number.parseFloat((heads / rounds) * 100).toFixed(2),
        "tailsPercentage": Number.parseFloat((tails / rounds) * 100).toFixed(2)
    };
    o.variation = Number.parseFloat(Math.abs(o.headsPercentage - 50)).toFixed(2);

    return o

}

module.exports = { generateData }



