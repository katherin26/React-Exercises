import "./App.css";
import NumberList from "./components/NumberList";

function App() {
  const numbers = [1, 2, 3, 4];
  return (
    <div className="App">
      <NumberList numbers={numbers} />;
    </div>
  );
}

export default App;
