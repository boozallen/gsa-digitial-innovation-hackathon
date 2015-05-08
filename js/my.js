document.getElementById("number").innerHTML = JSON.stringify(data.dataset);
var count = data.dataset.length;

document.getElementById("number").innerHTML = count;

for (var i = 0; i < count; i++) {

}


var pieData = [
    {
        value: 300,
        color:"#36435A",
        highlight: "#FF5A5E",
        label: "Excel"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "PDF"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "JSON"
    }
]

var pieOptions = {};

// Get the context of the canvas element we want to select
var ctx = document.getElementById("myChart").getContext("2d");
var myNewChart = new Chart(ctx).Pie(pieData, pieOptions);
