import React from 'react';
import styled from 'styled-components';

import imgPlayStore from '../../images/play-store@2x.png';
import imgAppStore from '../../images/app-store@2x.png';
import CountUp from '../../components/CountUp';
import FadeIn from '../../components/FadeIn';

import LogoAward from './LogoAward';
import StatsItem from './StatsItem';
import MarketAwardItem from './MarketAwardItem';


const StyledAwardSection = styled.div`
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
`;

const AwardSectionRow = styled.div`
  padding: 50px 0;
  margin: 0 -100px;
`;

const AwardSectionColumn = styled.div`
  display: inline-block;
  vertical-align: top;
  padding: 0 100px;
`;

const StatsContainer = styled.div``;

const MarketAwardContainer = styled.div`
  margin-top: 50px;
`;

const MarketAwardItemWrap = styled.div`
  display: flex;
  margin: 0 -20px;
`;


class AwardSection extends React.PureComponent {

  componentDidMount(): void {
    setTimeout(() => this.setState({ fadeIn: true }));
  }

  render() {
    return (
      <StyledAwardSection className='award-section'>
        <AwardSectionRow>
          <AwardSectionColumn>
            <FadeIn>
              <div className='award-section__logo'>
                <LogoAward />
              </div>
            </FadeIn>
          </AwardSectionColumn>
          <AwardSectionColumn>
            <FadeIn delay={ 100 }>
              <StatsContainer className='award-section__stats'>
                <StatsItem>
                  <strong>
                    <CountUp dest={ 350 } />
                    만 명
                  </strong>
                  의 사용자
                </StatsItem>
                <StatsItem>
                  <strong>
                    <CountUp dest={ 21 } />
                    만 개
                  </strong>
                  의 리뷰
                </StatsItem>
                <StatsItem>
                  <strong>
                    <CountUp dest={ 650 } />
                    만 개
                  </strong>
                  의 저장
                </StatsItem>
              </StatsContainer>
            </FadeIn>
            <FadeIn delay={ 200 }>
              <MarketAwardContainer className='award-section__marcket-award'>
                <MarketAwardItemWrap>
                  <MarketAwardItem marketLogo={ imgPlayStore }>
                    2018 구글 플레이스토어
                    <br />
                    올해의 앱 최우수상 수상
                  </MarketAwardItem>
                  <MarketAwardItem marketLogo={ imgAppStore }>
                    2018 애플 앱스토어
                    <br />
                    오늘의 여행앱 선정
                  </MarketAwardItem>
                </MarketAwardItemWrap>
              </MarketAwardContainer>
            </FadeIn>
          </AwardSectionColumn>
        </AwardSectionRow>
      </StyledAwardSection>
    );
  }
}


export default AwardSection;
