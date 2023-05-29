import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import TenantsAdmin from "./components/TenantsAdmin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tenantsAdmin" element={<TenantsAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

