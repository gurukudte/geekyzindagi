import React from "react";
import styled from "styled-components";
import Register from "./components/Register/Register";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";

const App: React.FC = () => {

  return (
    <AppWrapper className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="register" element={<Register />}></Route>
      </Routes>
    </AppWrapper>
  );
};

export default App;

const AppWrapper = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
`;
