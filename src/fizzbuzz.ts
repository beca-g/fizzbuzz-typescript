export class FizzBuzz {

  divisibleBy(number: number, divisor:number): boolean {
    return (number % divisor === 0)
  }

  divisibleByThree(number: number):number | string | void {
    if(this.divisibleBy(number, 3)) {
      return "Fizz"
    }
  }
}