import { useWebWorker } from "./useWebWorker";
import { getFactorial } from "../helpers/getFactorial";

export const useFactorial = () => {
  return useWebWorker(getFactorial);
};
