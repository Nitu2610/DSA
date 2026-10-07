/*
Problem 1: Print the matrix for a given 'n';
let n=4;
 */

// for(let i=0;i<n;i++){
//     let str="";
//     for(j=0;j<n;j++){
//         str+="* "
//     }
//     console.log(str)
// }

/*
Output: for n=4
* * * * 
* * * * 
* * * * 
* * * * 
*/
//---------------------------------------------------------------

/*
Problem 2: Print the right angle triangle for a given 'n';
let n=4;
 */

// for(let i=0;i<n;i++){
//     let str="";
//     for(j=0;j<=i;j++){
//         str+="* "
//     }
//     console.log(str)
// }

/*
Output: for n=4
* 
* * 
* * * 
* * * * 
*/
//---------------------------------------------------------------

/*
Problem 2a: Print the right angle triangle for a given 'n';
let n=4;
 */

// for(let i=0;i<n;i++){
//     let str="";
//     for(j=0;j<=i;j++){
//         str+= (j+1)+" "
//     }
//     console.log(str)
// }

/*
Output: for n=4
1 
1 2 
1 2 3 
1 2 3 4 
*/
//---------------------------------------------------------------
/*
Problem 2b: Print the right angle triangle for a given 'n';
let n=4;
*/

// for(let i=0;i<n;i++){
//     let str="";
//     for(j=0;j<=i;j++){
//         str+= (i+1)+" "
//     }
//     console.log(str)
// }

/*
Output: for n=4
1 
2 2 
3 3 3 
4 4 4 4 
*/
//---------------------------------------------------------------
/*
Problem 2c: Print the right angle triangle for a given 'n';
let n=4;
*/

// for(let i=n-1;i>=0;i--){
//     let str="";
//     for(j=0;j<=i;j++){
//         str+= "* "
//     }
//     console.log(str)
// }

/*
Output: for n=4
* * * * 
* * * 
* * 
* 

*/
//---------------------------------------------------------------
/*
Problem 2d: Print the right angle triangle for a given 'n';
let n=4;
*/

// for(let i=n-1;i>=0;i--){
//     let str="";
//     for(j=0;j<=i;j++){
//         str+= (j+1) +" ";
//     }
//     console.log(str)
// }

/*
Output: for n=4
1 2 3 4 
1 2 3 
1 2 
1 
 
*/
//---------------------------------------------------------------
/*
Problem 2e: Print the triangle for a given 'n';
let n=5;
*/

// for(let i=0;i<n;i++){

//     let str="";
//     for(a=0;a<n-1-i;a++){
//         str+= "- "
//     }
//     for(b=0;b<2*i+1;b++){
//         str+= "* "
//     }
//     for(c=0;c<n-i-1;c++){
//         str+="- "
//     }

//     console.log(str)
// }

/*
Output: for n=4 row=4, column=9(including spaces)
- - - - * - - - - 
- - - * * * - - - 
- - * * * * * - - 
- * * * * * * * - 
* * * * * * * * * 
*/
//---------------------------------------------------------------
/*
Problem 2f: Print the triangle for a given 'n';
*/

// let n = 5;

// for (let i = 0; i < n; i++) {
//   let str = "";
//   for (a = 0; a < n - 1 - i; a++) {
//     str += "- ";
//   }
//   for (b = 0; b < 2 * i + 1; b++) {
//     str += "* ";
//   }
//   for (c = 0; c < n - i - 1; c++) {
//     str += "- ";
//   }

//   console.log(str);
// }

/*
Output: for n=4 row=4, column=9(including spaces)
- - - - * - - - - 
- - - * * * - - - 
- - * * * * * - - 
- * * * * * * * - 
* * * * * * * * * 
*/
//---------------------------------------------------------------

/*
Problem 17: Print the triangle for a given 'n' with alphabet order in reverse from mid point.;
*/

// let n = 5;
// let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// for (let i = 0; i < n; i++) {
//   let al = "A";
//   let res = "";
//   for (let a = 0; a < n - i - 1; a++) {
//     res += "- ";
//   }

