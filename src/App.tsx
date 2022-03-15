import "./App.css";
import WordleHeader from "./components/Header/WordleHeader";
import WordleHome from "./pages/WordleHome";

function App() {
  return (
    <div className="App">
      <WordleHeader></WordleHeader>
      <WordleHome></WordleHome>
    </div>
  );
}

export default App;
