export class FizzBuzz {

  divisibleBy(number: number, divisor:number): boolean {
    return (number % divisor === 0)
  }

  divisibleByThree(number: number):number | string | void {
    if(this.divisibleBy(number, 3)) return "Fizz"
  }

  divisibleByFive(number: number):number | string | void {
    if(this.divisibleBy(number, 5)) return "Buzz"
  }

  divisibleByThreeAndFive(number: number): number | string | void {
    if(this.divisibleBy(number, 15)) return "FizzBuzz"
  }
}