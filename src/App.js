import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarNav from "./components/NavbarNav";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Data from "./pages/Data";
import "./App.scss";

function App() {


  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="content w-100">
          <NavbarNav />
          <div className="panel">
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/data" element={<Data />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;


