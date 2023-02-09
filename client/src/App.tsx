import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Register } from "./components";

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
  *{
    box-sizing:border-box;
    margin:0;
    padding:0;
    scroll-behavior:smooth;
  }
`;
