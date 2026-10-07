// Problem Statement: Given an array, find the second smallest and second largest element in the array. Print ‘-1’ in the event that either of them doesn’t exist.

let arr = [1, 5, 3, 2, 4, 5, 1 ];

let lar = arr[0],
  sLar = -1;
small = arr[0];
sSmall = Infinity;

// for (let i = 1; i < arr.length; i++) {
//   if (
//     (arr[i] > lar && arr[i] != lar) ||
//     (arr[i] > sLar && arr[i] != lar && arr[i] < lar)
//   ) {
//     sLar = lar;
//     lar = arr[i];
//   }
//   if (
//     (arr[i] < small && arr[i] != small) ||
//     (arr[i] < sSmall && arr[i] != small && arr[i] > small)
//   ) {
//     sSmall = small;
//     small = arr[i];
//   }
// }

// console.log(lar, sLar);
// console.log(small, sSmall);

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > lar && arr[i] != lar) {
    lar = arr[i];
  } else if (arr[i] > sLar && arr[i] != lar && arr[i] < lar) {
    sLar = arr[i];
  } else if (arr[i] < small && arr[i] != small) {
    small = arr[i];
  } else if (arr[i] < sSmall && arr[i] != small && arr[i] > small) {
    sSmall = arr[i];
  }
}

console.log(lar, sLar);
console.log(small, sSmall);
