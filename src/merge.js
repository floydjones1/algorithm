var time = 100;
const mergeSort = (arr, low, high, myChart) => {
  let middle;
  
  if(time > 1){
    time +=  50;
  }
  if(low<high){
    
    if(high.length % 2 == 0){
      middle = (low + high)/2;
    }else{
      middle = (low + high)/2;
      middle = Math.floor(middle);
    }
    mergeSort(arr, low, middle, myChart);
    mergeSort(arr, middle+1, high, myChart);
    setTimeout(function(){
      merge(arr, low, middle, high, myChart)
    },time);
    
  }
}
	
function merge(arr, low, middle, high, myChart){
  let arr1 = [];
  let arr2 = [];
  
  for(let i = low; i <= middle; i++){
    arr1.push(arr[i]);
  }
  
  for(let i = middle+1; i <= high; i++){
    arr2.push(arr[i]);
  }
  
  let firstIndex = 0;
  let secondIndex = 0;
  
  while(firstIndex < arr1.length && secondIndex < arr2.length){

    if(arr1[firstIndex] <= arr2[secondIndex]){
      arr[low] = arr1[firstIndex];
      firstIndex++;
    }else{
      arr[low] = arr2[secondIndex]
      secondIndex++;
    }
    low++;
  }
  
  
  while(firstIndex < arr1.length){
    arr[low] = arr1[firstIndex];
    firstIndex++;
    low++;
  }		
  while(secondIndex < arr2.length){
    arr[low] = arr2[secondIndex];
    secondIndex++;
    low++;
  }
  
  myChart.update();
  //console.log(arr);
}

export default mergeSort