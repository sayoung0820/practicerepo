

// Variables - placeholder for data that can be held in local memory and updated, changed, manipulated by logic
    // examples - var, let, const
// Can be whatever you want to name them
// Use the assigment operator = for variables
    // var myName = "Ashley"
    // var ourCohort = "Golf"
    // var myLove = "KT"
    // var child1 = "Zoe"
    // var child2 = "Gia"

// const { it } = require("node:test");
// const { describe } = require("yargs");

    // var thingsMylifeArray = [myName, ourCohort, myLove, child1, child2]
    // console.log(thingsMylifeArray)

    // console.log(myName)
    // console.log(ourCohort)
    // // console.log(myLove)
    // console.log(`${myName} is the best coder in ${ourCohort}`)
    // console.log(`${myName} is going to be in a totally different tax bracket and place in life in 2023}`)

    // console.log(`${child1} and ${child2} are the best things in my life!`)

    // var catsName = "FeeFee"
    // var neighborName = "MsBessie"

    // console.log(catsName)
    // console.log(neighborName)
    // console.log(`${catsName} is so spoiled by ${neighborName}`)

    // "charlie".toUpperCase()
    // console.log("charlie".toUpperCase()
    // )
    // console.log("shannon".toUpperCase())

    // var ourCohort = "Golf"
    // console.log(ourCohort)
    // console.log(ourCohort[2].toUpperCase())

    // var cianiCar = "Porsche Macan"
    // var anthonyCar = "Dodge Viper"
    
    // console.log(cianiCar)
    // console.log(anthonyCar)

//    ------------------------------------------------------------------------------------------------------- // 
// Javascript CONDITIONALS
//  else/if aka decision makers or true/false
// determines the result then what to do about it

// if(condition is true) {javascript then needs to do this action}
// (if condition is not true){what action do we do}
// else(if not true){do this action} 
// curly brackets indicate conditional
// const cannot be changed to anything else while var can  be changed to anything

// if(true){
//     console.log("I'm true")
// }

// else(
//     console.log("Here is the else")
// )

let myName = "Ashley"

if(myName === "Shannon"){
    console.log("Hey Shannon")
} else(
    console.log("Hey!")
)

    // Else if - when we need to have more than two possible outcomes
// let num1 = 9
// let num2 = "9"

// if(num1 > num2) {
//     console.log(`${num1} is greater than ${num2}`)
//  } else if(num1 < num2) {
//     console.log(`${num1} is less than ${num2}`)
//           }      else if(num1=== num2)
//         console.log(`${num1} and ${num2} are the same`)
//         else {
//             console.log("Invalid entry")
//         }

// console.log(3 === 3)
// console.log(3 == 3)

// var myName = "Shannon"
// console.log(`${myName} is great`)

// const sayHello = "greeting"
// console.log(sayHello)

// if(condition is true) {
//     do this action
//    } else {
//         do this instead
//     }
// }

// if(true) {
//      console.log("I'm true")
// } else {
//     console.log("Here is the else")
//     }

//     var myName = "Shannon"

//     if(myName === "Shannon") {
//         console.log("Hey Shannon") 
//     }else {
//                 console.log("Hey!")
//             }

            // let numbers1 = 24
            // let numbers2 = 32
            // let numbers3 = 32

            // if(numbers1 > numbers2) {
            //     console.log(`${numbers1} is smaller than ${numbers2}`) 
            //  } else if(numbers2 > numbers1) {
            //         console.log(`${numbers2} is larger than ${numbers1}`) 
            //          } else if(numbers3 === numbers2) {
            //         console.log(`${numbers3} and ${numbers2} are the same`)
            //          }

//                      let num1 = 4
//                      let num2 = "4"
//                      let num3 = 6

//                      if(num1 < num3) {
//                         console.log(`${num1} is less than ${num3}`)
//  }                      else if(num1 == num2) {
//                         console.log(`${num1} and ${num2} are the same`)
//  }                      else {
//                         console.log("invalid entry")
//  }
// ---------------------------------------------------------------------------------------------------

