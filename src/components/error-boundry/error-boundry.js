import React, { Component } from "react";

export class ErrorBoundry extends Component {
  state = {
    hasError: false,
  };
  componentDidCatch = () => this.setState({ hasError: true });

  render() {
    if (this.state.hasError) return <div>Error</div>;
    return this.props.children;
  }
}

function NumberList(props) {
  return (
    <ul>
      {
        props.elem.map((number) => <li>{number}</li>)
      }
    </ul>
  );
}