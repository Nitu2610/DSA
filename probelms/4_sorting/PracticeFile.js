 let arr = [ 9, 7, 4, 1, 2, 3, 0, 8, 5];

// let arr=[ 0, 1, 2, 3, 4, 5, 7, 8, 9]

console.log(arr);

for (let i = 0; i < arr.length - 1; i++) {
  let minIndex = i; 
  let flag=false;

  for (let j = i; j < arr.length; j++) {
    if (arr[j] < arr[minIndex]) {
      minIndex = j;
      flag=true;
    }
  }
  (!flag) ?  console.log("Given Array is already sorted.") :  [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
}

console.log(arr);
