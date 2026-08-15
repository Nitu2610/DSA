let str = "nitesh";
let char = str.split("");
let i = 0;
let j = char.length - 1;
console.log("before--", char);
while (i < j) {
  [char[i], char[j] ] = [ char[j], char[i] ];
  i++;
  j--;
}

console.log("after--", char);
