import "./App.css";
import Context from "./hooks";
import Home from "./screens/Home";

function App() {
  return (
    <Context>
      <Home />
    </Context>
  );
}

export default App;
