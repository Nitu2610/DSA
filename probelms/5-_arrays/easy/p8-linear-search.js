let arr=[1,5,8,9,6,4];
let t=5;

let res=-1;

for(let i=0;i<arr.length;i++){
  if(arr[i] === t){
    res=i;
    break;
  }
}

console.log(res)