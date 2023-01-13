import React from "react";
import { useState } from "react";
import UserRegister from "../../modal";
import createUser from "./RegisterApi";

interface Props {
  UserRegister: UserRegister[];
  setRegisterUser: React.Dispatch<React.SetStateAction<UserRegister[]>>;
}

const Register: React.FC<Props> = ({
  UserRegister,
  setRegisterUser,
}: Props) => {
  const [UsernameReg, setUsernameReg] = useState<string>("");
  const [passwordReg, setpasswordReg] = useState<string>("");

  const HandleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (UsernameReg && passwordReg) {
      setRegisterUser([
        ...UserRegister,
        { id: Date.now(), username: UsernameReg, password: passwordReg },
      ]);
      setUsernameReg("");
      setpasswordReg("");
      createUser(Date.now(), UsernameReg, passwordReg);
    } else {
      if (!UsernameReg) {
        console.log("Enter Username");
      }
      if (!passwordReg) {
        console.log("Enter Password");
      }
    }
  };

  return (
    <div>
      <form onSubmit={HandleRegister}>
        <label htmlFor="Email">Email</label>
        <input
          type="email"
          value={UsernameReg}
          placeholder="Enter Email"
          onChange={(e) => setUsernameReg(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={passwordReg}
          placeholder="Enter Password"
          onChange={(e) => setpasswordReg(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
