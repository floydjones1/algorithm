import mergeSort from './merge'

$(document).ready(function(){
	let arr = [];
	let myChart

	for (let i = 0; i != 300; i++){
		arr.push(Math.floor((Math.random() * 1000) + 1));
	}

	console.log(arr.includes(3))
	let ctx = document.getElementById("chart").getContext('2d');
	myChart = new Chart(ctx, {
		type: 'bar',
		data: {
		labels: arr,
		datasets: [{
			label: "Number",
			data: arr,
			backgroundColor: "rgba(0,60,100,1)",
		strokeColor: "red",
			borderWidth: 1
					}]
				},
					options:{
						title:{
							display: true,
							text: "Merge Sort",
							fontSize: 22
						},
					legend:{
						display:false, 
					},
					scales:{
						yAxes:[{
							scaleLabel: {
								display: true,
								labelString: 'Number of Updates',
								fontSize: 15
							},
							ticks: {
								beginAtZero: true
							}
						}]
					}
					},        
				});
				
	mergeSort(arr, 0, arr.length-1, myChart);
});