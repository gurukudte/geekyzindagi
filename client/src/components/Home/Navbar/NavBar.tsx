import React from "react";
import styled from "styled-components";
const Logo = require("../../../assets/logo.png");

const NavBar: React.FC = () => {  

  return (
    <NavBarWrapper>
      <div className="gz_navbar-links">
        <div className="gz_navbar-logo">
          <img src={Logo} alt="" />
        </div>
        <div className="gz_navbar-links_container">
          <p>
            <a href="#gh">Home</a>
          </p>
          <p>
            <a href="#askxajkshd">What is Geeky-Zindagi?</a>
          </p>
          <p>
            <a href="#asnkd">Community</a>
          </p>
        </div>
        <div className="gz_navbar-sign">
          <a href="/login">Sign In</a>
          <button type="button">Sign Up</button>
        </div>
      </div>
    </NavBarWrapper>
  );
};

export default NavBar;

const NavBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.5rem 1rem;

  .gz_navbar-links {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .gz_navbar-logo {
      margin-right: 2rem;
      img {
        width: 12rem;
        height: 3rem;
      }
    }
    .gz_navbar-links_container {
      display: flex;
      flex-direction: row;

      p {
        margin: 0 1rem;
        cursor: pointer;
        a {
          color: #fff;
          font-family: var(--font-family);
          font-weight: 700;
          line-height: 2rem;
          text-decoration: none;
          text-transform: capitalize;
        }
      }
    }
    .gz_navbar-sign {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      a {
        text-decoration:none;
        color: #fff;
        font-family: var(--font-family);
        font-weight: 700;
        line-height: 2rem;
        text-decoration: none;
        text-transform: capitalize;

        margin: 0 1rem;
        cursor: pointer;
      }
      button {
        cursor:pointer;
        padding:0.7em 0.7rem;
        border:none;
        border-radius:0.3rem;
        font-size:1rem;
        font-weight:700;
        
        &:hover{
          background-color:blue;
          color: white;
        }

      }
    }
  }
`;