// these are the two core components that make up the user interface
import Header from "./components/Header";
import PlayList from "./components/PlayList";

// style
import "./App.css";

function App() {
  return (
    <main className="app">
      <Header />
      <PlayList />
    </main>
  );
}

export default App;
