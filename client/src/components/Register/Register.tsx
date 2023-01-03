import React from "react";

interface Props {
  UsernameReg: string;
  setUsernameReg: React.Dispatch<React.SetStateAction<string>>;
  passwordReg: string;
  setpasswordReg: React.Dispatch<React.SetStateAction<string>>;
  HandleRegister: (e: React.FormEvent) => void;
}

const Register: React.FC<Props> = ({
  UsernameReg,
  setUsernameReg,
  passwordReg,
  setpasswordReg,
  HandleRegister,
}: Props) => {
  return (
    <div>
      <form onSubmit={HandleRegister}>
        <label htmlFor="name">Username</label>
        <input
          type="text"
          value={UsernameReg}
          placeholder="Enter Username"
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
