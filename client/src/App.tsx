import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Register , Dashboard } from "./components";

// App Element
const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
};

export default App;
