import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';

const HeaderWrapper = styled.footer`
  display: flex;
  width: 100%; 
  justify-content: center;  
  flex-direction: column; 
  background-color: rgba(0, 0, 0, 0.5) ; 
  text-align: center; 
  padding: 2rem; 
  font-weight: bold; 
  margin_top: auto; 
  color: white; 
  
  .gitIcon{
    margin-left: 10px; 
  }

`;

function footer() {
  return (
    <HeaderWrapper>
      <div className="upperFoot">
        <span>Get connected with us on social networks:</span>
        <a href="https://github.com/frankieavina/weather-forecaster-project" className="me-4 text-reset">
          <GitHubIcon className="gitIcon" />
        </a>
      </div>
      <div>
        © 2022 Copyright:
        <a className="text-reset fw-bold" href="https://frankieavina.com/">
          frankieavina.com
        </a>
      </div>
    </HeaderWrapper>
  );
}

export default footer;
