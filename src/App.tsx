

import React from "react";
import { getFibonacciNumber } from "./helpers/getFibonacciNumber";
import { getMultipliers } from "./helpers/getMultipliers";
import { InputBlock } from "./components/InputBlock";
import { useFibonacci } from "./hooks/useFibonacci";
import { useMultipliers } from "./hooks/useMultipliers";
import { useFactorial } from "./hooks/useFactorial";
import { IWorkerData } from "./hooks/useWebWorker";
import { WorkerInputBlock } from "./components/WorkerInputBlock";
import { getFactorial } from "./helpers/getFactorial";

export interface IInputs {
  text: string;
  fn: (arg: number) => number | string;
  useWorker: () => IWorkerData;
}

const inputs = [
  { text: "Числа Фибоначчи", fn: getFibonacciNumber, useWorker: useFibonacci },
  { text: "Факториал", fn: getFactorial, useWorker: useFactorial },
  {
    text: "Разложение на множители",
    fn: getMultipliers,
    useWorker: useMultipliers,
  },
];

function App() {
  return (
    <div className="app">
        <div className="wrapper">
          <h1 className="title">Без воркеров</h1>
          {inputs.map(({useWorker, ...props}, i) => (
            <InputBlock {...props} key={i} />
          ))}
        </div>
        <div className="wrapper">
          <h1 className="title">С воркерами</h1>
          {inputs.map(({fn, ...props}, i) => (
            <WorkerInputBlock {...props} key={i} />
          ))}
        </div>
    </div>
  );
}

export default App;
