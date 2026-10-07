let a1=[1, 1, 2, 5, 5, 5];
let a2=[2,3,4, 4, 4, 5, 6 ];

let seen=new Set(a1);
let res=[];

for(let i=0;i<a2.length;i++){
  if(!seen.has(a2[i])){
    seen.add(a2[i])
  }
}
for(let val of seen){
  res.push(val)
}

console.log(res)

// console.log([...seen])  // To optimized, used spread operator with an array. 

