import React, { Component } from 'react';
import ReactDOM from 'react-dom';
type PortalProps = {
  children: React.ReactNode,
  test: string
}
type PortalState = {
  testCount: number
}
class Portal extends Component<PortalProps, PortalState> {
  state = {
    testCount: 0
  }
  private el: HTMLDivElement = document.createElement('div');
  public componentDidMount(): void {
    document.body.appendChild(this.el);
  }
  public componentWillUnmount(): void {
    document.body.removeChild(this.el);
  }
  public render(): React.ReactElement<PortalProps> {
    const test = this.props.test
    // console.log(test)
    // console.log(this.state.testCount)
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}
class MyComponent extends Component<{}, { count: number }> {
  state = {
    count: 0,
  }
  handleClick = () => {
    this.setState(({ count }) => ({
      count: ++count,
    }));
  }
  render() {
    return (
      <div>
        <h1>Clicks: {this.state.count}</h1>
        <Portal test={'test'}>
          <h2>TEST PORTAL</h2>
          <button onClick={this.handleClick}>Click</button>
        </Portal>
      </div>
    );
  }
}
const PortalApp: React.FC = () => <MyComponent />;
export default PortalApp;