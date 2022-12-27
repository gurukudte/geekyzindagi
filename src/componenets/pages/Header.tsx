import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrapper>
      <a><img src="https://raw.githubusercontent.com/gurukudte/geekyzindagi/main/src/images/logo.png" alt="logo" /></a>
      <button>Login</button>
    </HeaderWrapper>
  )
}

export default Header;

const HeaderWrapper = styled.header`
    height: 4em;
    background-color: #0A2647;
    padding-inline: 2em;
    display: flex;
    align-items: center;
    justify-content: space-between;

  a{
    height:100%;
    display:flex;
    align-items:center;
    img{
      height:2.5em;
    }
  }
  button{
    background-color:#144272;
    border-radius:0.5em;
    height:2.5rem;
    width:5rem;
    color:white;
    font-weight:600;
    border:none;

    &:hover{
      background-color:#2C74B3;
      cursor:pointer;
    }
  }
`;