import React from 'react';
import styled from 'styled-components';

import imgLogoAward from '../../images/triple@2x.png';


const StyledLogoAward = styled.div`
  position: relative;
  width: 400px;
`;

const StyledLogo = styled.img`
  width: 100%;
`;

const StyledDate = styled.span`
  position: absolute;
  width: 100%;
  text-align: center;
  top: 280px;
  left: 0;
  color: rgba(58, 58, 58, 0.7);
  font-size: 15px;
`;


class LogoAward extends React.Component {
  render() {
    return (
      <StyledLogoAward>
        <StyledLogo src={ imgLogoAward } />
        <StyledDate>2019년 2월 기준</StyledDate>
      </StyledLogoAward>
    );
  }
}


export default LogoAward;
