import { IInputs } from "../../App";

export const workerHandler = (fn: IInputs["fn"]) => {
  onmessage = (event: MessageEvent) => {
    const num = event.data;
    if (num || num === 0) {
      postMessage(fn(num));
    } else {
      throw new Error("Нет параметра")
    }
  };
};