import Counter from "./contexts/Counter";
import "./App.css";

function App() {
  return (
    
      <div className="  bg-gray-900 p-8 rounded-lg  ">
        <h1 className="pb-4 text-4xl">Using Context to increment a Counter through Components</h1>
        <Counter />
      </div>
    
  );
}

export default App;
