import { FuncOneNumberNumber } from "../contracts/function";

export function getFactorial(number: number): number | string {
  if (!Number.isInteger(number)) {
    return "Должно быть целое число"
  }
  if (number < 0) {
    return "Должно быть число больше или равно нулю"
  }
  return number > 1 ? <number>getFactorial(number - 1) * number :  1;
}
