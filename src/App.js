import Header from "./components/Header";
import Footer from "./components/Footer";
// import ItemsList from "./features/items/ItemsList";
import ItemsMenuPage from "./pages/ItemsMenuPage";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="menu" element={<ItemsMenuPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
