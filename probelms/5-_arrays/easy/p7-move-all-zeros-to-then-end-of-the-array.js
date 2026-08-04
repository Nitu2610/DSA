let arr=[1, 0, 2, 5, 3, 0, 0, 0, 4, 7, 9, 8,0,0];
let n=arr.length;

let index=0;

for(let i=0;i<n;i++){
  if(arr[i] !== 0 ){
    arr[index]=arr[i];
    index++;
  }
}
for(let j=index+1;j<arr.length;j++){
  arr[j]=0
}

console.log(arr)