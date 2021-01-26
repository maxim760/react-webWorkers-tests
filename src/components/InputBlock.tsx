import React, { ChangeEvent } from "react";
import { IInputs } from "../App";
import { useChange } from "../hooks/useChange";

export const InputBlock: React.FC<Omit<IInputs, "useWorker">> = ({
  text,
  fn,
}): React.ReactElement => {
  const [result, setResult] = React.useState<null | number | string>(null);
  const { value, handleChange } = useChange();

  const handleClick = () => {
    setResult(fn(+value));
  };

  return (
    <div data-testid="input-block" className={"blockInput"}>
      <h2>{text}</h2>
      <div className="flex">
        <input
          value={value}
          onChange={handleChange}
          type="number"
          placeholder="Введите число..."
        />
        <button onClick={handleClick}>Посчитать</button>
      </div>
      <p role="result">{result}</p>
    </div>
  );
};
