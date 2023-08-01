import Counter from "./contexts/Counter";
import "./App.css";

function App() {
  return (
    <div className="p-0 rounded-lg">
      <h1 className="pb-6 text-4xl">
        Using Context to increment a Counter through Components
      </h1>
      <Counter />
    </div>
  );
}

export default App;
