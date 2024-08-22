import "./App.css";
import Appsbar from "./components/Appsbar";
import Clock from "./components/Clock";

function App() {
  return (
    <div className="app">
      <section className="top-section">
        <Clock></Clock>
      </section>
      <section className="content-section"></section>
      <section className="bottom-section">
        <Appsbar></Appsbar>
      </section>
    </div>
  );
}

export default App;
