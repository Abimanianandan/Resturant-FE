

import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DisplayResturant from "./DisplayResturant";
import TopBar from "./TopBar";
import Resturant1 from "./Resturant1";
import Resturant2 from "./Resturant2";
import Resturant3 from "./Resturant3";
import Resturant4 from "./Resturant4";
import Resturant5 from "./Resturant5";
import Resturant6 from "./Resturant6";
import Resturant7 from "./Resturant7";
import Resturant8 from "./Resturant8";

export const resturantContext = createContext();

const App = () => {
  const [name, setName] = useState("");
  const [cart, setCart] = useState(0);
  const [total, setTotal] = useState(0);
  const [cartItem, setCartItem] = useState([]);
  const [toggle, setToggle] = useState(false);

  return (
    <BrowserRouter>
      <resturantContext.Provider
        value={{
          name,
          setName,
          cart,
          setCart,
          total,
          setTotal,
          cartItem,
          setCartItem,
          toggle,
          setToggle,
        }}
      >
        <TopBar />
        <Routes>
          <Route path="/" element={<DisplayResturant />} />
          <Route path="/resturant1" element={<Resturant1 />} />
          <Route path="/resturant2" element={<Resturant2 />} />
          <Route path="/resturant3" element={<Resturant3 />} />
          <Route path="/resturant4" element={<Resturant4 />} />
          <Route path="/resturant5" element={<Resturant5 />} />
          <Route path="/resturant6" element={<Resturant6 />} />
          <Route path="/resturant7" element={<Resturant7 />} />
          <Route path="/resturant8" element={<Resturant8 />} /> 
        </Routes>
      </resturantContext.Provider>
    </BrowserRouter>
  );
};

export default App;

