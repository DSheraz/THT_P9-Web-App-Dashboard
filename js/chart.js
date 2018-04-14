//========================================
// javascript for chart.js
// ========================================

var gChart = document.getElementById("gChart");
var dtChart = document.getElementById("dtChart");
var muChart = document.getElementById("muChart");
const chartButton = document.querySelector(".chart-button");
const button = document.querySelectorAll(".chart-button button");


//create functions for the chartss

//hourly chart
function hour() {
  var myLineChart = new Chart(gChart, {
      type: 'line',
      data: {
        labels: ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"],
        datasets: [{
          data: ["12","7","5","5","6","14","23","32","37","45","47","43","34","37","34","29","35","43","45","47","45","32","28","23"],
          borderColor: 'yellow',
          backgroundColor: '#BE3E31'
        }]
      },
      options: {
    legend: {
      display: false,
    },
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Traffic'
        }
      }]
    }
  }
  });
}

//daily chart
function day() {
  var myLineChart = new Chart(gChart, {
      type: 'line',
      data: {
        labels: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        datasets: [{
          data: ["721","661","630","579","550","689","820"],
          borderColor: 'yellow',
          backgroundColor: '#BE3E31'
        }]
      },
      options: {
    legend: {
      display: false,
    },
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Traffic'
        }
      }]
    }
  }
  });
}

//weekly chart
function week() {
  var myLineChart = new Chart(gChart, {
      type: 'line',
      data: {
        labels: ["1-7","8-14","15-21","22-28","29-2"],
        datasets: [{
          data: ["4627","4300","4331","4671","4973"],
          borderColor: 'yellow',
          backgroundColor: '#BE3E31'
        }]
      },
      options: {
    legend: {
      display: false,
    },
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Traffic'
        }
      }]
    }
  }
  });
}

//monthly chart
function month() {
        button[3].focus();
        var myLineChart = new Chart(gChart, {
        type: 'line',
        data: {
          labels: ["January","February","March","April","May","Jun","July","August","September","October","November","December"],
          datasets: [{
            data: ["55400","56304","62344","66873","70354","79356","85976","92353","100523","115987","130456","174559"],
            borderColor: 'yellow',
            backgroundColor: '#BE3E31'
          }]
        },
        options: {
      legend: {
        display: false,
      },
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Traffic',
          }
        }]
      }
    }
    });
}

//bar chart
function bar() {
  new Chart(dtChart, {
      type: 'bar',
      data: {
        labels: ["S","M","T","W","T","F","S"],
        datasets: [{
          data: ["721","661","630","579","550","689","820"],
          backgroundColor: ["#2154A9","#296BFF","#49B2E8","#0EFFFD","#0CE893","#17FF4E","#13C03F"]
        }]
      },
      options: {
        legend: {
          display: false,
        }
      }
  });
}

//doughnut chart
function doughnut() {
  new Chart(muChart, {
      type: 'doughnut',
      data: {
        labels: ["Phones","Tablets","Desktop"],
        datasets: [{
          data: ["70","17","13"],
          backgroundColor: ["#17C6B7","#EAFF65","#FF7F60"]
        }]
      },
      options: {
        legend: {
          position: 'right'
        }
      }
  });
}

//call the functions

//call monthly chart on load
month();

//eventlistener for the general charts(hourly, daily, weekly, monthly)
chartButton.addEventListener('click', function(e) {
  const button = e.target;
  if(button.textContent == "Hourly") {
    hour();
  } else if (button.textContent == "Daily") {
    day();
  } else if (button.textContent == "Weekly") {
    week();
  } else if (button.textContent == "Monthly") {
    month();
  }
});

var doughnutChart = doughnut();
var barChart = bar();
