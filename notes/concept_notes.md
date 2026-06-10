
#   DSA Notes


### 1. 📌 Pattern Problems

* All pattern problems use nested loops.
* Outer loop → controls the number of lines (rows).
* Inner loop → controls the number of columns and is usually related to the row number.
* Print "*" (or required symbol) inside the inner loop.
* Always observe symmetry in the pattern.


### 2. 🔁 Recursion

* Recursion: When a function calls itself until a base condition is met.
* The function keeps calling itself and stops when the base condition is satisfied.
* In the call stack, execution follows FILO (First In, Last Out).
* A Recursion Tree is a diagram used to visualize recursive calls.

            let sum = 0;

            function A() {
            sum++;
            console.log(sum);
            if (sum == 10) {   // base condition
                return;
            }
            return A();       // recursive call
            }

            A();

### 3. 🧮 Hashing

* Hashing is a technique to pre-store data (usually frequencies) so it can be fetched in O(1) time.
* We first precompute and store values, then use them directly when needed.

* 📦 Array-Based Hashing (Frequency Array)
Idea:
Given an array: [1, 1, 2, 3, 3]

    ##### Steps:
    1. Create a fixed-size array initialized with 0 (size depends on max value).
    2. Traverse the original array and do: freq[arr[i]]++
    3. Now freq[x] gives the count of number x in O(1) time.
            Example Result:
            freq[1] = 2
            freq[2] = 1
            freq[3] = 2 <br>

##### 🗺️ Array Hashing vs Map Hashing

* Array-based hashing:
    You manually convert key → number (e.g., 'a'→0, 'b'→1) and store like arr[2] = 5.
* Map / Hash Table:
    You directly do map["c"] = 5 and the structure automatically hashes the key internally.
* Core Idea:
    With arrays you design the address, with hash tables the system finds the address.

##### ⏱️ Time & Space Complexity of Hashing
* Time Complexity :
    * Best & Average case: O(1) 
    * Worst case: O(N) (due to collisions)
* Space complexity: O(N)
* Hashing is O(1) on average, but can degrade to O(N) in the worst case if many keys collide.

##### ⚙️ Common Hashing Methods

* Division method
* Folding method
* Mid-square method

###### ✅ Interview One-Liner
Hashing stores precomputed values to allow O(1) average-time lookup, but can degrade to O(N) in worst case due to collisions.


### 4.  Sorting Algorithms
#### Classification

##### Simple Sorts (O(N^2))
##### 1. Selection Sort
- Idea: Pick smallest from unsorted, put in front
- Time: O(N^2) (best/avg/worst)
- Space: O(1)
- Stable: No
- Use: When memory writes are expensive


#####  2. Bubble Sort
- Idea: Swap adjacent if wrong; largest goes to end
- Time: O(N^2), Best: O(N) if optimized
- Space: O(1)
- Stable: Yes
- Use: Rarely used


##### 3. Insertion Sort
- Idea: Insert element into correct position in sorted part
- Time: Best O(N), Avg/Worst O(N^2)
- Space: O(1)
- Stable: Yes
- Use: Small or nearly sorted arrays (used in TimSort)

##### Efficient Sorts (O(N log N))
- Merge Sort
- Quick Sort (avg)
- Heap Sort
- TimSort (Java, Python)



