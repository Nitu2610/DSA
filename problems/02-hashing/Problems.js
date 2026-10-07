// Hashing->  A method to pre store the data by pre calculating the values and fetch that data when required.
// Example:- Assume there is a array => [ 1,1,2,3,3], Step1- we create a fixed array with length 6, and initially assign its value as 0, we run a loop on the array to pre calculete the frequency of the arraay element and store that data. Its like, for the pre stored array with its element as 0, when the array[0] which is 1, we go to the prestored array, and prestoredarray[array[0]] = prestoredArray[1], when the condition is matched, we increase its element value by 1, so 0+1=1. when again the array element is 1, the data in the prestoredArray element which is 1 will increse to 2. In this manner by running the loop once we can get the frequency of all the element. Step2- Now we have a prestoredArray with all the frequently repeteaded element, and at any given point of time if we want to get the frequently element of a given number from the array[1,1,2,3,3], we can directly fetch it from the prestoredArray by  prestoredArray[number]. Note- Here the fixed array length is decided by the value of the given number.

// Array-based hashing: Suppose you want to store counts of letters, so you decide 'a'→0, 'b'→1, 'c'→2 yourself and store them like arr[2] = 5; you design the mapping from key to number.
// Map / Hash table: You just say count["c"] = 5; the structure automatically hashes "c" internally and stores it in the right place.
// Core idea: With arrays you invent the address, with hash tables the system finds the address for you.

// Hashing gives O(1) average and best time, but degrades to O(N) in the worst case due to collisions.

// Intrnally hashing is done by dividing method, folding method and mid square method.


//Q1 let arr = [0, 1, 1, 5, 9, 6, 2, 3, 1, 5, 8, 4, 6, 2, 3, 6];
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

// let mapMethod = new Map(); // S1-> Map is a key → value data structure, like an object, but with important differences. we use it over object because Any type of key (not just strings) =>> No prototype key collisions; Built-in .size; Faster & optimized for add/remove; Cleaner, safer API; Behaves like a true hash map

// for (let num of arr) {
//   // Step 2: Run loop once
//   //   if (mapMethod.has(num)) { // Step 3 If yes, increase value by one
//   //  let currentVal = myMap.get(num); // Step 4
//   //     mapMethod.set(num, currentVal + 1); // Step 5

//   mapMethod.set(num, (mapMethod.get(num) + 1); // Steps 3, 4, 5, and 6 into one line inside the loop. // Get the current value (or use 0 if it doesn't exist), add 1, and save it.
//   //   } else {
//   //     mapMethod.set(num, 1);  // Step 6
//   //   }

// }

// console.log(mapMethod);

// Q2 - You are given two strings. You need to verify if they are anagrams of each other.
// let s = "programming",
//   t = "grammingrop",
//   map = new Map();

// if (s.length !== t.length) {
//   console.log(` Not an Anagram due to length difference`);
// } else {
//   for (let char of s) {
//     map.set(char, (map.get(char) || 0) + 1);
//   }
//   let isAragram = true;

//   for (let char of t) {
//     if (map.get(char) === 0 || !map.has(char)) {
//       isAragram = false;
//       break;
//     }
//     map.set(char, map.get(char) - 1);
//   }
//   if (isAragram) {
//     console.log(`True, they are Aragram!!.`);
//   } else {
//     console.log(`False !! , Not Aragram.`);
//   }
// }

// Q3- >Find the First Unique Character:
// let s="loveleetcode", map=new Map();

// for(let char of s){
//         map.set(char, (map.get(char) || 0 ) + 1);

// }
// for(let [key,val]of map){
//     if(val==1){
//         console.log(`Key: ${key} and its value : ${val}`);
//         break;
//     }
// }

// Q4-> Using Array Hashing, mostly preferred for the string problems.

// let arr=new Array(26).fill(0); // create a new array with lengh 26 and fill it with the element 0.
// let str='abacc' // 'casderfgtdewsacvfdqzbhftg'

// for(let i=0;i<str.length;i++){
//     let index=str[i].charCodeAt(0)-97; // It converts a letter into a 0–25 index by subtracting ASCII of 'a' (97); e.g. 'c'.charCodeAt(0) = 99, 99 - 97 = 2, so 'c' maps to index 2.
//     arr[index]++;
// }
// console.log(arr)

