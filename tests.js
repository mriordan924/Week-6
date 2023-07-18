/* 
  Copyright (c) 2023 Promineo Tech
  Author:  Promineo Tech Academic Team
  Subject:  JavaScript Mocha/Chai
  FE Lab Week 06
*/
const expect = chai.expect
const assert = chai.assert

/* ----------------------------------------------------- */
// Resources:
// expect Documentation: https://www.chaijs.com/api/bdd/
// assert Documntation: https://www.chaijs.com/api/assert/
//
// assert is very similar to how you use expect, but offers
// extra ways to test.

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so.
// Read the comments and add your code where it is specified for each question.
/* ----------------------------------------------------- */

/**
 *          YOU MUST 'npm install' IN YOUR TERMINAL TO INSTALL MOCHA/CHAI 
 *          FROM THE DEPENDENCIES IN YOUR PACKAGE.JSON
 * 
 *  Step 1: Create a describe code block that describes what you expect the code to do.
 *  Step 2: Copy/Paste your debugged code from week6Lab.js into the describe block (exclude the final console.log())
 *  Step 3: Create tests using expect/assert to test for expected outputs. Use multiple cases.
 *          If you're testing against an array/object - read the documentation on .deep/.deepEquals
 *
 *  Note:   Mocha/Chai is currently set up to only run in your given index.html. 
 *          expect/assert are given to you at the top of the code. 
 * 
 *          By default, the tests will pass unless you give it code to test against.
 * 
/*--------------------------------------------------------------------*/

describe('Week 6 Lab Tests:', () => {
  describe('Example Question Test: Add Two Numbers', () => {
    it('#Should return the sum of two numbers', () => {
      // Copy & paste your debugged code from week6Lab.js
      function addTwoNumbers(num1, num2) {
        return num1 + num2
      }
      // Write tests to ensure it works for multiple examples
      expect(addTwoNumbers(2, 3)).to.equal(5)
      expect(addTwoNumbers(9, 17)).to.equal(26)
      expect(addTwoNumbers(750, 250)).to.equal(1000)
      expect(addTwoNumbers(132780, 443378)).to.equal(576158)
    })

    describe('Example Failed Test: Add Two Numbers', () => {
      it('#Should fail', () => {
        function sumOfTwoNumbers(num1, num2) {
         return num1 + num2
        }

        expect(sumOfTwoNumbers(2, 3)).to.equal(5)
      })
    })
    
  })
  /*--------------------------NEW TESTS BELOW-------------------------------*/
//const arrayOfNumbers = [1, 5, 3, 2, 4]
//arrayOfNumbers.sort((a, b) => a - b)
describe('Sorted array of number', () => {
  it ('#Should sort array in ascending order', () =>{
    const arrayOfNumbers = [1, 5, 3, 2, 4]
    arrayOfNumbers.sort((a, b) => a - b)

    expect(arrayOfNumbers).to.deep.equal([1,2,3,4,5])
  })
})

describe('Manage my wallet', () =>{
  class Wallet {
   constructor(startingMoney) {
     this.money = startingMoney
   }

   addMoney(amount) {
     this.money += amount
   }

   removeMoney(amount) {
     this.money -= amount
   }
 }
  it ('#Should add/subtract money from wallet', () => {
  let myWallet = new Wallet(100)
  myWallet.removeMoney(14.99)
  myWallet.addMoney(3)

  expect (myWallet.money).to.equal(88.01)

  let yourWallet = new Wallet (50)
  yourWallet.removeMoney (10)
  yourWallet.addMoney (5)

  expect (yourWallet.money).to.equal(45)
  })
})

describe ('Day of the Week', () => {
const dayOfTheWeek = (num) => {
  switch (num) {
    case 1:
      'Monday'
      return "Monday"
      break
    case 2:
      'Tuesday'
      return "Tuesday"
      break
    case 3:
      'Wednesday'
      return "Wednesday"
      break
    case 4:
      'Thursday'
      return "Thursday"
      break
    case 5:
      'Friday'
      return "Friday"
      break
    case 6:
      'Saturday'
      return "Saturday"
      break
    case 7:
      'Sunday'
      return "Sunday"
      break
    default:
      return "Err. Something went wrong."
  }
}
it ('#Should return day of the week for chosen case number', () =>{
  expect (dayOfTheWeek(12)).to.equal("Err. Something went wrong.")
  expect (dayOfTheWeek(1)).to.equal("Monday")
  expect (dayOfTheWeek(5)).to.equal("Friday")
})
})

describe ("Only Wizards Shall pass", () => {
  const movieCharacters = [
    {
      name: 'Howl',
      isAWizard: true,
      quote: `You're wearing that hat? After all the magic I used to make your dress pretty?`,
    },
    {
      name: 'Kalcifer',
      isAWizard: false,
      quote: `I don't cook! I'm a scary and powerful fire demon!`,
    },
    {
      name: 'Gandalf',
      isAWizard: true,
      quote: `You shall not pass!`,
    },
    {
      name: 'Luke Skywalker',
      isAWizard: false,
      quote: `May the Force be with you.`,
    },
  ]
  function onlyWizards(arrayOfCharacters) {
  return arrayOfCharacters.filter((character) => character.isAWizard == true)
}
})

 it ('#Should return table with array of characters who are wizards', () => {
    expect (onlyWizards(movieCharacters)).to.deep.equal([{
      name: 'Howl',
      isAWizard: true,
      quote: `You're wearing that hat? After all the magic I used to make your dress pretty?`,
    },{
      name: 'Gandalf',
      isAWizard: true,
      quote: `You shall not pass!`,
    },
  ])
    
  // //check out the console.table() method you can use on objects!
 // console.table(onlyWizards(movieCharacters)) //expecting an array of characters whose key/value pair is = isAWizard: true
})
})

