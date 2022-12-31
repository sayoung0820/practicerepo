 // Jest Template: test
// describe("functionName", () => {
//   it("describe what functionName does here", () => {
//     expect(functionName("pass arg as needed")).toEqual("expected output")
//   })
// })

// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

describe("areTired", () => {
      it("returns 'drink coffee' if you are tired and 'keep working' if you are not tired.", () => {
        expect(areTired("yes")).toEqual("drink coffee")
        expect(areTired("no")).toEqual("keep working")
      })
    })
    // ReferenceError: areTired is not defined

// Create the function that will make the test pass.

// write function that takes in yes or no then returns drink coffee or keep working
// write a conditional

const areTired = (string) => {
    if (string === "yes") {
        return "drink coffee"
    } else if (string === "no") {
        return "keep working"
    }
}

// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

describe("stressed", () => {
  it("returns 'relax' if you are stressed and 'keep going' if you are not stressed", () => {
    expect(stressed("yes")).toEqual("relax")
    expect(stressed("no")).toEqual("keep going")
  })
})
// ReferenceError: stressed is not defined

// Create the function that will make the test pass.

const stressed = (string) => {
    if (string === "yes") {
        return "relax"
    } else if (string === "no") {
        return "keep going"
    }
}

// Write the test for a function that returns "in budget" if a price is lower than $300.

 describe("budget", () => {
      it("returns 'in budget' if a price is lower than $300", () => {
        // let num = 0
        // let inBudget = num < 300
        // let outBudget = num > 300 
        expect(budget(200)).toEqual("in budget")
        expect(budget(500)).toEqual("out budget")
      })
    })
// ReferenceError: budget is not defined

// Create the function that will make the test pass.

const budget = (number) => {
    if (number < 300) {
        return "in budget"
    } else if (number > 300) {
        return "out budget"
    }
}

// Write the test for a function that takes in two numbers and returns the smaller number.

describe("twoNums", () => {
  it("takes in two numbers and returns the smaller number", () => {
    let num1 = 50
    let num2 = 20
    expect(twoNums(num1, num2)).toEqual(num2)
  })
})
// ReferenceError: twoNums is not defined

// Create the function that will make the test pass.

const twoNums = (num1, num2) => {
    if (num2 < num1) {
        return num2
    } else {
        return "try again"
    }
}

// Write the test for a function that takes in one numbers and returns whether the number is odd.

  describe("isOdd", () => {
      it("takes in one numbers and returns whether the number is odd", () => {
        expect(isOdd(7)).toEqual("odd")
      })
    })
//     ReferenceError: isOdd is not defined

// Create the function that will make the test pass.

const isOdd = (number) => {
    if (number % 2 === 1) {
        return "odd"
    }
}

// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.

describe("fruit", () => {
  it("takes in a fruit and returns 'yellow' if the argument is banana, 'red' if apple and 'purple' if 'grape'", () => {
    expect(fruit("banana")).toEqual("yellow")
    expect(fruit("apple")).toEqual("red")
    expect(fruit("grape")).toEqual("purple")
  })
})
//   ReferenceError: fruit is not defined

// Create the function that will make the test pass.

const fruit = (string) => {
    if (string === "banana") {
        return "yellow"
    } else if (string === "apple") {
        return "red"
    } else if (string === "grape") {
        return "purple"
    }
}

// Write the test for a function called rick that returns "Morty".

describe("rick", () => {
  it("returns Morty", () => {
    expect(rick("tv show")).toEqual("Morty")
  })
})
//  ReferenceError: rick is not defined

// Create the function that will make the test pass.

const rick = (string) => {
    if (string === "tv show") {
        return "Morty"
    }
}

// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.

describe("greeter", () => {
  it("takes a name as an argument and returns a greeting with that name to the screen", () => {
    expect(greeter("Shannon")).toEqual("Hey Shannon!")
  })
})
//  ReferenceError: greeter is not defined

// Create the function that will make the test pass.

const greeter = (string) => {
     return "Hey Shannon!"
}

// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.

describe("oddOrEven", () => {
  it("takes a number as an argument and logs whether the number is odd or even", () => {
    expect(oddOrEven(9)).toEqual("odd" || "even")
    // expect(oddOrEven(num2)).toEqual("even")
  })
})
// ReferenceError: oddOrEven is not defined

// Create the function that will make the test pass.

const oddOrEven = (number) => {
    if (number % 2 === 0) {
        return "even"
    } else if (number % 2 === 1) {
        return "odd"
    }
}

// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.

describe("doubler", () => {
  it("that takes a number and returns the result of the number multiplied by 2", () => {
    expect(doubler(4)).toEqual(8)
  })
})

// Create the function that will make the test pass.

const doubler = (number) => {
    return number * 2
}

// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.

describe("multiply", () => {
  it("takes two numbers as arguments and logs the result of one of the numbers multiplied by the other", () => {
    expect(multiply(2, 4)).toEqual(8)
  })
})

// Create the function that will make the test pass.

const multiply = (num1, num2) => {
    return num1 * num2
}

// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

describe("divisibleBy", () => {
  it("takes two numbers as arguments and returns whether the first number is evenly divisible by the second", () => {
    expect(divisibleBy(10, 5)).toEqual("10 is evenly divisble by 5")
  })
})

// Create the function that will make the test pass.

const divisibleBy = (num1, num2) => {
    if (num1 / num2) {
        return "10 is evenly divisble by 5"
    }
}

// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".

describe("fizzbuzz", () => {
  it("takes in a number and replaces it with 'fizz' if the number is a mulitple of 3, replaces it with 'buzz' if the number is a multiple of 5, and replaces it with 'fizzbuzz' if the number is a multiple of both 3 and 5", () => {
    expect(fizzbuzz(9)).toEqual("fizz")
    expect(fizzbuzz(10)).toEqual("buzz")
    expect(fizzbuzz(15)).toEqual("fizzbuzz")
  })
})


// Create the function that will make the test pass.

// const fizzbuzz = (num5) => {
//     if (num5 % 3 === 0) {
//         return "fizz"
//     } else if (num5 % 5 === 0) {
//         return "buzz"
//     } else if (num5 % 3 === 0 && num5 % 5 === 0) {
//         return "fizzbuzz"
//     }
// }

// why did the bottom one pass and not the top one

const fizzbuzz = (num5) => {
    if (num5 % 3 === 0 && num5 % 5 === 0) {
        return "fizzbuzz"
    } else if (num5 % 5 === 0) {
        return "buzz"
    } else if (num5 % 3 === 0) {
        return "fizz"
    }
} 


