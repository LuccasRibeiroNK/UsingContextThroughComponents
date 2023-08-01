import React from "react";
import { CounterContext } from "../contexts/Counter";
interface CounterContextType {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export const CounterContexts = React.createContext<CounterContextType>({
  count: 0,
  setCount: () => {},
});

const ResetCount: React.FC = () => {
  const { count, setCount } =
    React.useContext<CounterContextType>(CounterContext);
  return (
    <div className="pb-2">
      <h2 className="pb-10 text-2xl">Total Counter: {count}</h2>
      <p className="pb-4">Here you can set Count 0 </p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount(0)}
      >
        Set counter to 0
      </button>
    </div>
  );
};

export default ResetCount;
