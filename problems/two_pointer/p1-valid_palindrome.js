let str = "A man, a plan, a canal: Panama";

let i = 0,
  j = str.length - 1;
let isPalindrome = true;
let validateCheck = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

while (i < j) {
  const smallerI = str[i].toLowerCase();
  const smallerJ = str[j].toLowerCase();
  if (!validateCheck.includes(smallerI)) {
    ++i;
    continue;
  }
  if (!validateCheck.includes(smallerJ)) {
    --j;
    continue;
  }

  if (smallerI !== smallerJ) {
    return (isPalindrome = false);
  }
  i++;
  j--;
}
console.log(isPalindrome);
