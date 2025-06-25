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

let n=5;

for(let i=0;i<n;i++){

    let str="";
    for(a=0;a<n-1-i;a++){
        str+= "- "
    }
    for(b=0;b<2*i+1;b++){
        str+= "* "
    }
    for(c=0;c<n-i-1;c++){
        str+="- "
    }

    console.log(str)
}

/*
Output: for n=4 row=4, column=9(including spaces)
- - - - * - - - - 
- - - * * * - - - 
- - * * * * * - - 
- * * * * * * * - 
* * * * * * * * * 
*/
//---------------------------------------------------------------