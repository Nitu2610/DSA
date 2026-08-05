let arr = [1, 1, 2, 2, 2, 3, 4, 4, 5, 5, 5];

let mp = new Map();

for (let i = 0; i < arr.length; i++) {
  if (!mp.has(arr[i])) {
    mp.set(arr[i], (mp.get[arr[i]] || 0) + 1);
  } else {
    mp.set(arr[i], mp.get(arr[i]) + 1);
  }
}

for (let [key, value] of mp) {
  if (value === 1) {
    console.log(key);
    break;
  }
}
