import React from 'react';
import styled from 'styled-components';


const StyledMarketAwardItem = styled.div`
  padding: 0 20px;
`;

const MarketAwardItemImage = styled.img`
  width: 54px;
  vertical-align: top;
`;

const MarketAwardItemText = styled.p`
  display: inline-block;
  color: rgba(58, 58, 58, 0.8);
  font-weight: bold;
  padding-left: 4px;
  padding: 5px 0 5px 6px;
`;


interface MarketAwardItemProps {
  marketLogo: string;
}


class MarketAwardItem extends React.Component<MarketAwardItemProps> {
  render() {
    const { marketLogo, children } = this.props;
    return (
      <StyledMarketAwardItem>
        <MarketAwardItemImage src={ marketLogo } />
        <MarketAwardItemText>
          { children }
        </MarketAwardItemText>
      </StyledMarketAwardItem>
    );
  }
}


export default MarketAwardItem;
