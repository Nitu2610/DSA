let arr = [9, 7, 4, 1, 2, 3, 0, 8, 5];

for (let i = 0; i < arr.length-1; i++) {
  let min = i;
  for (let j = i+1; j < arr.length; j++) {
    if (arr[j] < arr[min]) {
      min = j;
    }
  }
  [arr[min], arr[i]] = [arr[i], arr[min]];
}

// Insertion--
// for(let i=1; i<arr.length;i++){
//   for(let j=i; j>=0; j--){
//     if( arr[j]< arr[j-1] ){
//       [ arr[j-1] , arr[j] ] = [ arr[j], arr[j-1] ]
//     }
//   }
// }

console.log(arr);
