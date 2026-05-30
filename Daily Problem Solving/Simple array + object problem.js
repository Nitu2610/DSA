const users = [
 { id: 1, name: "Nitu", age: 29 },
 { id: 2, name: "Rahul", age: 24 },
 { id: 3, name: "Asha", age: 31 },
 { id: 4, name: "Vikram", age: 24 },
 ];



function groupUsersByAge(users) {
	let res= {};

	for(let ele of users) {

		if((res[ele.age])) {
			res[ele.age].push(ele.name)
		}
		else {
			res[ele.age]= [ele.name];
		}
	}
	console.log(res)
}
groupUsersByAge(users)


//--------------------------------------------

const names = ["Nitu", "Rahul", "Nitu", "Asha", "Rahul"];
const seen= new Set(names);
console.log(seen.size)
// ----------------------------
const entries = ["Nitu", "Rahul", "Asha", "Rahul"];

const seen= new Set();

const checkDup=()=> {
    for(let ele of entries){
        if (seen.has(ele) ) {
            console.log(`${ele} already entered`);
        } else {
            seen.add(ele)
        }
        }
    }
checkDup();
// ----------------------------------
const oldStudents = ["Nitu", "Rahul", "Asha"];

const newRegistrations = [
  "Rahul",
  "Asha",
  "Vikram",
  "Priya"
];

const oldSet= new Set(oldStudents);
let res=[];
for (let ele of newRegistrations){
    if( ! oldSet.has(ele)){
        res.push(ele)
    }
}
console.log(res)
// ------------------------
const nums = [2, 5, 1, 2, 3, 5, 1];

const seen=new Set();

for (let num of nums){
    if(!seen.has(num)){
        seen.add(num)
    }
    else {
        console.log(num); break;
    }
}
