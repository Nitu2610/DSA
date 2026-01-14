// Hashing->  A method to pre store the data by pre calculating the values and fetch that data when required.
// Example:- Assume there is a array => [ 1,1,2,3,3], Step1- we create a fixed array with length 6, and initially assign its value as 0, we run a loop on the array to pre calculete the frequency of the arraay element and store that data. Its like, for the pre stored array with its element as 0, when the array[0] which is 1, we go to the prestored array, and prestoredarray[array[0]] = prestoredArray[1], when the condition is matched, we increase its element value by 1, so 0+1=1. when again the array element is 1, the data in the prestoredArray element which is 1 will increse to 2. In this manner by running the loop once we can get the frequency of all the element. Step2- Now we have a prestoredArray with all the frequently repeteaded element, and at any given point of time if we want to get the frequently element of a given number from the array[1,1,2,3,3], we can directly fetch it from the prestoredArray by  prestoredArray[number]. Note- Here the fixed array length is decided by the value of the given number.

let arr = [0, 1, 1, 5, 9, 6, 2, 3, 1, 5, 8, 4, 6, 2, 3, 6];
// let  prestoredObj={};

// for(let i=0;i<arr.length;i++){
//     if(prestoredObj[arr[i]]){
//         prestoredObj[arr[i]] =prestoredObj[arr[i]]+1;
//       //   prestoredObj[arr[i]] += 1; // shortcut-> means, look for the exact key and if found, increament it value.
//     }
//     else {
//          prestoredObj[arr[i]]=1
//     }
// }
// console.log(prestoredObj[1]) // Here the TC and SP is O(N)

// Using the map() concerpt now,

let mapMethod = new Map(); // S1-> Map is a key → value data structure, like an object, but with important differences. we use it over object because Any type of key (not just strings) =>> No prototype key collisions; Built-in .size; Faster & optimized for add/remove; Cleaner, safer API; Behaves like a true hash map

for (let num of arr) {
  // Step 2: Run loop once
  //   if (mapMethod.has(num)) { // Step 3 If yes, increase value by one
  //  let currentVal = myMap.get(num); // Step 4
  //     mapMethod.set(num, currentVal + 1); // Step 5
  //   } else {
  //     mapMethod.set(num, 1);  // Step 6
  //   }

  mapMethod.set(num, (mapMethod.get(num) || 0) + 1); // Steps 3, 4, 5, and 6 into one line inside the loop. // Get the current value (or use 0 if it doesn't exist), add 1, and save it.
}

console.log(mapMethod);
