import { useWebWorker } from "./useWebWorker";
import { getMultipliers } from "../helpers/getMultipliers";

export const useMultipliers = () => {
  return useWebWorker(getMultipliers);
};
