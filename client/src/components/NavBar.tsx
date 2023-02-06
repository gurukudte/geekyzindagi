import React from "react";
import styled from "styled-components";

export const NavBar: React.FC = () => {
  return (
    <Header>
      <a href="/">geekyZindahgi</a>
      <div><button type="submit" >Sign Up</button></div>
          
    </Header>
  );
};

const Header = styled.header``;

