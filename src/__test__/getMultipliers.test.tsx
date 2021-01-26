import { getMultipliers } from "../helpers/getMultipliers";

describe("factorial", () => {
  test("should return correct multipliers ", () => {
    // factorial 4 == 24
    expect(getMultipliers(8)).toBe("2*2*2 = 8");
    expect(getMultipliers(46)).toBe("2*23 = 46");
    expect(getMultipliers(574)).toBe("2*7*41 = 574");
  });
  test("should return message if number not have multipliers ", () => {
    expect(getMultipliers(13)).toBe("Число не имеет делителей, кроме себя и единицы");
    expect(getMultipliers(1)).toBe("Число не имеет делителей, кроме себя и единицы");
    expect(getMultipliers(881)).toBe("Число не имеет делителей, кроме себя и единицы");
  });
  test("should return error if not integer value ", () => {
    // factorial 4 == 24
    expect(getMultipliers(4.4)).toBe("Должно быть целое число");
    expect(getMultipliers(1.1)).toBe("Должно быть целое число");
    expect(getMultipliers(NaN)).toBe("Должно быть целое число");
  });
  test("return error if value <= 0", () => {
    expect(getMultipliers(-5)).toBe("Должно быть число больше нуля");
    expect(getMultipliers(-25)).toBe("Должно быть число больше нуля");
  });
});