// MUTATORS
// var zoeCar = "marta"
// var giaCar = "hotwheels"
// var shannonCar = "mommymobile"
// var momCar = "volvo"

// var famCarsArray = [zoeCar, giaCar, shannonCar, momCar]

// console.log(famCarsArray)
// console.log(famCarsArray.length)
// console.log(famCarsArray[0])

// famCarsArray.push("Mom")  // adds a value to the end of the array
// console.log(famCarsArray)

// ransomFamArray = ["shannon", "gia", "zoe", "mom"]
// console.log(ransomFamArray)
// ransomFamArray.pop()   // removes the last value in the array
// console.log(ransomFamArray)

// ransomFamArray.shift()
// console.log(ransomFamArray) // removes the 0 (first name in index) index from the array

// ransomFamArray.unshift("Bubba")
// console.log(ransomFamArray) //places a new value at the 0 index of the array and moves the other indexes over

// ransomFamArray.reverse()
// console.log(ransomFamArray) //reverses order of array

// ransomFamArray.sort()
// console.log(ransomFamArray.sort())  // puts array in alphabetical order

// let numbers4 = [10, 5, 25, 40, 3, 2, 9]
// numbers4.sort((a, b) => a - b)
// console.log(numbers4)

// -------------------------------------------------------------------------------------------------------
// ACCESSORS - DO NOT CHANGE THE ORIGINAL ARRAY RATHER THEY GIVE A NEW ARRAY. WILL NEED TO CONSOLE.LOG THE METHODS OR ASSIGN A NEW VARIABLE TO THE METHODS ACTING ON THE ARRAY AND CONSOLE.LOG THAT VARIABLE

// .indexOf() will take an argument of data and return the first index that it finds that data at
// var countriesArray = ["Bali", "Singapore", "Egypt", "Istanbul"]
// console.log(countriesArray.indexOf("Egypt"))
// console.log(countriesArray.indexOf("Japan")) // returns -1 when looking for an index that is not inside the array

// .join() CONVERTS ARRAY INTO A STRING, TRANSFORMING DATA TYPES
// var countriesArray = ["Bali", "Singapore", "Egypt", "Istanbul"]
// console.log(countriesArray) // returns the array
// console.log(countriesArray.join()) // returns the array as a string 
// console.log(countriesArray.join(""))  // removes the commas in the string
// console.log(countriesArray.join(" "))  // will put a space in between the words in the string

// .split() CONVERTS STRING INTO AN ARRAY
// var countriesString = countriesArray.join(" ") // first we converted the array into a string using joing
// console.log(countriesString.split())  // then using split, the string returned as an array again

// .concat 
// var numsArray = [2, 4, 6]
// var lettersArray = [`a`, `b`, `c`,]
// var concatArrays = numsArray.concat(lettersArray)
// console.log(concatArrays)


// ARRAY DESTRUCTURING - ALLOWS YOU TO TAKE VARIABLES OUT OF ARRAYS BASED ON THE POSITION THEY ARE IN WITHIN THE BRACKET NOTATION
// var timeArray = ["October", 27, 2022] // if you wanted to know what part of this array was a month, day, or year
// var [month, date, year] = ["October", 27, 2022]  // rewrote the variable removing timeArray
// console.log(month)
// console.log(date)
// console.log(year)
// console.log(month, date, year)

// HOW TO USE DESTRUCTURING TO PULL APART YOUR NAMES TO USE A VARIABLES THROUGHOUT THE CODE
// IT'S BEST TO CREATE NEW VARIABLES FOR EACH STEP EXCEPT WHEN USING MUTATORS
// var userName = "Shannon Young"
// var splitName = userName.split(" ")
// console.log(splitName)
// var [firstName, lastName] = splitName
// console.log(firstName)
// console.log(lastName)

// -------------------------------------------------------------------------------------------------------

