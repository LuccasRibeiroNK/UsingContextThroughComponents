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
        <div className="h-54 grid grid-cols-3 gap-6 border-solid rounded-md border-2 border-sky-500 justify-items-center ">
          <Router>
            <div>
              <div className="pb-4 text-2xl pt-4">Counter Component</div>
              {/* <p className="pb-4 text-lg ">Count value: {count}</p> */}

              <div>
                <div className="pb-4">
                  <Link to="/page1">
                    <button>Link to First Page</button>
                  </Link>
                </div>
                <div className="pb-4">
                  <Link to="/page2">
                    <button>Link to Second Page</button>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <ResetCount />
            </div>
            <Routes>
              <Route path="/page1" element={<Page1 />} />
              <Route path="/page2" element={<Page2 />} />
            </Routes>
          </Router>
          <div></div>
        </div>
      </div>
    </CounterContext.Provider>
  );
};

export default Arquivo1;
