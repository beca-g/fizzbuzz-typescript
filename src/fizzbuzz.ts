export class FizzBuzz {

  divisibleBy(number: number, divisor:number): boolean {
    return (number % divisor === 0)
  }

  divisibleByThree(number: number): boolean {
    return (this.divisibleBy(number, 3))
  }

  divisibleByFive(number: number): boolean {
    return (this.divisibleBy(number, 5)) 
  }

  divisibleByThreeAndFive(number: number): boolean {
    return (this.divisibleBy(number, 15)) 
  }

  play(number: number): string | void {
    if (this.divisibleByThreeAndFive(number)) {
      return "Fizzbuzz"
    }
  }
}