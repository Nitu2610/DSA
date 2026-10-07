// Given an array containing only 0s and 1s, rearrange the array in-place so that all 0s appear before all 1s using the two-pointer technique.

let arr = [0, 1, 1, 1, 0, 0, 1, 1];
let i = 0;
j = arr.length - 1;

while (i < j) {
  if (arr[i] === 0) {
    i++;
  } else if (arr[j] === 1) {
    j--;
  } else {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
}
console.log(arr);