// LOOPS 
// ITERATION - PROCESS OF REPEATING OVER AND OVER
// VARIABLES
    //VAR - can be used anywhere (function scoped), let's your reassign the variable using var again in same block
    //LET - available only inside the block it is defined in, let's you reassign the variable but can't use let again in same block
    //CONST - unable to redeclare or reassign the variable, constant/fixed
    // TO CREATE A LOOP:
        // NEED TO KNOW WHERE TO START COUNTING (let index = 0)
        // WHERE TO STOP COUNTING 
        // AND HOW TO GET FROM THE STARTING POINT TO THE STOPPING POINT

    // FOR LOOPS ARE USUALLY USED ON ARRAYS
        // SO WE NORMALLY USE THE VARIABLE NAMED INDEX TO STORE THE CURRENT COUNT (THIS WILL OFTEN BE THE LETTER "I")
        // 

        // LONG HAND WAY TO WRITE FOR LOOPS
        //                         V where to stop, once it hits 10 or how ever many times we want to iterate, stop at 10
        // for(let index = 0; index < 10; index++) <<< how to get from the start to the stop
        //            ^^^where to start counting

        // SHORT HAND WAY TO WRITE FOR LOOPS
        // for(let i = 0; i < 10; i++) {
        //     console.log(i)
        // }

        // CONNECTING LOOPS TO ARRAYS
        // const numsArray = [5, 6, 7, 8, 9]
        // for(let i = 0; i < numsArray.length; i++) {   // we put .length to get the number of values in the array. we couldve put 5 
        //     console.log("current index:", i)
        //     console.log("current value:", numsArray[i])


        // LOGIC INSIDE LOOPS

        // practice: lets setup a loop that only returns odd numbers
        // for(let i = 0; i < numsArray.length; i++) {
        //     if(numsArray[i] % 2 !== 0)              // <<<< use this to get odd number
        //     console.log(`${numsArray[i]} is an odd number!`)
        // }

        // STRINGS AND ARRAYS HAVE SIMILAR PROPERTIES
            // BOTH ZERO INDEXED
            // BOTH USE LENGTH PROPERTY
            // BECAUSE OF THAT, WE CAN ITERATE ON A STRING WITH A FOR LOOP
            // create a function that counts the number of "E's"

            // const myString = "Hey there Shannon!"
            // let count = 0 
            // for(let i = 0; i < myString.length; i++) {
            //     if(myString[i] === "e") {
            //         count++
            //     }
            // }
            //     console.log(count)  // result is 3 for 3 letter "e's"

        //     var arr = [5, 5, 5, 2, 7]
        //     for(let i = 0; i < arr.length; i++) {
        //         if (arr[i] !==5) {
        //         console.log(arr[i])  // returns all numbers except the 5
        //     }
        // }


        //-----------------------------------------------------------------------------------------------------------------------------------


// FUNCTIONS

// Functions are reusable blocks of code that will always return an output
// 1. Declare a variable - const because we don't want it to change
// 2. Use arrow syntax (function expression) which uses the following  in each function every time
//      () - parenthesis, used to pass data through
//      => - arrow is the replacement for keyboard function
//      {} - curly braces, represent the area to write javascript code
//      return - every function must have a return


// const myFunction = () => {}
// return this code back

// to invoke the function = myFunction

// const makeCoffee = () => {
//     return"Coffee is made"
// }

// console.log(makeCoffee())


// Parameters and Aruguments
    // functions can take inputs and pass data through it
                        
    // parameter = coffeType
    // const makeCofee = (coffeType) => {
        // return `Enjoy your ${coffeType}`
    // }

//  console.log(makeCofee())
//  console.log(makeCofee("decaf"))
// console.log(makeCofee("Chai latte"))

