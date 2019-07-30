import React from 'react';
import styled from 'styled-components';


const StyledStatsItem = styled.p`
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
  color: rgb(58, 58, 58);
`;


class StatsItem extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <StyledStatsItem>{ children }</StyledStatsItem>
    );
  }
}


export default StatsItem;
