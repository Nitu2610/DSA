let arr = [1, 2, 0, 6, 5, 8, 9, 7, 3, 4];

const quick=(arr, low=0,high)=>{
  let pivot=arr[low],i=low, j=high;

  while(i<j){
    while(arr[i]<=pivot && i<= high-1){
      i++;
    }
       while(arr[j]>pivot && i>= low+1){
      j--;
    }
    if(i<j){
      [arr[i],arr[j]]=  [arr[j],arr[i]]
    }
  }
   [arr[low],arr[j]]=  [arr[j],arr[low]];
   return j;
}

const quickSort=(arr, low=0,high=arr.length-1)=>{
  if(low<high){
    const piovetIndex=quick(arr, low,high);
    quickSort(arr, low, piovetIndex-1);
    quickSort(arr, piovetIndex+1,high)
  }
}

quickSort(arr);
console.log(arr)