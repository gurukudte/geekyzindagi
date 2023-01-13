import React from "react";
import { useState } from "react";
import UserLogin from "../../modal";

interface Props {
  LoginUser: UserLogin[];
  setLoginUser: React.Dispatch<React.SetStateAction<UserLogin[]>>;
}

const Register: React.FC<Props> = ({ LoginUser, setLoginUser }: Props) => {
  const [EmailID, setUsernameReg] = useState<string>("");
  const [Password, setpasswordReg] = useState<string>("");

  const HandleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (Password && EmailID) {
      setLoginUser([
        ...LoginUser,
        { id: Date.now(), username: Password, password: EmailID },
      ]);
      setUsernameReg('');
      setpasswordReg('');
    } else {
      if (!Password) {
        console.log("Enter Username");
      }
      if (!EmailID) {
        console.log("Enter Password");
      }
    }
  };

  return (
    <div>
      <form onSubmit={HandleRegister}>
      <label htmlFor="emailid">Email ID</label>
        <input
          type="email"
          value={EmailID}
          placeholder="Enter Username"
          onChange={(e) => setUsernameReg(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={Password}
          placeholder="Enter Email ID"
          onChange={(e) => setpasswordReg(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Register;
