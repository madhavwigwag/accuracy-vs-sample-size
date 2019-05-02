const table = document.getElementById("tableData");

function getData() {
    return fetch("http://localhost:8888/data/1000")
        .then(res => res.json())
        .then(data => {

            return data
        })
        .catch(err => console.log(err))
}


function populateTable() {
    getData()
        .then(d => {
            renderChart(d)
            prepareMarkup(d)
        })
        .catch(err => console.log(err));

}

function prepareMarkup(data) {
    data.forEach(d => {
        let tr = document.createElement("tr");

        for (const col in d) {
            if (d.hasOwnProperty(col)) {
                tr.appendChild(document.createElement("td")).innerHTML = d[col]
            }
        }
        table.appendChild(tr)
    });
}

populateTable()

function renderChart(d) {
    var ctx = document.getElementById("lineChart").getContext('2d');

    let points = [];
    let labels = []

    d.forEach(p => {
        points.push({
            x: p["rounds"],
            y: p["variation"]
        })

        labels.push(p["rounds"])
    });

    console.log(points)
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Variation',
                data: points,
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    stacked: true
                }]
            }
        }
    });
}

