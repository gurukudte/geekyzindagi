import React from "react";
import styled from "styled-components";
import Register from "./components/Register/Register";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import Login from "./components/Login/Login";

const App: React.FC = () => {
  return (
    <AppWrapper className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
      </Routes>
    </AppWrapper>
  );
};

export default App;

const AppWrapper = styled.div`
  margin: 0;
  padding: 0;
  background-color: #eee;
`;
