// Quick Sorting -  Pick a Pivot element and place it in its correct - sorted array. Pivot element could be any element from the array. After the pivot is placed on the correct position in the array, ensure at the left side the remaining element of the array are small and on the right side it will be greater then pivoted element.

// Time Complexity-> O(Nlog N) and Space Complexity- O(1);

let arr = [5, 9, 7, 4, 1, 2, 3, 0, 8];

const functionCorrectEle = (arr, low, high) => {
  let pivot = arr[low],
    i = low,
    j = high;

  while (i < j) { // this condition is to ensure the i never crosses j , so after the loop ends only j crosses i and its index value is capture. 
    while (arr[i] <= pivot && i <= high - 1) {
      i++;
    }
    while (arr[j] > pivot && j >= low + 1) {
      j--;
    }
    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[low], arr[j]] = [arr[j], arr[low]];
  return j;
};

const quickSort = (arr, low = 0, high = arr.length - 1) => {
  if (low < high) {
    let partitionIndex = functionCorrectEle(arr, low, high);
    quickSort(arr, low, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, high);
  }
};

quickSort(arr);

console.log(arr.length);
