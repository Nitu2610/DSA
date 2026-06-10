let sum = 0;

function A() {
  sum++;
  console.log(sum);
  if (sum == 10) {
    return;
  }
  return A();
}

A();
