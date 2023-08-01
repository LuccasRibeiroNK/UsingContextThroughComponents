import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import ResetCount from "../pages/ResetCount";

// Former Arquivo1

interface CounterContextProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

// Criando um contexto para o contador
export const CounterContext = createContext<CounterContextProps>(
  {} as CounterContextProps
);

// Criando um componente que usa o estado do contador
const Arquivo1: React.FC = () => {
  // Inicializando o contador com 0
  const [count, setCount] = useState(0);

  // Criando uma função para incrementar o contador

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      <div className="">
        <div className="grid grid-rows border-solid rounded-md border-2 justify-items-center pb-20">
          <Router>
            <div className="pt-20">
              <div className="border-solid rounded-md border-2 border-sky-500 w-96 pb-6">
                <div className="pb-4 text-2xl pt-4">Counter Component</div>
                <ResetCount />
                <div>
                  <div className="pb-4">
                    <Link to="/page1">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                        Load First Component
                      </button>
                    </Link>
                  </div>
                  <div className="">
                    <Link to="/page2">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                        Load Second Component
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="border-solid rounded-md border-2 border-sky-500 mt-4 pb-6">
                <Routes>
                  <Route path="/page1" element={<Page1 />} />
                  <Route path="/page2" element={<Page2 />} />
                </Routes>
              </div>
            </div>
          </Router>
        </div>
      </div>
    </CounterContext.Provider>
  );
};

export default Arquivo1;
