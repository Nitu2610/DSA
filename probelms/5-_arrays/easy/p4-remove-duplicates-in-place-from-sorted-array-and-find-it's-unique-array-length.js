let arr = [1, 1, 1, 2, 2, 2, 3, 3, 4]; // Original array needs to be modified.

let index = 0;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > arr[index]) {
    arr[index + 1] = arr[i];
    index++;
  }
}
console.log(arr , "unique array range is, ", index + 1);
