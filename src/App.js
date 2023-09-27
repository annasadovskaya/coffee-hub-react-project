import "./App.css";
import ItemsList from "./features/items/ItemsList";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <ItemsList />
      <Footer />
    </div>
  );
}

export default App;
