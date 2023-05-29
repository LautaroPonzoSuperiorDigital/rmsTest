import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Tenant from "./components/Tenants";
import Listings from "./components/Listings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/tenants" element={<Tenant />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
