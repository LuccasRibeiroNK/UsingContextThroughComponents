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
    <div>
       <h2 className="pb-16 pt-4 text-2xl">Reset Counter {count}</h2>
      <button onClick={() => setCount(0)}>Set counter to 0</button>
    </div>
  );
};

export default ResetCount;
