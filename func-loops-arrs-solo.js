// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
// const testArr2 = [4, 6, 9, 10]
// const testArr1 = [3, 9, 15, 4, 10]
// // output: [9, 27, 45, 12, 30]

// myArr1 = [3, 4, 5]

// const mult3 = ((array) => {
//     let newArr = []
//     for (let i = 0; i < array.length; i++) {
//         newArr.push(array[i] * 3)
//     }
//     return newArr
// })
// console.log(mult3(myArr1))


// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// // output: [-7, 3, 5, 13]

// const onlyOdd = ((array) => {
//     let newArr = []
//     for (let i = 0; i < array.length; i++) {
//         newArr.push(array[i] % 2 === 1)
//     }
//     return newArr.join(" ")
// })
// console.log(onlyOdd(testArr2))

// const onlyOdd = ((array) => {
//     let newArr = []
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 !== 0) {
//         newArr.push(array[i])
//         }
//     }
//     return newArr
// })
// console.log(onlyOdd(testArr2))

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
const comboArr = [
  7,
  "n",
  true,
  "i",
  "c",
  10,
  "e",
  -388,
  "w",
  3,
  "o",
  0,
  "r",
  false,
  "k"
]
// create a function that takes in an array and returns a string with only letters
// input: array
// output: "nicework"
// use .typeof method on array test

const lettersOnly = (array) => {
    let letters = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] == "string") {
            letters.push(array[i])
        }
    }
    let makeString = letters.join("")
    return makeString
}
console.log(lettersOnly(comboArr))


// Create a function that takes in an array of numbers and returns the sum.
const addThese1 = [1, 2, 3, 4]
// // output: 10

// create function called sumOf
// take in an array
// iterate over the array to each element
// add each element together until the loop ends
// return the sum off all elements, integer

// const sumOf = ((array) => {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum = array[i] + sum
//     }
//     return sum
// })
// console.log(sumOf(addThese1))

// const addThese2 = []
// // output: 0

// const sumOf = ((array) => {
//     let sum = 0
//     for (let i = 0; i < array.length; i++) {
//         sum = array[i] + sum
//     }
//     return sum
// })
// console.log(sumOf(addThese2))

// Create a function that takes in an array of numbers and returns the index of the largest number.
const indexHighestNumber = [1, 4, 2, 3]
// // output: 1

// create function called largestNum that takes in an array of numbers and returns the index of the largest number
// indexOf largest?
// input = array 
// output = 1

// const largestNum = ((array) => {
//     let largest = array[0]
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > largest) {
//             largest = array[i]
//         }
//     }
//     return array.indexOf(largest)
// })
// console.log(largestNum(indexHighestNumber))



// 🏔 Stretch Goals
// Create a function that takes in two arrays and returns one array with no duplicate values.
const arr1 = [3, 7, 10, 5, 4, 3, 3]
const arr2 = [7, 8, 2, 3, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]

// Pseudocode:
// first join the arrays using concat
// save in new variable
// then use new Set to iterate over arrays and remove dupes
// save in new variable
// return new variable/array


const noDupes = (arr1, arr2) => {
  let newArr = (arr1.concat(arr2))
  let uniqueNums = [...new Set(newArr)]
  return uniqueNums
  }
console.log(noDupes(arr1, arr2))

// Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
const arr3 = [6]
const arr4 = [0]
// input: [6], [0]
// output: [0, 0, 0, 0, 0, 0]

const makeArrayOf = (value, length) => {
  var arr = [], i = length;
  while (i--) {
    arr[i] = value;
  }
  return arr;
}

console.log(makeArrayOf(0, 6)) // [0, 0, 0, 0, 0]

// makeArrayOf('x', 3); // ['x', 'x', 'x']

// const test = [1, 2, 3, 4, 5]
// console.log(arrayLength.fill(0, 1))

// const arrayLength = 4
// const arrayValue = 11
// // output: [11, 11, 11, 11]

// Gonna try it using a higher order function and a for loop
// HOF - iterate over the array and replace each value/index with 0, possibly using foreach
// ForLoop = iterate over array, exchange each value/index with 0, possibly using .filter
// two parameters, two numbers 

// const filled = (arr1, arr2) => {
//   for(let i = 0; i < arr1.length; i++) {
//   arr1.apply(null, arr2(6)).map(Number.prototype.valueOf,0);
// return newArray
//   }
// }

// const filledUp = ((arr3, arr4) => {
//   let newArr = arr3(6+1).join('0').split('')
//   return newArr
// })
// console.log(filledUp(arr3))









// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
// const addUp1 = 4
// // 1 + 2 + 3 + 4 = 10
// // output: 10

// const addUp2 = 10
// // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// // output: 55

// const addUp3 = 600
// // output: 180300


// 🏔 Epic Goals
// Create a function called highLow that takes in a number and returns whether the number is higher or lower than the "answer".
// Create an HTML page and link your JavaScript file. More info here.
// As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive).
// As a user, I can see if my guess is too high or too low.
// As a user, if I guess the "answer" correctly I am notified that I won.
// As a user, I can continue to guess the "answer" until I am correct.
// STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message.