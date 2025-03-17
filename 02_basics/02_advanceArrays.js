// ================= Advanced JavaScript Arrays =================

// Different data types in arrays
let mixedArr = [1, "hello", { name: "John" }, true, null, undefined, NaN, Symbol("sym")];

/* ================= SLICE vs SPLICE ================= */

// 1. slice(start, end) - Returns a portion of the array without modifying it.
let slicedArr = mixedArr.slice(1, 4); 
console.log("Sliced:", slicedArr); // ["hello", { name: "John" }, true]

// Negative case: Exceeding index range
console.log("Slice out of bounds:", mixedArr.slice(10, 15)); // []

// 2. splice(start, deleteCount, ...items) - Modifies the array by removing or adding elements.
let splicedArr = mixedArr.splice(1, 2, "NewString", 999);
console.log("Spliced:", splicedArr); // ["hello", { name: "John" }]
console.log("After Splice:", mixedArr); // [1, "NewString", 999, true, null, undefined, NaN, Symbol("sym")]

// Negative case: Using negative deleteCount
let testArr = [1, 2, 3];
console.log(testArr.splice(1, -1)); // [] (No deletion occurs)

/* ================= CONCAT with Different Data Types ================= */

let numbers = [1, 2, 3];
let strings = ["a", "b", "c"];
let objects = [{ x: 1 }, { y: 2 }];
let booleanArr = [true, false];

// Concatenating different types
let combinedArr = numbers.concat(strings, objects, booleanArr);
console.log("Concatenated Array:", combinedArr);

/* ================= ADVANCED FIND & FILTER ================= */

// find() - Returns the first element that matches the condition
console.log("Find Object:", objects.find(obj => obj.x === 1)); // { x: 1 }

// Negative case: Searching for a non-existing object property
console.log("Find Non-Existent:", objects.find(obj => obj.z === 3)); // undefined

// filter() - Returns all matching elements
console.log("Filter Even Numbers:", numbers.filter(n => n % 2 === 0)); // [2]

/* ================= SORTING ADVANCED CASES ================= */

// Default sort() (converts numbers to strings)
let numArr = [30, 100, 25, 2];
console.log("Default Sort:", numArr.sort()); // [100, 2, 25, 30] (Incorrect)

// Correct numerical sorting
console.log("Correct Sort:", numArr.sort((a, b) => a - b)); // [2, 25, 30, 100]

// Sorting an array of objects
let people = [{ name: "John", age: 30 }, { name: "Alice", age: 25 }];
console.log("Sorted by Age:", people.sort((a, b) => a.age - b.age));

/* ================= ADVANCED REDUCE ================= */

// reduce() - Summing numbers
let sum = numArr.reduce((acc, val) => acc + val, 0);
console.log("Reduced Sum:", sum); // 157

// reduce() - Grouping by age
let grouped = people.reduce((acc, person) => {
    acc[person.age] = person.name;
    return acc;
}, {});
console.log("Grouped By Age:", grouped); // { 30: "John", 25: "Alice" }

/* ================= ADVANCED MAP ================= */

let upperCaseStrings = strings.map(str => str.toUpperCase());
console.log("Uppercased:", upperCaseStrings); // ["A", "B", "C"]

/* ================= ADVANCED SOME & EVERY ================= */

console.log("Some are numbers:", mixedArr.some(el => typeof el === "number")); // true
console.log("All are numbers:", mixedArr.every(el => typeof el === "number")); // false

/* ================= ADVANCED FLAT & FLATMAP ================= */

// flat() - Flattens a nested array
let nestedArr = [1, [2, [3, 4], 5], 6];
console.log("Flat Level 1:", nestedArr.flat(1)); // [1, 2, [3, 4], 5, 6]
console.log("Flat Level 2:", nestedArr.flat(2)); // [1, 2, 3, 4, 5, 6]

// flatMap() - Maps and flattens
let doubledFlatMap = numbers.flatMap(num => [num, num * 2]);
console.log("FlatMap Example:", doubledFlatMap); // [1, 2, 2, 4, 3, 6]

/* ================= INTERVIEW QUESTIONS ================= */

// Q1: What is the difference between slice() and splice()?
// A: slice() does not modify the original array, while splice() does.

// Q2: How do you remove duplicates from an array?
let dupArr = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr = [...new Set(dupArr)];
console.log("Unique Array:", uniqueArr); // [1, 2, 3, 4, 5]

// Q3: How do you sort an array of objects?
let products = [{ price: 200 }, { price: 100 }, { price: 150 }];
console.log("Sorted by Price:", products.sort((a, b) => a.price - b.price));

// Q4: What happens if you use delete on an array element?
let delArr = [1, 2, 3];
delete delArr[1];
console.log("After Delete:", delArr); // [1, empty, 3]

// Q5: How do you shuffle an array?
let shuffleArray = [1, 2, 3, 4, 5];
shuffleArray.sort(() => Math.random() - 0.5);
console.log("Shuffled:", shuffleArray);

// Q6: How do you reverse an array without modifying it?
let reversed = [...numbers].reverse();
console.log("Reversed Without Modification:", reversed);

// Q7: How do you merge two arrays without duplicates?
let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];
let mergedUnique = [...new Set([...arr1, ...arr2])];
console.log("Merged Unique:", mergedUnique); // [1, 2, 3, 4, 5]

// Q8: How do you convert an array of objects into an object?
let keyValueArr = [{ key: "a", value: 1 }, { key: "b", value: 2 }];
let objFromArr = keyValueArr.reduce((acc, item) => {
    acc[item.key] = item.value;
    return acc;
}, {});
console.log("Object from Array:", objFromArr); // { a: 1, b: 2 }

// Q9: How do you check if two arrays are equal?
function arraysEqual(arrA, arrB) {
    return JSON.stringify(arrA) === JSON.stringify(arrB);
}
console.log("Are equal:", arraysEqual([1, 2], [1, 2])); // true

// Q10: How do you find the most frequent element in an array?
let freqArr = [1, 2, 2, 3, 3, 3, 4];
let freqMap = freqArr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
}, {});
let mostFrequent = Object.keys(freqMap).reduce((a, b) => freqMap[a] > freqMap[b] ? a : b);
console.log("Most Frequent:", mostFrequent); // 3
