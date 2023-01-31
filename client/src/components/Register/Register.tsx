import React from "react";
import { useState } from "react";
import styled from "styled-components";
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
        { username: UsernameReg, password: passwordReg },
      ]);
      setUsernameReg("");
      setpasswordReg("");
      createUser(UsernameReg, passwordReg);
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
    <SignUp>
      <Form onSubmit={HandleRegister}>
        <span>Sign Up</span>
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
      </Form>
      <ImageWrapper>
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
          alt="signup"
        />
      </ImageWrapper>
    </SignUp>
  );
};

export default Register;

const SignUp = styled.div`
  background-color: white;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  height: 28rem;
  width: 60rem;
  border-radius: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #000000;
  padding: 1rem;

  span {
    color: white;
  }

  button {
  }
`;

const ImageWrapper = styled.div`
  img {
    height: 20rem;
    width: 20rem;
  }
`;
