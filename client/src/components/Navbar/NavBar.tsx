import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const NavBar: React.FC = () => {
  const navigate = useNavigate();

  const ClickHandler = () => {
    let path: string = "register";
    navigate(path);
  };

  return (
    <Header>
      <a href="/">geekyZindahgi</a>
      <div>
        <a href="/about">About</a>
        <a href="/conatact">contact</a>
        <a href="/login">Login</a>
        <button type="submit" onClick={ClickHandler}>
          Sign Up
        </button>
      </div>
    </Header>
  );
};

const Header = styled.header`
  width:100%;
  position:absolute;
  z-index:999;
  height: 4rem;
  background-color: transparent;
  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: white;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    button {
      padding: 0.5rem;
      height: 2.5rem;
      width: 5rem;
      border-radius: 0.3rem;
      font-weight: 800;
      background-color: white;
      color: black;
      cursor: pointer;

      &:hover {
        background-color: green;
      }
    }
  }
`;