// Pseudocode - writing process notes in plain English
    // establish your input and output, what is your data and what is the end goal

    // Exercise: Write a funcion that takes a coffeType and a size and return a statment with the appropriate price
        // create a function called makeCoffee
        // Input: coffeeType and size
        // Output should be a string that says "Your size coffee is $"
        // Use a conditional to make an evaluation on the size  of the coffee, the size will change the price of the coffee

            // if the size evaluates to large, it's $6
            // if the size evaluates to medium, it's $4
            // if the size evaluates to small, it's $2
            // we need an else to catch what doesn't fall into those values
            // else if none of the above is true, we will return an error

            // const makeCoffee = (coffeeType, size) => {
            // if(size === "large") {
            //     return `Your ${size} ${coffeeType} is $5.`
            // } else if(size === "medium") {
            //     return `Your ${size} ${coffeeType} is $4`
            // } else if(size === "small") {
            //     return `Your ${size} ${coffeeType} is $2`
            // } else {
            //     return "Sorry that is not on the menu"
            // }
            // }

            // console.log(makeCoffee("Shaken expresso with ice", "large"))
            // console.log(makeCoffee("Iced latte with soy milk", "small"))
            // console.log(makeCoffee("Machiato", "extra small"))
    

        // create a function called makeTea
        // // Input: teaType and size
        // // Output should be a string that says "Tea is better than coffee!"
        // // Use a conditional to make an evaluation on the size  of the tea, the size will change the price of the tea

        //  EXAMPLES ON HOW TO MAKE FUNCTIONS

    
        // const makeTea = (teaType, size) => {
        // if(size === "large") {
        //   return `Your ${size} ${teaType} is $5`
        //      } else if(size === "medium") {
        //  return `Your ${size} ${teaType} is $4`
        //      } else if(size === "small") {
        //  return `Your ${size} ${teaType} is $3` 
        //  }
        // }
        //     console.log(makeTea("chai latte", "small"))



        // Prompt: create a function called tallEnough that takes in a number called height
        // if height is less than 40 return "cannot ride the rollercoaster"
        // if height is greater than 40 return "Buckle up, let's ride!"

        // const tallEnough = (height) => {
        //     if (height < 40) {
        //         return "Cannot right the rollercoaster" 
        //     } else if(height >= 40)
        //     return "Buckle up, let's ride!"
        // }
        //     console.log(tallEnough(40))

        // const marco = () => {
        //     return "polo"
        // }
        // console.log(marco())

        // const greeting = (name) => {
        //     return `Welcome ${name}`
        // }
        // console.log(greeting("Lisa"))


        // const multiplier = (myNumber2, myNumber3) => {
        //     return myNumber1 * myNumber3
        // }

        // var myNumber1 = 3
        // var myNumber2 = 4
        // var myNumber3 = 5

        // // console.log(multiplier(myNumber2, myNumber3))
        // console.log(multiplier(myNumber1, myNumber2))

//-------------------------------------------------------------------------------------------------------------------------------------------

// LOOPS, FUNCTIONS, AND ARRAYS
    // FOR LOOPS USED TO ITERATE THROUGH AN ARRAY
    
    //Prompt: Create a function that takes a single array as a parameter and mutiplies each value inside by 5
        // need to create a for loop to iterate through the array
        // already created an array
        // created function called mult5 so we can invoke it later
        // takes in single array as a parameter, called arr. We use arr because it can be replaced with any of those arrays of numbers
        // create a new array to save all the multipled values

//     const myArrayOfNumbers = [1, 2, 3, 4, 5]

//     const mult5 = (arr) => {
//         let newArr = []
//     for(let i = 0; i < arr.length; i++) {
//         newArr.push(arr[i] * 5)
//     }
//     return newArr
//     }
// console.log(mult5(myArrayOfNumbers))

//-------------------------------------------------------------------------------------------------------------------------------------------

// HIGHER ORDER FUNCTIONS

// Built in methods for ARRAYS in Higher Order Functions
// .forEach()
// .map()
// .filter()

// VALUE, INDEX, ARRAY = THE THREE BASIC ARGUMENTS/PARAMETERS THAT A HIGHER ORDER FUNCTION CAN TAKE

// For each will do the command to EACH ITEM in the array with whatever you pass through your argument in the console log
// var showsArray = ["AHS", "Your Honor", "Let the right one In"]
// var numsArray = [2, 6, 3, 9]

// showsArray.forEach(() => {
    // console.log("Hey Shannon")
// })

// "Value" as an argument in the function
// showsArray.forEach((value) => {
    // console.log(`Hey Shannon, I hear you like the show ${value}`)
// })

