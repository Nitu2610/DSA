 let a1=[ 1,2,3,6]; let a2=[ 1,2,5,9];


 let seen=new Set(a1);
let res=[];
 for(let i=0;i<a2.length;i++){
  if(seen.has(a2[i]) ) {
    res.push(a2[i]);
  }
 }
 console.log(res)