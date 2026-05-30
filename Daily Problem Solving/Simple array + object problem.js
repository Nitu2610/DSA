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
			let val=[];
			val.push(ele.name)
			res[ele.age]= val;
		}
	}
	console.log(res)
}
groupUsersByAge(users)