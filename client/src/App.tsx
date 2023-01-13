import React from "react";
import { useState } from "react";
import Register from "./components/Register/Register";
// import Login from "./components/Login/Login";
import UserRegister from "./modal";
// import UserLogin from "./modal";


const App: React.FC = () => {
  const [UserRegister ,setRegisterUser] = useState<UserRegister[]>([]);
  // const [LoginUser ,setLoginUser] = useState<UserLogin[]>([]);
  console.log(UserRegister)

  
  return (
    <div className="App">
      <Register UserRegister = {UserRegister} setRegisterUser={setRegisterUser} />
      {/* <Login LoginUser = {LoginUser} setLoginUser={setLoginUser} /> */}
    </div>
  );
  
};

export default App ;
