// Hashing->  A method to pre store the data by pre calculating the values and fetch that data when required.
// Example:- Assume there is a array => [ 1,1,2,3,3], Step1- we create a fixed array with length 6, and initially assign its value as 0, we run a loop on the array to pre calculete the frequency of the arraay element and store that data. Its like, for the pre stored array with its element as 0, when the array[0] which is 1, we go to the prestored array, and prestoredarray[array[0]] = prestoredArray[1], when the condition is matched, we increase its element value by 1, so 0+1=1. when again the array element is 1, the data in the prestoredArray element which is 1 will increse to 2. In this manner by running the loop once we can get the frequency of all the element. Step2- Now we have a prestoredArray with all the frequently repeteaded element, and at any given point of time if we want to get the frequently element of a given number from the array[1,1,2,3,3], we can directly fetch it from the prestoredArray by  prestoredArray[number]. Note- Here the fixed array length is decided by the value of the given number.


let arr=[1,1,5,9,6,2,3,1,5,8,4,6,2,3,6];
let  prestoredArr=[];


// for(j=0;j<arr.length;j++){
//     if(prestoredArr.includes(arr[j])){
//         prestoredArr[prestoredArr.indexOf(j)]= prestoredArr[prestoredArr.indexOf(j)]+1;
//     }
//     else{
//         prestoredArr[j]=1;
//     }
// }

 console.log( arr.findIndex(1) )

let givenNum=[0,1,2,3];
for(let i=0;i<givenNum.length;i++){
    
}
