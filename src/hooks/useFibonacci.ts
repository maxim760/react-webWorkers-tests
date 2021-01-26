import { useWebWorker } from "./useWebWorker";
import { getFibonacciNumber } from "../helpers/getFibonacciNumber";

export const useFibonacci = () => {
  return useWebWorker(getFibonacciNumber);
};
