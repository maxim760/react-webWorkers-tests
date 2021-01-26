import { useState } from "react";
import { IInputs } from "../App";
import { FuncOneNumberVoid } from "../contracts/function";
import { workerHandler } from "../helpers/worker/workerHandler";

export type INullableText = null | number | string;
export interface IWorkerData {
  run: FuncOneNumberVoid;
  result: INullableText;
  error: INullableText;
  loading: boolean;
}

export const useWebWorker = (fn: IInputs["fn"]): IWorkerData => {
  const [result, setResult] = useState<INullableText>(null);
  const [error, setError] = useState<INullableText>(null);
  const [loading, setLoading] = useState(false);
  const resetResult = () => setResult(null);
  const resetError = () => setError(null);

  const run = (value: number) => {
    setLoading(true);
    const worker = new Worker(
      URL.createObjectURL(
        new Blob([`(${workerHandler})(${fn})`], {
          type: "application/javascript",
        })
      ),
      { type: "module" }
    );
    worker.onmessage = (event: MessageEvent) => {
      setResult(event.data);
      setLoading(false);
      resetError()
      worker.terminate();
    };
    worker.onerror = (er: ErrorEvent) => {
      setError(er.message);
      setLoading(false);
      resetResult();
      worker.terminate();
    };
    worker.postMessage(value);
  };
  return {
    run,
    result,
    error,
    loading,
  };
};
