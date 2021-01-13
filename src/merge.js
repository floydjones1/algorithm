import { stopSorting, sleep, myChart, speed } from "./index.js";


const mergeSort = async (arr, low, high) => {
  if (stopSorting) return
  let middle;

  if (low < high) {
    if (high.length % 2 == 0) {
      middle = (low + high) / 2;
    } else {
      middle = (low + high) / 2;
      middle = Math.floor(middle);
    }
    
    const newSpeed = parseInt(100 * (speed / 100))

    await sleep(newSpeed)
    await mergeSort(arr, low, middle);
    await sleep(newSpeed)
    await mergeSort(arr, middle + 1, high);
    merge(arr, low, middle, high);
  }
};

async function merge(arr, low, middle, high) {
  if (stopSorting) return
  let arr1 = [];
  let arr2 = [];

  for (let i = low; i <= middle; i++) {
    arr1.push(arr[i]);
  }

  for (let i = middle + 1; i <= high; i++) {
    arr2.push(arr[i]);
  }

  let firstIndex = 0;
  let secondIndex = 0;

  while (firstIndex < arr1.length && secondIndex < arr2.length) {
    if (arr1[firstIndex] <= arr2[secondIndex]) {
      arr[low] = arr1[firstIndex];
      firstIndex++;
    } else {
      arr[low] = arr2[secondIndex];
      secondIndex++;
    }
    low++;
  }

  while (firstIndex < arr1.length) {
    arr[low] = arr1[firstIndex];
    firstIndex++;
    low++;
  }
  while (secondIndex < arr2.length) {
    arr[low] = arr2[secondIndex];
    secondIndex++;
    low++;
  }
  
  myChart.update();
  return
}

export default mergeSort;
