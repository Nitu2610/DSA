let arr = [2, 7, 11, 15];
let target = 18;

let i = 0;
let j = arr.length - 1;

while (i < j) {
  let sum = arr[i] + arr[j];
    if (sum === target) {
    console.log(i+1 , j+1 );
    break;
  }

  if (sum < target) {
    i++;
  } else {
    j--;
  }
}
