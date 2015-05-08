


var validateDataset = function() {
  var url = document.getElementById("validateURL").value;
  console.log(url);


  //call function to validate the dataset

}





document.getElementById("number").innerHTML = JSON.stringify(data.dataset);
var count = data.dataset.length;

/*for (var i = 0;i < data.dataset.length; i++) {
  var distribution = data[i].dataset.distribution;
  console.log(distribution);
}*/

var wordCount = 0;
var excelCount = 0;
var accessCount = 0;
var pdfCount = 0;
var zipCount = 0;
var wordArray = [];
var excelArray = [];
var accessArray = [];
var pdfArray = [];
var zipArray = [];

var fun = function() {


  for(var k = 0;k < data.dataset.length; k++) {
    var distribution = data.dataset[k].distribution;
    if (distribution) {
      if (distribution.length == 1) {
        var type = distribution[0].mediaType;
        console.log(type);

        if (type == "application/msword") {
          wordCount = wordCount + 1;
          wordArray.push(
            {
              title: data.dataset[k].title,
              contactName: data.dataset[k].contactPoint.fn,
              contactEmail: data.dataset[k].contactPoint.hasEmail
            }
          );
        }
        if (type == "application/vnd.ms-excel") {
          excelCount = excelCount + 1;
          excelArray.push(
            {
              title: data.dataset[k].title,
              contactName: data.dataset[k].contactPoint.fn,
              contactEmail: data.dataset[k].contactPoint.hasEmail
            }
          )
        }
        if (type == "application/mdb") {
          accessCount = accessCount + 1;
          accessArray.push({
            title: data.dataset[k].title,
            contactName: data.dataset[k].contactPoint.fn,
            contactEmail: data.dataset[k].contactPoint.hasEmail
          }
          )
        }
        if (type == "application/pdf") {
          pdfCount = pdfCount + 1;
          pdfArray.push({
            title: data.dataset[k].title,
            contactName: data.dataset[k].contactPoint.fn,
            contactEmail: data.dataset[k].contactPoint.hasEmail
          })
        }
        if (type == "application/zip") {
          zipCount = zipCount + 1;
          zipArray.push({
            title: data.dataset[k].title,
            contactName: data.dataset[k].contactPoint.fn,
            contactEmail: data.dataset[k].contactPoint.hasEmail
          })
        }
        console.log(wordCount);
        console.log(excelCount);
        console.log(accessCount);
        console.log(pdfCount);
        console.log(zipCount);
      }
    }
    else {
      //no distribution
    }

  }
}

fun();



document.getElementById("number").innerHTML = count;



var pieData = [
    {
        value: wordCount,
        color:"#D6DCE8",
        highlight: "#FF5A5E",
        label: "Word"
    },
    {
        value: excelCount,
        color: "#051838",
        highlight: "#152a55",
        label: "Excel"
    },
    {
        value: accessCount,
        color: "#2d4771",
        highlight: "#FFC870",
        label: "Access"
    },
    {
        value: pdfCount,
        color:"#7788aa",
        highlight: "#4e638e",
        label: "PDF"
    },
    {
        value: zipCount,
        color: "#a7b4cb",
        highlight: "#5AD3D1",
        label: "ZIP"
    }
]

var pieOptions = {};

// Get the context of the canvas element we want to select
var ctx = document.getElementById("myChart").getContext("2d");
var myNewChart = new Chart(ctx).Pie(pieData, pieOptions);



console.log(wordArray);
$("#myChart").click(
    function(evt){
      document.getElementById("badData").style.visibility = "visible";
        var activePoints = myNewChart.getSegmentsAtEvent(evt);
        var label = activePoints[0].label;
        console.log(label);
        if(label === "Word") {
          console.log(wordArray[0].title);
          document.getElementById("dataTitle").innerHTML = wordArray[0].title;
          document.getElementById("contactName").innerHTML = wordArray[0].contactName;
          document.getElementById("contactEmail").innerHTML = wordArray[0].contactEmail;
        }
        if(label == "Excel") {
          document.getElementById("dataTitle").innerHTML = excelArray[0].title;
          document.getElementById("contactName").innerHTML = excelArray[0].contactName;
          document.getElementById("contactEmail").innerHTML = excelArray[0].contactEmail;
        }
        if(label == "ZIP") {
          document.getElementById("dataTitle").innerHTML = zipArray[0].title;
          document.getElementById("contactName").innerHTML = zipArray[0].contactName;
          document.getElementById("contactEmail").innerHTML = zipArray[0].contactEmail;
        }
        if(label == "Access") {
          document.getElementById("dataTitle").innerHTML = accessArray[0].title;
          document.getElementById("contactName").innerHTML = accessArray[0].contactName;
          document.getElementById("contactEmail").innerHTML = accessArray[0].contactEmail;
        }
        if(label == "PDF") {
          document.getElementById("dataTitle").innerHTML = pdfArray[0].title;
          document.getElementById("contactName").innerHTML = pdfArray[0].contactName;
          document.getElementById("contactEmail").innerHTML = pdfArray[0].contactEmail;
        }
    }
);
