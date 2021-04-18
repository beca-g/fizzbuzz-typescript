import { FizzBuzz } from "../src/fizzbuzz"
import { expect } from "chai"

describe("FizzBuzz", () => {
  let fizzBuzz: any; 
  
  beforeEach(function() {
    fizzBuzz = new FizzBuzz()
  })

  describe("divisibleByThree", () => {
    it("should return 'Fizz' when a number is divisible by three", () => {
      expect(fizzBuzz.divisibleByThree(3)).to.equal(true)
    })  
  })

  describe("divisibleByFive", () => {
    it("should return 'Buzz' when a number is divisible by five", () => {
      expect(fizzBuzz.divisibleByFive(5)).to.equal(true)
    })
  })

  describe("divisibleByThreeAndFive", () => {
    it("should return 'FizzBuzz' when a number is divisible by both three and five", () => {
      expect(fizzBuzz.divisibleByThreeAndFive(15)).to.equal(true)
    })
  })

  describe("play", () => {
    describe("multiples of 3 and 5", () => {
      it("should return 'Fizzbuzz' for 15", () => {
        expect(fizzBuzz.play(15)).to.equal("Fizzbuzz")
      }) 
    })

    describe("multiples of 5", () => {
      it("should return 'Buzz' for 5", () => {
        expect(fizzBuzz.play(5)).to.equal("Buzz")
      })
    })
  })
})