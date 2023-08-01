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

const Page2: React.FC = () => {
  // Acessando o valor do contador do contexto com o tipo do contexto
  const { count, setCount } =
    React.useContext<CounterContextType>(CounterContext);

  return (
    <div className="">
      <h2 className="pb-10 pt-4 text-2xl">Second Component</h2>
      <p className="pb-4">Here you can add 10 to total Count </p>
      {/* <p className="pb-4 text-lg">Count value: {count}</p> */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        onClick={() => setCount(count + 10)}
      >
        Increment by 10
      </button>
    </div>
  );
};

export default Page2;
