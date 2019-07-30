import React from 'react';
import autobind from 'autobind-decorator';


interface CountUpProps {
  dest: number;
  from?: number;
  duration?: number;
  timingFunction?: (x: number) => number;
}


interface CountUpState {
  number: number;
}


class CountUp extends React.PureComponent<CountUpProps, CountUpState> {
  state = { number: 0 };
  private countUpTimer: number | null = null;
  private duration: number = 0;
  private playTime: number = 0;
  private from: number = 0;
  private distance: number = 0;
  private timingFunction: (x: number) => number = CountUp.easeOut;
  private isEnd: boolean = false;

  static linear(x: number): number {
    return x;
  }

  static easeIn(x: number): number {
    return x * x;
  }

  static easeOut(x: number): number {
    return x * (2 - x);
  }

  static easeInOut(x: number): number {
    return x < .5 ? 2 * x * x : -1 + (4 - 2 * x) * x;
  }

  componentDidMount(): void {
    this.initialize();
    this.start();
  }

  componentDidUpdate(prevProps: Readonly<CountUpProps>): void {
    if (
      prevProps.from !== this.props.from ||
      prevProps.duration !== this.props.duration ||
      prevProps.timingFunction !== this.props.timingFunction
    ) {
      this.initialize();
      this.start();
    } else if (prevProps.dest !== this.props.dest) {
      this.updateDest(this.props.dest);
    }
  }

  componentWillUnmount(): void {
    if (this.countUpTimer != null) {
      window.clearTimeout(this.countUpTimer);
    }
  }

  initialize() {
    const { from = 0, dest, timingFunction, duration = 1500 } = this.props;

    this.duration = duration;
    this.playTime = 0;
    this.from = from;
    this.distance = dest - this.from;
    this.timingFunction = timingFunction || CountUp.linear;
    this.isEnd = false;

    this.setState({
      number: from,
    });
  }

  updateDest(dest: number) {
    const { number } = this.state;

    this.playTime = 0;
    this.from = number;
    this.distance = dest - number;
    this.isEnd = false;

    if (this.countUpTimer != null) {
      window.clearTimeout(this.countUpTimer);
    }
    this.start();
  }

  // TODO
  start() {
    this.runTick(10);
  }

  runTick(timout: number) {
    this.countUpTimer = window.setTimeout(this.tick, timout, timout);
  }

  @autobind
  tick(timout: number) {
    this.playTime += timout;
    this.setState({
      number: Math.floor(this.from + this.timingFunction(this.playTime / this.duration) * this.distance),
    });
    if (this.playTime + timout <= this.duration) {
      this.runTick(timout);
    } else if (this.playTime < this.duration) {
      this.runTick(this.duration - this.playTime);
    } else {
      this.isEnd = true;
    }
  }

  render() {
    const { number } = this.state;
    return (
      <span>{ number }</span>
    );
  }

}


export default CountUp;
