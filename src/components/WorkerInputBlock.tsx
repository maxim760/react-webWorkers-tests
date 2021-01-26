import React, { ChangeEvent } from "react";
import { IInputs } from "../App";
import { useChange } from "../hooks/useChange";

export const WorkerInputBlock: React.FC<Omit<IInputs, "fn">> = ({
  text,
  useWorker,
}): React.ReactElement => {
  const { run, result, loading, error } = useWorker();
  const { value, handleChange } = useChange();
  const handleClick = () => run(+value);


  return (
    <div data-testid="worker-input-block" className={"blockInput"}>
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
      { (loading || result || error) && <p role="result">{loading ? "Подождите" : result || error}</p>}
    </div>
  );
};
