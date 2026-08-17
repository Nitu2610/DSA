let arr = [2, 0, 2, 1, 1, 0];

let i = 0;
let k = 0;
let j = arr.length - 1;
// i = boundary of 0s
// k = current element / boundary of 1s
// j = boundary of 2s
while (j > k) {
  if (arr[k] === 0) {
    [arr[k], arr[i]] = [arr[i], arr[k]];
    k++;
    i++;
  } else if (arr[k] === 1) {
    k++;
  } else {
    [arr[k], arr[j]] = [arr[j], arr[k]];
    j--;
  }
  console.log(arr, "--", i, k, j);
}

// Dutch National Flag Algorithim
/**
 * Does the array have exactly 3 categories/values?  
 * Does the problem ask you to group/partition those 3 categories?  
 * Does it require in-place modification?  
 */