import { FizzBuzz } from "../src/fizzbuzz"
import { expect } from "chai"

describe("FizzBuzz", () => {
  let fizzBuzz = new FizzBuzz

  describe("divisibleByThree", () => {
    it("should return 'Fizz' when a number is divisible by three", () => {
      expect(fizzBuzz.divisibleByThree(3)).to.equal("Fizz")
    })  
  })
})