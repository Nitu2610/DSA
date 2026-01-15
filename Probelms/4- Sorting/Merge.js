// Merge Sort-> Divide the array in appx 2 each parts until the array lenght is 2 to compare and then merge in sorted order.

// If the base case or condition - tells whens to stop the recursion fn(mergeSort). is missed, you will land in to error- " RangeError: Maximum call stack size exceeded "

// Time Complexity (TC): O(N log N) in all cases (Best, Average, Worst). This is because we always split in half and always merge.
// Space Complexity (SC): O(N). Unlike our previous sorts, Merge Sort needs that temp array to store elements, making it less memory-efficient than Quick Sort.

let arr = [1, 2, 0, 6, 5, 8, 9, 7, 3, 4];

const merge = (arr, low, mid, high) => {
  let temp = [];
  let left = low,
    right = mid + 1;

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }
  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  for (let i = 0; i < temp.length; i++) {
    arr[low + i] = temp[i];
  }
};

const mergeSort = (arr, low = 0, high = arr.length - 1) => {
  if (low >= high) return;
  let mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, mid, high);
};
mergeSort(arr);
console.log(arr);

// How merging fn works

// let arr1 = [1, 3, 5];
// let arr2 = [2, 4, 6];

// function mergeSortedArrays(arr1, arr2) {
//   let result = [];
//   let i = 0; // pointer for arr1
//   let j = 0; // pointer for arr2

//     while (i < arr1.length && j<arr2.length) {
//       if (arr1[i] < arr2[j]) {
//         result.push(arr1[i]);
//         i++;
//       } else {
//         result.push(arr2[j]);
//         j++;
//       }
//     }

//     while(i<arr1.length){
//         result.push(arr1[i]);
//         i++;
//     }
//       while(j<arr2.length){
//         result.push(arr2[j]);
//         j++;
//     }

//   return result;
// }
// console.log(mergeSortedArrays(arr1, arr2));
