export function getFibonacciNumber(number: number): number | string {
  if (!Number.isInteger(number)) {
    return "Должно быть целое число"
  }
  if (number <= 0) {
    return "Должно быть число больше нуля"
  }
  return number > 2
    ? <number>getFibonacciNumber(number - 1) + <number>getFibonacciNumber(number - 2)
    : 1;
}
