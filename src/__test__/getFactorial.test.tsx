import { getFactorial } from "../helpers/getFactorial";

describe("factorial", () => {
  test("should return correct factorial ", () => {
    // factorial 4 == 24
    expect(getFactorial(4)).toBe(24);
    expect(getFactorial(1)).toBe(1);
    expect(getFactorial(7)).toBe(5040);
  });
  test("should return error if not integer value ", () => {
    // factorial 4 == 24
    expect(getFactorial(4.4)).toBe("Должно быть целое число");
    expect(getFactorial(1.1)).toBe("Должно быть целое число");
    expect(getFactorial(NaN)).toBe("Должно быть целое число");
  });
  test("return error if value < 0", () => {
    expect(getFactorial(-5)).toBe("Должно быть число больше или равно нулю");
    expect(getFactorial(-25)).toBe("Должно быть число больше или равно нулю");
  });
});
