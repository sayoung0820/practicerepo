// class SuperHero {
//     constructor(heroName, heroOrigin, heroHome){
//        this.name = heroName
//        this.origin = heroOrigin
//        this.alive = true
//        this.home = heroHome
//     }
//     storyTime(){
//     return `${this.name} is a superhero who ${this.origin}`
//     }
//     lostABadFight(){
//         this.alive = false
//     }
// }
// console.log(new SuperHero)

// Spiderman 

// var spidey = new SuperHero("Spiderman", "Got bit by a spider and now he's really strong", "Earth")

// console.log(spidey)

// Superman

// var clark = new SuperHero("Superman", "Weak to Cryptonite", "Krypton")

// console.log(clark)

// Supergirl

// var supGal = new SuperHero("Supergirl", "Became obsessed with Superman", "Violet Ray")

// console.log(supGal.storyTime())

// Batman

// var bat = new SuperHero("Batman", "Saw parents murdered", "Earth")

// console.log(bat)
// console.log(bat.lostABadFight())
// console.log(bat)




class Coffee {
  constructor(type, cream, sugar) {
    this.type = type.toLowerCase()
    this.cream = cream
    this.sugar = sugar
  }

  coffeeProfile() {
    return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
  }

  creams() {
    if (this.cream > 1) {
      return `${this.cream} creams`
    } else {
      return `${this.cream} cream`
    }
  }

  sugars() {
    if (this.sugar > 1) {
      return `${this.sugar} sugars`
    } else {
      return `${this.sugar} sugar`
    }
  }
}

// Coffee marker: copy the given Coffee class into a text editor
// Write the code that makes a black coffee object

var blackCoffee = new Coffee("black", "zero", "zero")
console.log(blackCoffee.creams() + blackCoffee.sugars())
console.log(blackCoffee.coffeeProfile())
// var blackCoffee = new Coffee("black", "zero", "zero")
console.log(blackCoffee)

// Write the code that outputs the black coffee's profile


// Write the code that makes a coffee object with 1 cream and 2 sugars

const shannonCoffee = new Coffee ("Shannon", "one", "two")


// Write the code that outputs the 1 cream and 2 sugars coffee profile

console.log(shannonCoffee.coffeeProfile())

// Latte Maker: create a class for Latte

class Latte {
constructor(flavor, milk, shots) {
this.flavor = flavor
this.milk = milk
this.shots = shots
}
latteProfile(){
    return `"Your ${this.flavor} latte with ${this.milk} milk and ${this.shots} shot is ready!`
}
}

// Write a Latte class that takes a flavor, a milk type, and a number of shots
// Write a method for your Latte class that outputs the latte's profile
// Write the code that makes a regular, single shot latte test

var shannonLatte = new Latte ("french vanilla", "regular", "single")

// Log the regular, single shot latte's profile

console.log(shannonLatte.latteProfile())

// Write the code that makes a double shot, hazelnut latte with almond milk.

var doubleshot = new Latte ("hazelnut", "almond", "double")
// Log the double shot, hazelnut latte with almond milk's profile.

console.log(doubleshot.latteProfile())

// Volume of a Cylinder: create a class for Cylinder

class Cylinder {
    constructor(pie, radius, height) {
        this.pie = pie 
        this.radiius = radius
        this.height = height
    }
    cylinderRadius 
}

// Write a class that calculates the volume of a Cylinder: v = πr2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places
// Write the code that creates three unique cylinder objects
