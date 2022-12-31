// Write a function named marco that returns "polo".

// Pseudocode:
// create a function called marco
// return polo

// const marco = (() => {
//     return "polo"
// })
// console.log(marco())

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

// Pseudocode
// create a function called greeting
// takes in a name as an argument
// returns "welcome, <person's name here>!"

// const greeting = ((name) => {
//     return `welcome, ${name}!`
// })
// console.log(greeting("Shannon"))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

// Pseudocode
// create function called oddOrEven that takes a number as an argument and returns whether the number is odd or even
// input = number
// output = odd or even

// const oddOrEven = ((num1) => {
//     if (num1 % 2 === 0) {
//         return "even"
//     } else {
//         return "odd"
//     }
// })
// console.log(oddOrEven(5))

// test Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

// Pseudocode
// create function called triple that takes a number as an argument and returns number * 3
// input = number
// output = number * 3

// const triple = ((number) => {
//     return number * 3
// })
// console.log(triple(9))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

// Pseudocode
// create function called multiply that takes two numbers as arguments
// two parameters
// returns the result of the numbers multiplied together
// input = num1, num2
// output = result

// const multiply = ((num1, num2) => {
//     return num1 * num2
// })
// console.log(multiply(2, 5))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// Psuedocode
// create function called divisibleBy that takes two numbers as arguments
// returns whether first number is evenly divisible by the second number
// if first number is divisible by second number, logs "num1 is divisible by num2"

// const divisibleBy = ((num1, num2) => {
//     if (num1 % num2 === 0) {
//         return `${num1} is divisible by ${num2}`
//     }
// })
// console.log(divisibleBy(10, 5))

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

// Pseudocode
// create function called assignGrade that takes a number score as an argument and returns the letter grade for the score
// one parameter, one argument = number
// returns a string/letter

// const assignGrade = ((num1) => {
//     if (num1 >= 90 && num1 <= 100) {
//         return "A"
//     } else if (num1 >= 80 && num1 <= 89) {
//         return "B"
//     } else if (num1 >= 70 && num1 <= 79) {
//         return "C"
//     } else {
//         return "please try again"
//     }
// })
// console.log(assignGrade(82))


// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

// Pseudocode:
// create function called isLonger that takes in two parameters/strings 
// returns the string that is longest 

// const isLonger = ((string1, string2) => {
//     if (string1.length > string2.length) {
//         return string1
//     } else if (string2.length > string1.length) {
//         return string2
//     }
// })
// console.log(isLonger("hello good people", "goodbye good people"))

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// Pseudocode
// create function called greaterNum that takes two parameters/numbers and returns which is greater

// const greaterNum = ((num1, num2) => {
//     if (num1 > num2) {
//         return num1
//     } else if (num2 > num1) {
//         return num2
//     }
// })
// console.log(greaterNum(299, 200))

// -. Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

// const yelling = (string) => {
//    return string.toUpperCase()
// }
// console.log(yelling("shannon"))


// 🏔 Stretch Goals
// The World Translator

// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// Have your function default to returning English.
// The Pluralizer

// Pseudocode
// create function called helloWorld that takes in a language code as an argument and returns "Hello World!" in the given language
// default should return in English
// input: language code
// output: "Hello World!" in given languag

const helloWorld = ((lang) => {
    if (lang == "fr") {
        return 'Bonjour tout le monde!'
    } else if (lang == "es") {
        return 'Hola Mundo!'
    } else {
        return "Hello World!"
    }
})
console.log(helloWorld("es"))

// Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
// Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".
// pluralizer(5, "cat")
// // output: "5 cats"

// pluralizer(1, "dog")
// // output: "1 dog"

// pluralizer(9, "dog")
// // output: "9 dogs"

// pluralizer(1, "people")
// // output: "1 person"

// pluralizer(3, "people")
// // output: "3 people"

  