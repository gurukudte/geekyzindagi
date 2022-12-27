import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrapper>
        <div>
        <img src="https://github.com/gurukudte/geekyzindagi/blob/main/src/componenets/logo.png" alt="" />
        </div>

    </HeaderWrapper>
  )
}

export default Header;

const HeaderWrapper = styled.header`
  height:4em;
  background-color:blue;
`;