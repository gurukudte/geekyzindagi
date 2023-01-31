import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Register from "./components/Register/Register";
// import Login from "./components/Login/Login";
import UserRegister from "./modal";
// import UserLogin from "./modal";

const App: React.FC = () => {
  const [UserRegister, setRegisterUser] = useState<UserRegister[]>([]);
  // const [LoginUser ,setLoginUser] = useState<UserLogin[]>([]);
  console.log(UserRegister);

  return (
    <AppWrapper className="App">
      <Register UserRegister={UserRegister} setRegisterUser={setRegisterUser} />
      {/* <Login LoginUser = {LoginUser} setLoginUser={setLoginUser} /> */}
    </AppWrapper>
  );
};

export default App;

const AppWrapper = styled.div`
  margin: 0;
  padding: 0;
  height: 98vh;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
`;
