import React from "react";
import { useState } from "react";
import styled from "styled-components";
import createUser from "./RegisterApi";

const Register: React.FC = () => {
  const [UsernameReg, setUsernameReg] = useState<string>("");
  const [passwordReg, setpasswordReg] = useState<string>("");
  const [firstName, setfirstName] = useState<string>("");
  const [lastName, setlastName] = useState<string>("");

  const HandleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (UsernameReg && passwordReg) {
      setUsernameReg("");
      setpasswordReg("");
      setfirstName("")
      setlastName("")
      createUser(UsernameReg,passwordReg,firstName,lastName)
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

        

        <label htmlFor="First Name">
          First Name
          <input type="text"
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
          />
        </label>

        <label htmlFor="Last Name">
          Last Name
          <input type="text"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
          />
        </label>

        <label htmlFor="Email">
          Email
          <input
            type="email"
            value={UsernameReg}
            onChange={(e) => setUsernameReg(e.target.value)}
          />
        </label>

        <label htmlFor="password">
          Password
          <input
            type="password"
            value={passwordReg}
            onChange={(e) => setpasswordReg(e.target.value)}
          />
        </label>

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
  height: 35rem;
  width: 60rem;
  border-radius: 1rem;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0 2px 15px -3px rgba(0, 0, 0, 0.07),
    0 10px 20px -2px rgba(0, 0, 0, 0.04);
`;

const Form = styled.form`
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;


  span {
    font-family: Roboto, sans-serif;
    font-size: 2.5rem;
    font-weight: 900;
    margin-bottom: 1.2rem;
  }

  label {
    display: flex;
    flex-direction: column;
    font-size: 13px;
    color: black;
    position: relative;
    font-weight: bold;
    line-height: 16px;
    letter-spacing: 0.02em;
    font-family: "Roboto",sans-serif;
    gap: 0.8rem;
    margin-bottom: 1rem;
    font-size:0.7rem;

    input {

      width: 18.75rem;
      height: 2.25rem;
      font-size: 14px;
      line-height: 20px;
      border-radius:0.375rem;
      border:0.1rem solid black;
      padding:0.5rem;

    }
  }

  button {

    background-color: #e8edeb;
    border: 1px solid #00684a;
    border-radius: 6px;
    height: 32px;
    width: 90px;
    font-size: 15px;
    margin-top: 1rem;
  }
`;

const ImageWrapper = styled.div`
  img {
    height: 300px;
    width: 500px;
  }
`;
