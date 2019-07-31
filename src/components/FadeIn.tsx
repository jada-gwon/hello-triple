import React from 'react';
import styled from 'styled-components';


interface FadeProps {
  delay?: number;
}


interface FadeState {
  in: boolean;
}


const StyledFade = styled.div<{ in: boolean }>`
  transition-property: transform, opacity;
  transition-duration: 700ms;
  transition-timing-function: cubic-bezier(0.45, 0.05, 0.55, 0.95);
  opacity: ${ props => props.in ? 1 : 0 };
  transform: translateY(${ props => props.in ? 0 : 20 }px);
`;


class FadeIn extends React.PureComponent<FadeProps, FadeState> {
  state = { in: false };

  componentDidMount(): void {
    const { delay = 0 } = this.props;
    setTimeout(() => this.setState({ in: true }), delay);
  }

  render() {
    const { children } = this.props;
    const { in: isFadeIn } = this.state;
    return (
      <StyledFade in={ isFadeIn }>{ children }</StyledFade>
    );
  }
}


export default FadeIn;
