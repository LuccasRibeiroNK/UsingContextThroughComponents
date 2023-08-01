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
      <div className=" ">
        <div className="pb-10 pt-4 text-2xl">First Component</div>
        <p className="pb-4">Here you can add 1 to total Count </p>
        {/* <p className="pb-4 text-lg">Count value: {count}</p> */}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          onClick={handleAddTen}
        >
          Increment by 1
        </button>
      </div>
    </>
  );
};

export default Page1;
