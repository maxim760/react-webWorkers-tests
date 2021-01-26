import { getFactorial } from "../helpers/getFactorial";
import { getFibonacciNumber } from "../helpers/getFibonacciNumber";

describe("factorial", () => {
  test("should return correct factorial ", () => {
    // factorial 4 == 24
    expect(getFibonacciNumber(1)).toBe(1);
    expect(getFibonacciNumber(2)).toBe(1);
    expect(getFibonacciNumber(7)).toBe(13);
    expect(getFibonacciNumber(16)).toBe(987);
  });
  test("should return error if not integer value ", () => {
    // factorial 4 == 24
    expect(getFibonacciNumber(4.4)).toBe("Должно быть целое число");
    expect(getFibonacciNumber(1.1)).toBe("Должно быть целое число");
    expect(getFibonacciNumber(NaN)).toBe("Должно быть целое число");
  });
  test("return error if value <= 0", () => {
    expect(getFibonacciNumber(0)).toBe("Должно быть число больше нуля");
    expect(getFibonacciNumber(-5)).toBe("Должно быть число больше нуля");
    expect(getFibonacciNumber(-25)).toBe("Должно быть число больше нуля");
  });
});
