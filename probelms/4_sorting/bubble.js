// Bubble -  Repeatedly compare adjacent elements and swap them if needed, so that in each pass the maximum element moves to the end of the array.
//  Time Complexity (TC)=> Worst & Average Case: $O(N^2). Best Case (Optimized): O(N).
//  Space Complexity (SC)$O(1)$: Just like Selection Sort, you are only using a temp variable. It's an in-place sorting algorithm.
//  Stable: Unlike Selection Sort, Bubble Sort is stable. Because you only swap if arr[j] > arr[j+1], two equal numbers (like two 5s) will never jump over e

// let arr = [5, 2, 3, 4, 1];

// for (let i = arr.length - 1; i >= 1; i--) {
//   // As we move from right to left the index will be from nth to 0th of array.

//   for (let j = 0; j < i; j++) {
//     // As we repeatedly compare the adjacent element starting from 0th index of each loop the limit of each loop will decrease from right side after every ith iteration.
//     if (arr[j] > arr[j + 1]) {
//       // If the left element is larger than the right element, we swap it.
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }

//     console.log(arr);
//   }
//   console.log(`After ${arr.length - i} iteration.  ---------------`);
// }


// Optimised method;

// for (let i = arr.length - 1; i >= 1; i--) {
//     let didSwap=false;
// for (let j = 0; j < i; j++) {
// if (arr[j] > arr[j + 1]) {
//       // If the left element is larger than the right element, we swap it.
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//       didSwap=true;
//     }
//     }
//       if(!didSwap){
//         console.log(` The array is already sorted.` ,arr);
//         break;
//   }
//    console.log(`After ${arr.length - i} iteration.  ---------------`, arr);
// }
