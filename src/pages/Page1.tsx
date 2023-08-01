import React from "react";
import { CounterContext } from "../contexts/Counter";

interface CounterContextType {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export const CounterContexts = React.createContext<CounterContextType>({
  count: 0,
  setCount: () => {}, // Corrigindo o valor inicial do setCount
});

const Page1: React.FC = () => {
  const { count, setCount } =
    React.useContext<CounterContextType>(CounterContext);

  const handleAddTen = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>
        <div className="pb-16 pt-4 text-2xl">Page 1</div>
        {/* <p className="pb-4 text-lg">Count value: {count}</p> */}
        <button onClick={handleAddTen}>Increment by 1</button>
      </div>
    </>
  );
};

export default Page1;
