let arr = [1, 8, 5, 2, 3, 6, 4, 7, 9];

// const mergeFn = (arr, low, mid, high) => {

//   let left = low;
//   let right = mid + 1;
//   let temp = [];

//   while (left <= mid && right <= high) {
//     if (arr[left] < arr[right]) {
//       temp.push(arr[left]);
//       left++;
//     } else {
//       temp.push(arr[right]);
//       right++;
//     }
//   }

//   while (left <= mid) {
//     temp.push(arr[left]);
//     left++;
//   }

//   while (right <= high) {
//     temp.push(arr[right]);
//     right++;
//   }

//   for (let i = low; i <= high; i++) {
//     arr[i] = temp[i - low];
//   }
// };

// const divFn = (arr, low, high) => {
//   if (low >= high) return;

//   let mid = Math.floor((low + high) / 2);

//   divFn(arr, low, mid);
//   divFn(arr, mid + 1, high);

//   mergeFn(arr, low, mid, high);
// };
// divFn(arr, 0, arr.length-1);

// console.log(arr);

//-------------------------------------

const pivotFn = (arr, low, high) => {
  let pivot = low;
  let i = low;
  let j = high;

  while (i < j) {
    while (arr[i] <= arr[pivot] && i <= high) {
      i++;
    }
    while (arr[j] > arr[pivot] && j >= low) {
      j--;
    }
    if (i < j) [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  [arr[j], arr[pivot]] = [arr[pivot], arr[j]]; // sorting in asending order. 
  return j;
};

const quickSort = (arr, low, high) => {
  if (low < high) {
    let partition = pivotFn(arr, low, high);
    quickSort(arr, low, partition - 1);
    quickSort(arr, partition + 1, high);
  }
};
quickSort(arr, 0, 8);

console.log(arr);
