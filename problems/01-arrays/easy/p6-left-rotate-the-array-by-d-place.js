let arr = [1, 2, 3, 4, 5, 6, 7];

// let d = 3,
//   temp = [];

// for (let i = 0; i < d; i++) {
//   temp.push(arr[i]);
// }

// for (let j = d; j < arr.length; j++) {
//   arr[j - d] = arr[j];
// }

// for (let k = arr.length - d; k < arr.length; k++) {
//   arr[k] = temp[k - d - 1];
// }
// console.log(arr);


// Optimized - Reverse the arrays // Need to work on the optimised solution.

let d = 3;

let start=0; let end=d-1;
while (start<=end){
let temp=arr[start];
arr[start]=arr[end];
arr[end]=arr[temp];
start++;
end--;
}


console.log(arr);
