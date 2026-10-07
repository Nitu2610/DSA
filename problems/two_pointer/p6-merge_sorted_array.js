let num1 = [1, 2, 3, 0, 0, 0, 0];
let num2 = [2, 5, 6, 7];

let i = num1.length - 1 - num2.length;
let j = num2.length - 1;
let k = num1.length - 1;

while (j >= 0) {
  if (num1[i] > num2[j]) {
    num1[k] = num1[i];
    i--;
  } else {
    num1[k] = num2[j];
    j--;
  }
  k--;
}