//   let breakpoint = Math.ceil((2 * i + 1) / 2);
//   let temp = breakpoint;
//   for (b = 0; b < 2 * i + 1; b++) {
//     if (b < breakpoint) {
//       res += str[b] + " ";
//     } else {
//       res += str[temp - 2] + " ";
//       temp = temp - 1;
//     }
//   }

//   for (let c = 0; c < n - i - 1; c++) {
//     res += "- ";
//   }

//   console.log(res);
// }

/*
Output: for n=4 row=4, column=9(including spaces)
- - - - A - - - - 
- - - A B A - - - 
- - A B C B A - - 
- A B C D C B A - 
A B C D E D C B A 
*/

//---------------------------------------------------------------

// Problem 19: Print the diamond for a given 'n'.
// */

// // let n = 5;
// for (i = 0; i < n; i++) {
//   let res = "";

//   for (a = n; a > i; a--) {
//     res += "*";
//   }

//   for (b = 1; b < 2 * i + 1; b++) {
//     res += " ";
//   }

//   for (c = n; c > i; c--) {
//     res += "*";
//   }

//   console.log(res);
// }

// for (i = n - 1; i >= 0; i--) {
//   let res = "";

//   for (a = n; a > i; a--) {
//     res += "*";
//   }

//   for (b = 1; b < 2 * i + 1; b++) {
//     res += " ";
//   }

//   for (c = n; c > i; c--) {
//     res += "*";
//   }

//   console.log(res);
// }

/*
Output: for n=5 row=10, column=10(including spaces)
**********
****  ****
***    ***
**      **
*        *
*        *
**      **
***    ***
****  ****
**********
*/

//---------------------------------------------------------------

// Problem 20: Print the x for a given 'n'.
// */

// // let n = 5;

// for (i = n - 1; i >= 0; i--) {
//   let res = "";

//   for (a = n; a > i; a--) {
//     res += "*";
//   }

//   for (b = 1; b < 2 * i + 1; b++) {
//     res += " ";
//   }

//   for (c = n; c > i; c--) {
//     res += "*";
//   }

//   console.log(res);
// }

// for (i = 1; i < n; i++) {
//   let res = "";

//   for (a = n; a > i; a--) {
//     res += "*";
//   }

//   for (b = 1; b < 2 * i + 1; b++) {
//     res += " ";
//   }

//   for (c = n; c > i; c--) {
//     res += "*";
//   }

//   console.log(res);
// }

/*
Output: for n=5 row=10, column=10(including spaces)
*        *
**      **
***    ***
****  ****
**********
****  ****
***    ***
**      **
*        *
*/

//---------------------------------------------------------------

// Problem 21: Print the box with space at center for a given 'n'.
// */

// let n = 4;

// for (i = 0; i < n; i++) {
//   let res = "";

//   for (j = 0; j<n; j++) {
//     if((i==0 || i==n-1) || (j==0 || j== n-1)){
//         res += " * ";
//     }
//     else{
//         res += "   ";
//     }
//   }

//   console.log(res);
// }

/*
Output: for n=4 row=4, column=8(including spaces)
 *  *  *  * 
 *        * 
 *        * 
 *  *  *  * 
*/

//---------------------------------------------------------------

// Problem 21: Print the box with space at center for a given 'n'.
// */

//let n = 4;

// for (i = 0; i < 2 * n - 1; i++) {
//   let res = "";

//   for (j = 0; j < 2 * n - 1; j++) {
//     let top = i,
//       right = 2 * n - 2 - j,
//       bottom = 2 * n - 2 - i,
//       left = j;

//     res += n - Math.min(top, right, bottom, left);
//   }

//   console.log(res);
// }

/*
Output: for n=4 row=7, column=7(including spaces)
4444444
4333334
4322234
4321234
4322234
4333334
4444444
*/

//---------------------------------------------------------------