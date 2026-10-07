// Q1. Print a given name N times using Recursion.

// let N = 5,
//   name = "Nitesh",
//   count = 0;

// function A(count,N) {
//   if (count === N) return; // base condition
//   console.log(name);
//   count++;
//   return A(count++,N);
// }
// A(count,N); //==>> Time and Space Complexisitty is O(N)

// --------------------------------------------------

// Q2. Print a numbers linearly till N times using Recursion.

// let N = 5,count=0;
// function A(count,N) {
//   if (count === N) return; // base condition
//   console.log(count+1);
//   count++;
//   return A(count++,N);
// }
// A(count,N); //==>> Time and Space Complexisitty is O(N)

// --------------------------------------------------

// // Q3. Print a numbers linearly from N till 1 times using Recursion.

// let N = 5;
// function A(N) {
//   if (N==0) return; // base condition - here we print the value then call the funtion, so the output of fn is not considered.
//   console.log(N);
//   N--;
//   return A(N);
// }
// A(N); //==>> Time and Space Complexisitty is O(N)

// --------------------------------------------------

// Q4. Print a numbers linearly till N times using Recursion via backtracking.

// let N = 5;
// let count=N;
// function A(count,N) {
//   if (count<1) return; // base condition - where we print the value from inside out, until the final condition is met, previous values are not printed.
//   A(count-1, N);
//   return console.log(count);
// }
// A(count,N); //==>> Time and Space Complexisitty is O(N)

// --------------------------------------------------

// Q5. Print a numbers linearly from N till 1 times using Recursion.

// let N = 5;
// let count=N;
// function A(count,N) {
//   if (count<1) return; // base condition - where we print the return of initial fn then call the next function..
//   console.log(count);
//   return A(count-1, N);
// }
// A(count,N); //==>> Time and Space Complexisitty is O(N)

// --------------------------------------------------
// Q6. Print the sum of first n numbers.

// Solution A- Parameter wise
// let N = 5;
// let sum=0;
// function A(sum,N) {
//   if (N<1) {
//     return console.log(sum);
// }
//   A(sum+N,N-1);
// }
// A(sum,N); //==>> Time and Space Complexisitty is O(N)

// Solution B- Function wise

// let n = 5;

// function sum(n) {
//   if (n == 0) return 0;

//   return n + sum(n - 1); // here the value is not summed until n==0, so its 0+1, 1+2,3+3, 6+4,10+5 =>>15
// }
// console.log(sum(n));

// --------------------------------------------------

// Q7. Print the factorial of first n numbers.

// Solution A- Parameter wise
// let N = 5;
// let fac=1;
// function A(fac,N) {
//   if (N<1) {
//     return console.log(fac);
// }
//   A(fac*N,N-1);
// }
// A(fac,N); //==>> Time and Space Complexisitty is O(N)

// Solution B- Function wise

// let n = 5;

// function fac(n) {
//   if (n == 0) return 1;

//   return n * fac(n - 1); // here the value is not summed until n==0, so its 0+1, 1+2,3+3, 6+4,10+5 =>>15
// }
// console.log(fac(n));

// --------------------------------------------------

// Q8. Reverse an array using Recursion.

// S-A considering only two variable.
// let arr = [5,4,3,2,1];
// console.log("Before rev: " ,arr)
// const swap=(a,b)=>{
//     let temp=arr[a];
//     arr[a]=arr[b];
//     arr[b]=temp
// }
// function rev(l,r) {
//   if (l>=r) return;
//   swap(l,r);
//   rev(l+1,r-1)
// }
// rev(0,arr.length-1);
// console.log("after rev: " ,arr)

//S-B, considering only one variable.
// let arr = [5,4,3,2,1];
// console.log("Before rev: " ,arr);
// const swap=(a,b)=>{
//     let temp=arr[a];
//     arr[a]=arr[b];
//     arr[b]=temp
// }
// function rev(i,n) {
//   if (i>=Math.floor(n/2)) return;
//   swap(i,n-1);
//   rev(i+1,n-1-i)
// }
// rev(0,arr.length);
//  console.log("after rev: " ,arr)

// --------------------------------------------------

// Q8. Check if a string is a palindrome.
// Palindrome- A string on reversed, read's the same.

// let str = "MADAM";

// const palindrome = (i, n) => {
//   if (i >= Math.floor(n / 2))
//     return console.log("The String is a palindrome.-> ", true);

//   if (str[i] !== str[n - 1]) {
//     return console.log("The String is NOT a palindrome.-> ", false);
//   }
//   return palindrome(i + 1, n - 1 - i);
// };
// palindrome(0, str.length);

// --------------------------------------------------
// Fibonacci Series- 0,1,2,3,5,8,...... TC is O(2^n)
// 0+1-> 1, 1+1-> 2, 1+2->3, 2+3-> 5, 3+5->8 ...

const fibo=(n)=>{
    if(n<=1) return n;
    
    let last=fibo(n-1);
    let slast=fibo(n-2);
   // return console.log(last +slast)
}
fibo(3)

console.log(1-2)