// "Index" can also be used as an argument to return the index(location) of the value in the array
// showsArray.forEach((value, index) => {
    // console.log(`Hey Shannon, I hear you like the show ${value}, it's index is ${index}`)
// })

// "Array"
// showsArray.forEach((value, index, array) => {
    // console.log(`Hey Shannon, I hear you like the show ${value}, it's index is ${index}. It belongs to the array that contains ${array}`)
// })

// numsArray.forEach((value) => {
    // console.log(value * 10)
// })

// Map - can look at the data and return it as new data (used for most social media feeds)
// Takes same three arguments (value, index, array) as .forEach
// it ALWAYS returns to us a new array of the same length as the original array 
// that means we need to assign our map to a new variable
// the function in map needs a return
// when using only one single line to code, you don't need curly brackets or the word return

// var threesArray = [3, 6, 9, 12, 15]

// var mult5 = threesArray.map((value) => {
//     return value * 5
// })
// console.log(mult5)

// var mult3 = threesArray.map((value) => {
//     return value * 3
// })
// console.log(mult3)

// var evenOrNum = threesArray.map(value => {
//     if(value % 2 != 0) {
//         return value
//     }   else {
//         return "even"
//     }
// })
// console.log(evenOrNum)

// FILTER
    // works similar to map 
    // it returns to us an array BUT the array always wants to be shorter than the original array
    // filters out data from the array by looking for boolean as a return

//     var showsArray = ["AHS", "Your Honor", "Let the right one In"]
//     // let's filter out all of the letter "H's"
//     var searchH = showsArray.filter((value) => {
//         return value.includes("i") || value.includes("I")
//     })
// console.log(searchH)


//-------------------------------------------------------------------------------------------------------------------------------------

// Jest is a Javascript testing framework 
   // collection of files managed by yarn
	// Yarn is a package manager for javascript that contains code being shared by other developers

// to install jest: $ yarn add jest in terminal
// "DESCRIBE" method lists name of function
// "IT" method nested within the describe block that in plain words describes what the function does (copy from prompt)
// expect will invoke the functions and compare the result to a predetermined expected output
// node_modules - thousands of folders and files that makeup the framework
// package.json - contains info about dependencies
// yarn.lock - contains current versions of dependencies
// If you get “item is not defined” error, considered a good error. Look for where the red arrows are pointing in the terminal 
// DON’T NEED CONSOLE.LOG WITH JAVASCRIPT TESTING METHOD

// TDD - Test Driven Development = BREAKING THE CODE INTO TESTS, BREAKING THE BIG PROBLEM INTO SMALLER ONES

// Red - Green - Refactor
	// 1. Write the test first
	// 2. Run the test to see it fail (red)
	// 3. Write the code
	// 4. Run the test to see it pass (Green)
	// 5. Refactor if necessary (is there a better way to write this code to make it look better)

// // Jest template
// describe(“functionName”,  ( ) => { 
// } if(“describes what functionName does”, ( ) => {
// expect(functionName(“pats argument through as needed )).toEqual(“expected output”)
// })
// })

// Example
// // Create a function called greeter that returns a string that says Hi, Golf 2022!

// // Input: none
// // Output: “Hi, Golf 2022!”


// describe("greeter", () => {
//     it("returns a string that says Hi, Golf 2022!"), () => {
//         expect(greeter()).toEqual("Hi, Golf 2022!")
//     }
// })

// // To run $ yarn jest

// // JEST - PART 2

// Example
// // create a function that returns “help others” if you do understand or “ask questions” if you do not understand

// // Input: “yes” 
// // Output: “help others”

// // Input: “no”
// // Output: “ask questions”

// describe(“doYouUnderstand”,  ( ) => { 
// } if “returns `help others` if you do understand or `ask questions` if you do not understand”, ( ) => {
// expect(doYouUnderstand(“yes” )).toEqual(“help others”)
// expect(doYouUnderstand(“no” )).toEqual(“ask questions”)
// })
// })

// This returns “do you understand is not defined”. Good error, so let’s write pseudocode to determine why the error is happening

