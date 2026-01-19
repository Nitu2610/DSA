let arr = [1, 2, 0, 6, 5, 8, 9, 7, 3, 4];

const  merge=(arr, low, mid, high)=>{
  let temp=[], left=low, right=mid+1;

  while(left<=mid && right <=high){
    if(arr[left]<=arr[right]){
      temp.push(arr[left]);
      left++
    } else {
        temp.push(arr[right]);
      right++
    }
  }
  while(left<=mid){
     temp.push(arr[left]);
      left++
  }
    while(right<=high){
     temp.push(arr[right]);
      right++
  }

  for(let i=0;i<temp.length;  i++){
    arr[low+i]= temp[i]
  }

}

const mergeSort=(arr,low=0,high=arr.length-1)=>{

  if(low>= high) return;

  let mid= Math.floor((low+high)/2);

  mergeSort(arr,low, mid);
  mergeSort(arr,mid+1, high);

  merge(arr, low, mid, high)
}

mergeSort(arr);
console.log(arr)