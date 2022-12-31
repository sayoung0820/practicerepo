// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.

// take in an array of numbers 
// multiply all numbers by 10
// use .map to return a new array
// use .filter to return a subset of the array
// this function will use .map in the higher order function to iterate and return a new array with updated values

// const arr1 = [3, 9, 15, 4, 10]
// // output: [30, 90, 150, 40, 100]
// const numsArray = [2, 4, 6, 8]

// const mult10 = (array) => {
//     return array.map((value) => value * 10)
// }
// console.log(mult10(arr1))



// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const arr2 = [2, 7, 3, 5, 8, 10, 13]
const arr3 = [5, 9, , 10, 25]
// // output: [7, 3, 5, 13]

// take in an array of numbers 
// return new array with only odd numbers
// use .map to return a new array
// use .filter to return a subset of the array
// this function will use .map in the higher order function to iterate and return a new array with updated values

// const onlyOdds = (array) => {
//     return array.filter((value) => {
//         return value % 2 === 1
//     })
// }
// console.log(onlyOdds(arr3))

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // output: "nicework"

// write function called lettersOnly that takes in an array of numbers and letters and returns a string with only letters
// iterate through array with .filter to return a subset of the array
// then return a string with only the letters 
// convert to string using .join

// const newLetters = (array) => {
//     let lettersOnly = array.filter((value) => typeof value == "string")
//     return lettersOnly.join("")
// }
// console.log(newLetters(comboArr))

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// // output: [58, "abcd", true]

// take in array of mixed data
// inside function create variable to hold removed values
// .filter to iterate and return subset of array
// return final variable test

// const notFalse = (array) => {
//     let oneType = array.filter(value => typeof value ==  "number" && "string")
//     let newString = oneType.filter(value => value !== ("58" || "abcd" || "true"))
//     return newString
// }
// console.log(notFalse(filterArrayValues))



// 🏔 Stretch Goals
// Create a function that takes in a string and returns a new string with all the vowels removed.
const str = "javascript is awesome"
// // output: "jvscrpt s wsm"

// create function called allVowels
// takes in string, returns new string with all vowels removed
// 

const allVowels = (string) => {
    let vowels = "aeiou"
    let noVowels = []
   let newStr = string.remove(vowels)
    return newStr
}
console.log(allVowels(str))

// ((value, index) => index === "a")
// console.log(allVowels(str))


// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// const arr1 = [3, 7, 10, 5, 4, 3]
// const arr2 = [7, 8, 2, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]