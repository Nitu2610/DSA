// //----- Two pointer----
 arr = [1, 2, 3, 4, 5],
//   left = 0;
// right = arr.length - 1;
// for (let i = 0; i <= arr.length / 2; i++) {
//   [arr[left], arr[right]] = [arr[right], arr[left]];
//   left++;
//   right--;
// }
// console.log(arr);

//--------------------------------------------------

// Instead of using for loop, DSA interviews usually prefer: while loop because
// Reason:

// No need to calculate arr.length / 2.
// Easier to explain.
// Less chance of off-by-one errors.


 left = 0;
let right = arr.length - 1;

while (left < right) {
  [arr[left], arr[right]] = [arr[right], arr[left]];
  left++;
  right--;
}

console.log(arr);