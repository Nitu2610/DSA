let word = "implementation";
let abb = "i12n";

let i = 0;
let j = 0;

let validWordAbb = true;

while (i < word.length && j < abb.length) {
  let w_c = word[i];
  let a_c = abb[j];
  if (!Number.isNaN(Number(a_c))) {
    let num = 0;
    while (j < abb.length && !Number.isNaN(Number(abb[j]))) {
      num = +abb[j] + num * 10;
      j++;
    }
    i += num;
  } else {
    if (w_c !== a_c) {
      validWordAbb = false;
      break;
    }
    i++;
    j++;
  }
}

console.log(validWordAbb);