// // create a function called doYouUnderstand that takes in a string as an argument 
// // one parameter: .string
// // write a conditional to evaluate if string equals “yes”
// 	// return string “help others”
// // otherwise, we need to evaluate if string equals “no”
// 	// return “ask questions”

// // create variable 
// const doYouUnderstand = (string)=> {
// If(string.toLowerCase() === “yes”) {
// } Else if (string.toLowerCase === “no”) {
// Return (ask questions”
// } Else {
// Return “oops, something went wrong”
// }
// }

// Example 
// // Create a function that takes in an array and a string and appends the string to the end of the array

// // Create a function called becomeADeveloper that takes in an array and a string as an argument
// // Create two parameters: array and string
// // use the concat method to add the string into the array
// // return result

// // Input: [“take notes”, “pay attention”, “practice”, “take breaks”, “drink coffee”], ask questions”
// // Output: [“take notes”, “pay attention”, “practice”, “take breaks”, “drink coffee”, “ask questions”]

// describe(“becomeADeveloper”,  ( ) => { 
// } if(“takes in an array and a string and appends the string to the end of the array”, ( ) => {
// Let input1 = [“take notes”, “pay attention”, “practice”, “take breaks”, “drink coffee”]
// Let input2 = “ask questions”
// Let expectedOutput = [“take notes”, “pay attention”, “practice”, “take breaks”, “drink coffee”, “ask questions”]
// expect(becomeADeveloper(“(input1, input2) ).toEqual(expectedOutput)
// })
// })
//  Const becomeADeveloper = (array, string) => {
// Return array.concat(string)
// }


// Example
// // Create a function that allows a customer to filter the cost of an item dynamically by selecting a cost range

// // input: (10, 22, 33, 777, 1000, 4.59, 3.5, 499), 0, 100
// // output: [10, 22, 33, 4.59, 3.5]

// describe(“functionName”,  ( ) => { 
// } if(“describes what functionName does”, ( ) => {
// expect(functionName(“pats argument through as needed )).toEqual(“expected output”)
// })
// })


// // 60 + 40
// console.log(60 + 40)

// // 50 / 50
// console.log(50 / 50)

// // 50 * 50
// console.log(50 * 50)

// 36000 * 36000touch
// console.log(36000 * 36000)

// console.log("Shannon")

// console.log(45-25)

// Exponents
// 25 ** 5
// console.log(25 ** 5)

// Modulus/Module
// console.log( 6 % 2)
// console.log (5 % 2)
// console.log("red solo cup")
// console.log("3" , 3)

// console.log("Shannon" [2])

// lose equality best for comparing different data types
// console.log(3 == 3) 
// console.log(4 == 3)
// console.log(2 + 1 == 3)
// console.log("three" == 3)
// console.log('3' == 3)
// console.log('three' == 3)

// strict equality compares the actual value
// console.log(3 === 3)
// console.log("three" === 3)
// console.log('3' === 3)

// greater than
// 4 > 3

// less than
// 3 < 4

// greater than or equal to
// 5 >= 5
// 5 >= 2

// less than or equal to
// 2 <= 5
// 5 <= 5

// console.log(5 <= 5)
// console.log(6 >= 6)

// .length is a property in strings so strings can track their own length. It looks at indexes and adds 1 to end of it
// console.log("Shannon".length)
// console.log("Mississippi".length)

// || (logical OR) - if any come back as true, it's true
//  && (logical and) - everything must be true or it's false
//  ! (logical bang operator) - 

// console.log(5 > 2 || 42 > 100)
// console.log(! true)
// console.log(! false)
// console.log(! true && true)



