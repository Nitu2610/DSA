// INsertion - Take the element and place it in the correct index in ascending order.

// Time Complexity -> Best Case (Sorted) is O(N),  Average Case (Random) and Worst Case (Reverse) is O(N^2).
// Space Complexity -> for the 3 cases is O(1).

// let arr = [1, 2, 3]; // [6, 2, 3, 5, 4, 1];
// // console.log(`Before- `, arr);
// for (let i = 1; i < arr.length; i++) {
//   for (let j = i; j > 0; j--) {
//     if (arr[j] < arr[j - 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j - 1];
//       arr[j - 1] = temp;
//       console.log(arr);
//     }
// else{
//     break;
// }
//   }

//   // let j=i;
//   // while (j>0 && arr[j]<arr[j-1]){
//   //     let temp= arr[j];
//   //     arr[j]=arr[j-1];
//   //     arr[j-1]=temp;
//   //     j--;
//   //     console.log(arr)
//   // }


//   console.log("---------");
// }




