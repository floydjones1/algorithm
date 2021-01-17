
import mergeSort from "./merge";
import Chart from 'chart.js'
import "./style/main.scss";

export var myChart;
var arr = [];
export let stopSorting = false;
export var speed = 100

document.onreadystatechange = () => {
  if (document.readyState === "complete") {
		var num = document.getElementById('dataPoints').value;
    generateDataPoints(num, arr);

    let ctx = document.getElementById("chart").getContext("2d");
    myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: arr,
        datasets: [
          {
            label: "Number",
            data: arr,
            backgroundColor: "rgba(0,60,100,1)",
            strokeColor: "red",
            borderWidth: 1,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Merge Sort",
          fontSize: 22,
        },
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Number of Updates",
                fontSize: 15,
              },
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });

    mergeSort(arr, 0, arr.length - 1);



		var btn = document.getElementById('start-btn');
		btn.addEventListener("click", () => {
			(async function () {
				stopSorting = true;
				await sleep(500)
				stopSorting = false;
				var num = document.getElementById('dataPoints').value;
				generateDataPoints(num, arr);
				myChart.update()
				await sleep(1000)
				console.log(arr.length)
				mergeSort(arr, 0, arr.length - 1)
			})();
		});

		var sliderSpeed = document.getElementById('speedRange');
		sliderSpeed.addEventListener("change", () => {
			speed = document.getElementById('speedRange').value
			console.log(speed)
		});

  }
};

function generateDataPoints(num, arr) {
  arr.length = num;
  for (let i = 0; i != num; i++) {
    arr[i] = Math.floor(Math.random() * 1000 + 1);
  }
}

export async function sleep(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, delay);
  });
}
