import Header from "./components/Header";
import Footer from "./components/Footer";
// import ItemsList from "./features/items/ItemsList";
import ItemsMenuPage from "./pages/ItemsMenuPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <ItemsMenuPage />
      <Footer />
    </div>
  );
}

export default App;
