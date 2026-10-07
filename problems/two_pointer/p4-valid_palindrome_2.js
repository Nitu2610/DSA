let str = "abbxa";

let i = 0,
  j = str.length - 1;
let isPalindrome = true;

const checkInnerPalindrome = (i, j, str) => {
  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

while (i < j) {
  if (str[i] !== str[j]) {
    isPalindrome =
      checkInnerPalindrome(i + 1, j, str) ||
      checkInnerPalindrome(i, j - 1, str);
    break;
  }
  i++;
  j--;
}
console.log(isPalindrome);

//   isPalindrome =
//       checkInnerPalindrome(i + 1, j, str) || checkInnerPalindrome(i, j-1, str);
//       break;

//       "I found a mismatch. I'll try both possible ways of removing one character: skip the left character OR skip the right character. If either remaining range is a palindrome, the answer is true."
