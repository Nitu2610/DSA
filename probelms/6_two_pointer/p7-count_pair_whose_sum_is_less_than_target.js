let arr = [4, 2, 0, 1, 3];
let target = 5;

arr.sort();

let i = 0;
j = arr.length - 1;
let count = 0;
while (i < j) {
  let sum = arr[i] + arr[j];
  if (sum < target) {
    count += j - i;
    i++;
  } else {
    j--;
  }
}

console.log(count);
