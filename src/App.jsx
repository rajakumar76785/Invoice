import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Service from "./components/Service";
import TaxRate from "./components/TaxRate";
import Home from "./components/Home";
import AddTax from "./components/AddTax";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addtax" element={<AddTax />} />
          <Route path="/service" element={<Service />} />
          <Route path="/taxrate" element={<TaxRate/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
