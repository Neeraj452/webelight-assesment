import React, { useState } from 'react';
import NavBar from './components/navbar/Navbar';
import ItemList from './components/itemList/ItemList';
import "./App.css";
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import ShopingCart from './components/shopingCart/ShopingCart';
import History from './components/history/History';
interface AppProps {
  name: string;
}
const App: React.FC<AppProps> = ({ name }) => {
  let item: string | null = localStorage.getItem("CartItem");
  let items: object[] | null = item ? JSON.parse(item) : null;
  const [cardItem, setCardItem] = useState<object[]>(items ? [...items] : []);
  return <div style={{ background: "#ede9e982", minHeight: "100vh" }}>
    <Router>
      <NavBar cardItem={cardItem} />
      <Routes>
        <Route
          path="/"
          element={<ItemList setCardItemFn={setCardItem} cardItem={cardItem} />}
        />
        <Route
          path="/shoping-cart"
          element={<ShopingCart setCardItemFn={setCardItem} cardItem={cardItem} />}
        />
        <Route
          path="/history"
          element={<History />}
        />
      </Routes>

    </Router>
  </div>;
};

export default App;