let arr = [1, 5, 3, 2, 4];

let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) max = arr[i];
}
console.log(max);

// TC=> O(n) & SC=> O(1)