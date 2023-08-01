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
    <div>
      <h2 className="pb-16 pt-4 text-2xl">Page 2</h2>
      {/* <p className="pb-4 text-lg">Count value: {count}</p> */}
      <button onClick={() => setCount(count + 10)}>Increment by 10</button>
          </div>
  );
};

export default Page2;
