// Selection Sorting
//  In each round, you select the smallest element from the unsorted part and put it at the beginning

let arr = [2, 3, 5, 4, 1];
console.log(`Before sorting: ${arr}`);

for (let i = 0; i < arr.length - 1; i++) {
  let minIndex = i;
  for (let j = i + 1; j < arr.length; j++) {
    // from the inner loop we get the index of minimum element
    if (arr[j] < arr[minIndex]) {
      minIndex = j;
    }
  }
  let temp = arr[minIndex]; // Once we get the minimum element index we do the swapping.
  arr[minIndex] = arr[i];
  arr[i] = temp;
  // console.log(`After sorting: ${arr}, ${arr[i]} & ${arr[minIndex]}`);
}
console.log(`After sorting: ${arr}`);


// Time & Space Complexity
// Time Complexity: Worst,Best, and Average Case TC: O(N^2) (Important! Even if the array is already sorted, it still performs all comparisons).

// Space Complexity: O(1) (Constant space; it sorts the array "in-place").  We are using two variables (temp and minIndex), in Big O notation, we call this $O(1)$ or Constant Space. We don't usually say $O(2)$ or $O(3)$; any fixed number of extra variables is simply simplified to $O(1)$.