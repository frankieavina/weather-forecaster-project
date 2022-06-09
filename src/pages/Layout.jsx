import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from '../utils/globalStyle';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Wrapper = styled.div`

`;

const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper className="wrapper">
        <Header className="header" />
        <Outlet className="outlet" />
        <Footer className="footer" />
      </Wrapper>
    </>
  );
};

export default Layout;
