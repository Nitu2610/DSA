 let arr = [1, 5, 3, 2, 4, 5, 1 ]; // asending
// let arr= [ 1, 1, 2, 3, 4]

let flag=true;
for(let i=0; i<arr.length;i++){
  if( arr[i] > arr[i+1]){
    flag=false;
    break;
  }
}
if(!flag){
  console.log("Array is not sorted.")
} else{
  console.log("Array is sorted.")
}