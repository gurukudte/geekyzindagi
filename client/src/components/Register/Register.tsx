import React from "react";
import { useState } from "react";
import styled from "styled-components";
import createUser from "./RegisterApi";
import UserRegister from "../../modal";

const Register: React.FC = () => {
  const [user, setuser] = useState<UserRegister>({
    email: "",
    password: "",
    fistName: "",
    lastName: "",
  });

  const handleInputChange = (field: string) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setuser((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };
  };

  const HandleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (user.email && user.password) {
      console.log(user);
      createUser(user);
      //fuctions
    } else {
      if (!user.email) {
        console.log("Enter Username");
      }
      if (!user.password) {
        console.log("Enter Password");
      }
    }
  };

  return (
    <SignUp>
      <div>
        <Form onSubmit={HandleRegister}>
          <span>Sign Up</span>

          <label htmlFor="First Name">
            First Name
            <input
              type="text"
              value={user.fistName}
              onChange={handleInputChange("fistName")}
            />
          </label>

          <label htmlFor="Last Name">
            Last Name
            <input
              type="text"
              value={user.lastName}
              onChange={handleInputChange("lastName")}
            />
          </label>

          <label htmlFor="Email">
            Email
            <input
              type="email"
              value={user.email}
              onChange={handleInputChange("email")}
            />
          </label>

          <label htmlFor="password">
            Password
            <input
              type="password"
              value={user.password}
              onChange={handleInputChange("password")}
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
      </div>
    </SignUp>
  );
};

export default Register;

const SignUp = styled.div`
  height:100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  div{
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
  }
`;

const Form = styled.form`
  width: 100%;
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
    font-family: "Roboto", sans-serif;
    gap: 0.8rem;
    margin-bottom: 1rem;
    font-size: 0.7rem;

    input {
      width: 18.75rem;
      height: 2.25rem;
      font-size: 14px;
      line-height: 20px;
      border-radius: 0.375rem;
      border: 0.1rem solid black;
      padding: 0.5rem;
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
