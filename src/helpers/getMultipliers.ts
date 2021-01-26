
export function getMultipliers(number: number): string {
  if (!Number.isInteger(number)) {
    return "Должно быть целое число"
  }
  if (number <= 0) {
    return "Должно быть число больше нуля"
  }
  const multipliers: number[] = [];
  let i = 2;
  let fakeNum = number;
  while (i <= fakeNum) {
    if (fakeNum % i === 0) {
      multipliers.push(i);
      fakeNum /= i;
    } else {
      i += 1;
    }
  }
  return multipliers.length > 1
    ? `${multipliers.join("*")} = ${number}`
    : "Число не имеет делителей, кроме себя и единицы";
};
