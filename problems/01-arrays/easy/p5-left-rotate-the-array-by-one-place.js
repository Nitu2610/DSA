let arr = [1, 2, 3, 4, 5];

let temp = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (i === arr.length - 1) {
    arr[i] = temp;
  } else {
    arr[i] = arr[i + 1];
  }
}
console.log(arr);
