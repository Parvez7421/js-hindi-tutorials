// JavaScript Arrays - Built-in Functions with Examples

// 1. Creating an array
let arr = [1, 2, 3, 4, 5];

/* -------------------- Basic Array Methods -------------------- */

// push() - Adds elements to the end
arr.push(6); // [1, 2, 3, 4, 5, 6]

// Negative case: pushing undefined or null
arr.push(undefined); // [1, 2, 3, 4, 5, 6, undefined]

// pop() - Removes last element
arr.pop(); // [1, 2, 3, 4, 5]

// Negative case: popping from an empty array
let emptyArr = [];
console.log(emptyArr.pop()); // undefined

// shift() - Removes first element
arr.shift(); // [2, 3, 4, 5]

// Negative case: shifting from an empty array
console.log(emptyArr.shift()); // undefined

// unshift() - Adds elements to the beginning
arr.unshift(1); // [1, 2, 3, 4, 5]

// splice(start, deleteCount, item1, item2, ...) - Modifies an array
arr.splice(2, 1, 99); // [1, 2, 99, 4, 5] (Replaces element at index 2)

// Negative case: deleting more elements than available
console.log(arr.splice(10, 2)); // [] (No error but returns an empty array)

// slice(start, end) - Returns a portion of the array
let slicedArr = arr.slice(1, 3); // [2, 99]

// Negative case: using an invalid index
console.log(arr.slice(10, 20)); // [] (Returns empty array)

// concat() - Merges arrays
let newArr = arr.concat([6, 7, 8]); // [1, 2, 99, 4, 5, 6, 7, 8]

// includes() - Checks if an element exists
console.log(arr.includes(99)); // true
console.log(arr.includes(50)); // false

// indexOf() - Returns index of first occurrence
console.log(arr.indexOf(99)); // 2
console.log(arr.indexOf(50)); // -1 (Not found)

// lastIndexOf() - Returns index of last occurrence
console.log([1, 2, 3, 2].lastIndexOf(2)); // 3

// join() - Converts array to a string
console.log(arr.join('-')); // "1-2-99-4-5"

// reverse() - Reverses an array
console.log(arr.reverse()); // [5, 4, 99, 2, 1]

// sort() - Sorts an array (by default, sorts as strings)
console.log([3, 10, 2].sort()); // [10, 2, 3] (Incorrect order due to string comparison)
console.log([3, 10, 2].sort((a, b) => a - b)); // [2, 3, 10] (Correct numerical sort)

// map() - Transforms each element
console.log(arr.map(x => x * 2)); // [10, 8, 198, 4, 2]

// filter() - Filters elements
console.log(arr.filter(x => x > 3)); // [5, 4, 99]

// find() - Finds first matching element
console.log(arr.find(x => x > 3)); // 5

// findIndex() - Finds index of first matching element
console.log(arr.findIndex(x => x > 3)); // 0

// every() - Checks if all elements satisfy condition
console.log(arr.every(x => x > 0)); // true

// some() - Checks if at least one element satisfies condition
console.log(arr.some(x => x > 100)); // false

// reduce() - Reduces array to a single value
console.log(arr.reduce((acc, val) => acc + val, 0)); // Sum of array elements

// Negative case: Using reduce on an empty array without an initial value
try {
    [].reduce((acc, val) => acc + val);
} catch (error) {
    console.log("Error: " + error.message); // TypeError: Reduce of empty array with no initial value
}

// forEach() - Iterates over array
arr.forEach((val, index) => console.log(`Index ${index}: ${val}`));

// flat() - Flattens a nested array
console.log([1, [2, [3, 4]], 5].flat(2)); // [1, 2, 3, 4, 5]

// flatMap() - Maps and flattens
console.log([1, 2, 3].flatMap(x => [x, x * 2])); // [1, 2, 2, 4, 3, 6]

// fill(value, start, end) - Fills array with a value
console.log(new Array(5).fill(0)); // [0, 0, 0, 0, 0]

/* ---------------- Interview Questions ---------------- */

// Q1: What is the difference between map() and forEach()?
// A: map() returns a new array, while forEach() does not return anything.

let result1 = arr.map(x => x * 2); // Returns a new transformed array
let result2 = arr.forEach(x => x * 2); // No return value

// Q2: How to remove duplicates from an array?
let duplicateArr = [1, 2, 2, 3, 4, 4];
let uniqueArr = [...new Set(duplicateArr)]; // [1, 2, 3, 4]

// Q3: How to find the second largest number in an array?
let numbers = [10, 20, 5, 30, 25];
let secondLargest = [...new Set(numbers)].sort((a, b) => b - a)[1];
console.log("Second Largest:", secondLargest); // 25

// Q4: What happens when you use delete on an array?
let testArr = [1, 2, 3];
delete testArr[1]; // Leaves an empty slot
console.log(testArr); // [1, empty, 3]

// Q5: How to shuffle an array?
let shuffleArr = [1, 2, 3, 4, 5];
shuffleArr.sort(() => Math.random() - 0.5);
console.log("Shuffled Array:", shuffleArr);

