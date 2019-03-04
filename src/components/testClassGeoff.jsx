import React from "react";

class TestThings extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: this.PrintValue() };
  }

  PrintValue() {
    return "value";
  }

  componentWillMount() {
    this.setState({ value: "Trululu" });
  }

  render() {
    return <div>{this.state.value}</div>;
  }
}

export default TestThings;
