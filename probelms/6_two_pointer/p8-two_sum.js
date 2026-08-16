let arr = [2, 7, 11, 15];
let target = 18;

let mp = new Map();
for (let i = 0; i < arr.length; i++) {
  let k = target - arr[i];
  if (!mp.has(k)) {
    mp.set(arr[i], i);
  } else {
    console.log([mp.get(k), i]);
  }
}
