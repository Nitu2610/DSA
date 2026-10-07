let nums = [-5, -4, -3, 0, 1, 10];

let i = 0;
let j = nums.length - 1;
let res = [];

let k = nums.length - 1;

while (i <= j) {
  let left = nums[i] * nums[i];
  let right = nums[j] * nums[j];
  if (right > left) {
    res[k] = right;
    j--;
  } else {
    res[k] = left;
    i++;
  }
  k--;
}

console.log(res);
