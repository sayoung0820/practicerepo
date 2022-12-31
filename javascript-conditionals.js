// if(this thing is true) {
//     console.log(do this)
//   } else {
//     console.log(do this other thing)
//   }

// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.

var itemPrice = "y"

if (itemPrice <= 100) {
    console.log("in budget") 
 } else if (itemPrice > 100) {
    console.log("item is not in budget")
  } else {
    console.log("just don't buy it")
}

if (itemPrice <= 100) {
    console.log(`${itemPrice} is in budget`) 
 } else if (itemPrice > 100) {
    console.log("item is not in budget")
} else {
    console.log("just don't buy it")
}

// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.

var hungry = true

if (hungry === true) {
    console.log("eat food")
} else if (hungry != true) {
    console.log("keep coding")
}

// test Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.

let trafficLight = "yellow"

if (trafficLight === "green") {
    console.log("go")
} else if (trafficLight === "yellow") {
    console.log("slow down") 
     } else if (trafficLight === "red") {
      console.log("stop")
     } 
    
     
// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".

let num1 = 5
let num2 = 5

if (num1 > num2) {
    console.log(num1)
} else if (num2 > num1) {
    console.log(num2)
} else if (num1 = num2) {
    console.log("the numbers are the same")
}

// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.

let num3 = 5

if (num3 % 2 == 0) {
    console.log("even")
} else {
    console.log("odd")
}

// 🏔 Stretch Goals
// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."

let gradePercentage = "100%"

if (gradePercentage === "100%") {
    console.log("A" + " " + "perfect score")
} else if (gradePercentage === 0) {
    console.log("no grade available")
} else if (gradePercentage >= 90 && gradePercentage <= 99) {
    console.log("A")
} else if (gradePercentage >= 80 && gradePercentage <= 89) {
    console.log("B")
} else if (gradePercentage >= 70 && gradePercentage <= 79) {
    console.log("C")
} else if (gradePercentage >= 60 && gradePercentage <= 69) {
    console.log("D")
} else if (gradePercentage >= 50 && gradePercentage <= 59) {
    console.log("F")
}

// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.

console.log(typeof true)
console.log(typeof "House")
console.log(typeof 42)

// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.

let password = 'hajelnknkwioejrl!'

if(password.length >= 12 && password.includes('!')) {
    console.log("That is a mighty strong password!")
} else if(password.length >= 8 || password.includes('!')) {
    console.log("That password is strong enough.")
} else {
    console.log("that is not a valid password.")
}