// -------------------------------------------------------------------------------------------------------

            // OBJECTS
        // This is the structure of an object
        // h1 {
        //     color: `blue`
        // }
    

        //    {key: value}
        // key = symbol, unique identifier
        // value = anything recognized by JavaScript
  

    // const myObject = {key:1, key2: "hello!", key3: "i am a value"}
    // console.log(myObject)
    // console.log(myObject.key2)

    // const breakfast = {
    //     item1: "eggs",
    //     item2: "toast",
    //     item3: "grits",
    //     item4: {
    //         beverages1: "coffee",
    //         beverages2: "tea", 
    //         bevarages3: "milk", 
    //         beverage4: {
    //             juice1: "orange juice",
    //             juice2: "tang",
    //         }
    //         }
    //     }

    //     console.log(breakfast)

        // console.log(breakfast.juice1) returns: undefined which is one of the primitive data types and means the data is there but value not defined because juice1 does not stand alone, it is inside of beverages which is inside of items

        // correct way to get to the juice values
        // console.log(breakfast.item4.beverage4.juice2)
        // console.log(breakfast.item4.beverage4.juice1)
        
        // to shorten the console log code use destructuring which creates a shortcut so you dont have to type out the entire key to get to the nested items/beverages

        // Write a function that makes a shortcut to juice 1
        // const { juice1 } = (breakfast.item4.beverage4)
        // console.log(juice1)

        // you can also add both keys to the same shortcut
        // const { juice1,juice2 } = (breakfast.item4.beverage4)
        // console.log(juice1, juice2)

        // const {beverages1, beverages2, bevarages3} = (breakfast.item4)
        // console.log(beverages2)


    // Built in methods - method, behavior that belongs to specific object
    // .toUppercase only works on strings "hello".toUppercase()
    // .map only works with arrays [2,3,4].map
    // "this" is a keyword that references the object when you are inside of an object 

//     const math = {
//         number1: 5,
//         number2: 7,
//         number3: 10,
//         addUp: function() {
//             return this.number1 + this.number2 + this.number3
//         }
//     }
// console.log(math.addUp())

// method - a function that belongs to a object
// objects - intersection between data and behavior 

// const pets = [
//     {name: "Backup", type: "dog", age: 3}, 
//     {name: "oso", type: "dog", age: 1}, 
//     {name: "gertrude",type: "plant", age: 5,}
// ]
// console.log(pets.length)
// console.log(pets[0])
// console.log(pets[2].name)
// console.log(pets[])




// ------------------------------------------------------------------------------------------------------

// THURSDAY NOVEMBER 3 CLASSES

// classes are blueprints for objects
// they are recipes/plans/specifications for objects
// classes are plans to write objects
// how we automate creating objects
// in Javascript, class is a particular kind of function
// the arguments of a class are its properties and its methods
// we can define a classes properties and methods before we instantiate the class

// A class in Javascript is created by the word class
// the class key word takes an argument of the class name in PascalCase (class SuperHero) starts with a capital letter and each new word is capitalized
// after the class name we immediately define the scope of the class using curly brackets
// everything that goes inside the class, goes inside the curly brackets

// class SuperHero {

// }

// Inside the class we can call on a method for defining the basic properties of our class 
// constructor is one method. constructor is a predefined method that builds class data dynamically
// basic properties of the class go inside of the constructor
// all keys in a class must be defined with "this" keyword definer
// Properties in a class can be assigned using the assignment operator =
// to dynamically pass in data, we must define parameters in the constructors using parenthesis () and call on those parameters. Orders does not matter here, consistency with names does
// To instantiate our class into a unique object we call on the "new" keyword and the class name

// class SuperHero {
//     constructor (heroName, heroOrigin) {
//         this.name = heroName
//         this.orgin = heroOrigin
//         this.alive = true

//     }
// }  
// console.log(new SuperHero)
// returns SuperHero { name: undefined, orgin: undefined, alive: true }

// Let's make our own superhero. Let's call him Spiderman
// First create our variable
// var spidey = new SuperHero("Spiderman", "Got bit by a spider and now he's really strong")

// We're going to pass two arguments to the class name
// Order in this instance matters. Spiderman has to go in the same position as hero name and same for hero origin

// console.log(spidey)

// var shannon = new SuperHero ("Super Negra", "alien from Wakanda here to help push social justice reform")
// console.log(shannon)

// classes can also do actions
// classes methods! they are functions that belong to the class
// class SuperHero {
//     constructor (heroName, heroOrigin) {
//         this.name = heroName
//         this.orgin = heroOrigin
//         this.alive = true

