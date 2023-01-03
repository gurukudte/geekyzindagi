import React from "react";
import { useState } from "react";
import Register from "./components/Register/Register";
import { UserData } from "./modal";

const App: React.FC = () => {
  
  const [UsernameReg, setUsernameReg] = useState<string>("");
  const [passwordReg, setpasswordReg] = useState<string>("");

  const [userData, setuserData] = useState<UserData[]>([]);


  const HandleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if(UsernameReg && passwordReg){
      setuserData([...userData,{ id: Date.now(), username: UsernameReg, password: passwordReg }]);
      setUsernameReg('');
      setpasswordReg('');
    }else{
      if(!UsernameReg){
        console.log("Enter Username")
      }
      if(!passwordReg){
        console.log("Enter Password")
      }
    }
  };
  console.table(userData)
  return (
    <div className="App">
      <Register
        UsernameReg={UsernameReg}
        setUsernameReg={setUsernameReg}
        passwordReg={passwordReg}
        setpasswordReg={setpasswordReg}
        HandleRegister={HandleRegister}
      />
    </div>
  );
};

export default App;
