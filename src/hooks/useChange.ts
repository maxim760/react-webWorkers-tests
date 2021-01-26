import { useState } from "react";

export type IEventChange = React.ChangeEvent<HTMLInputElement>

export interface IChangeData {
  value: string
  handleChange(e: IEventChange): void
}

export const useChange = () => {
  const [value, setValue] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target && setValue(event.target.value);
  };
  return {
    value, handleChange
  }
}