//     }
//     storyTime(){
//         return `${this.name} is a superhero who ${this.orgin}`
//     }
// }  

// var ab = new SuperHero("Captain America", "did some government sanctioned drugs, now punches people, takes long cold showers")
// console.log(ab)

// Review again
// class = a template for making objects
// method - function inside of an object/class
// what's the keyword for creating a new class - class
// what's keyword for creating new instance or object - new
// case used for classes - PascalCase
// whats the method for taking in data dynamically - constructor

// ----------------------------------------------------------------------------------------------------------


// ------------------------------------------------------------------------------------------------------

// REACT FRIDAY NOVEMEBER 4

// React is a JS library for building user interfaces
// Reacts job - take in data, handle data, display datas
// UI (user interface) is how the user interacts with an app
// libarary = collection of code snippets for devs to use
// javascript library is code snippets are node modules

// Why is react so popular?
    // component based - built from little pieces
    // reusable
    // scalable
    // user interactions focused

// Scalability
    // think about how can app grow
    // create code that will work under many conditions

// Reusability
    // components
    // functions that are reusable
    // return data including objects
        // objects have data and behavior
        // can hold JSX (javascript XML)
        // JSX is javascript flavored markdown that behaves like HTML

// User Interactions
    //DOM (Document Object Model) - visual representation of your code
    // Node - represents a single HTML element
    // Virtual DOM - Listens to the individual nodes in the DOM and compares the change and refreshes ONLY the affected elements

    // React components outline
       // made up of functions
       // needs a return
       // JSX is inside the return
       // Component Call/Invocation: <ComponentCall />

       //( THE APP COMPONENT IS THE "BRAINS" OF THE REACT WHERE ALL CHANGES ARE INVOKE)

       // PROPS are short for properties
       // passes information from parent component (App.js) to child component
       // when you initially open the app.js file, delete the boiler plate inside the function but leave the template for the function
       // props is an object 
       // create new folder called components in src folder (this is where you will add the components to build the app)
       // common difference between props and states - props are read only


       // yarn create react-app (then choose name) - adds a whole react app with all components already installed (go back and check this on thursdays lecture video becuase Elsyse didn't add a name, she may have called it react-inputs-events)
    
   // then cd into the created folder, then go yarn start, the code 

   // Events happen anytime the page is manupulated - user clicks a button, page changes

   // event handlers - methods that track events

   // events occurs anytime a user or browser manipulates a webpage
    // clicking buttons, key strokes, resizing window, etc

    // Inputs are types of events that will use an onChange (types of input are text, password, email, color, date, etc. text is default input type)
        // onChange is an attribute that lives on the input tag that listens for changes
        // Event is passed to us automatically from onChange attribute 
        // Event is an object with many key/value pairs 
        // Example: see screenshot for example
        // Any input from user is a string
        // inside target.value, displays the value inside the input
        // state is where you can store information and make it accessible in the application





















    //    This goes in the App.js file
    //    import {useState} from `react`
    //    import `./App.css`;
    //    import Card from `./components/Card`
    //    const App = () => {
    //     const [cards, setCards] = useState(["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"])
    //     const [randomIndex, setRandomIndex] = useState()
    //     const drawCard = () => {
    //         let randomCard = Math.floor(Math.random() * cards.length)
    //         setRandomIndex(randomCard)
    //     }


    //     return(
    //         <h1>Card Draw</h1>
    //         <button onClick=(drawCard)>Draw a card</button>
    //         <Card cards=(cards) index=(randomIndex/>
    //      </>
    //     );
    //    }

    //    export default App;

    //    this goes in the card.js file
    //    const Card = (props) => {
    //     console.log(props)  -- may have to take out 
    //     return(
    //         <>
    //             <h2>Current Card</h2>
    //             <p>(props.card[props.index]</p>
    //     )
    //    }

    //    export default Card

    // create another folder if creating another button
    // called is DrawButton.js or whatever the name of your button will be
    // rafce - this will create a ready made template 
    // if you create a new button/file remove the draw button onclick line from app.js and put it on the new page (card.js)


   