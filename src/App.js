import Header from "./components/Header";
import Footer from "./components/Footer";
// import ItemsList from "./features/items/ItemsList";
import ItemsMenuPage from "./pages/ItemsMenuPage";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import ItemDetailPage from "./pages/ItemDetailPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="menu" element={<ItemsMenuPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="menu/:itemId" element={<ItemDetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
