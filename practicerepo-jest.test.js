// const { it } = require("node:test")

// const { exportAllDeclaration } = require("@babel/types");
// const { it } = require("node:test");
// const { describe } = require("yargs");

// describe("greeter", () => {
//     it("returns a string that says Hi, Golf 2022!", () => {
//         expect(greeter()).toEqual("Hi, Golf 2022!")
//     })
// })
// const greeter = () => {
//     return "Hi, Golf 2022!"
// }

describe("doYouUnderstand", () => {
    it("returns `help others` if you do understand or `ask questions` if you do not understand", () => {
        expect(doYouUnderstand("yes")).toEqual("help others")
        expect(doYouUnderstand("no")).toEqual("ask questions")
    })
})

const doYouUnderstand = (string) => {
    if(string === "yes") {
        return "help others"
    } else if(string === "no") {
        return "ask questions"
    } else {
        return "oops, something went wrong"
    }
}

    