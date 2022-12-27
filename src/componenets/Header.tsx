import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrapper>
        <a>
        <img src="https://raw.githubusercontent.com/gurukudte/geekyzindagi/main/src/componenets/logo.png" alt="" />
        </a>

    </HeaderWrapper>
  )
}

export default Header;

const HeaderWrapper = styled.header`
  height:4em;
  background-color:blue;
  a{
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    padding-left:2em;
  }
`;