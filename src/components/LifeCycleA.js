import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Hari",
    };
    console.log("Life cycle A constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycle A getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifeCycleA componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("LifeCycleA should componnet update");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleA getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("LifeCycleA componentDidUpdate");
  }
  changeState = () => {
    this.setState({
      name: "React",
    });
  };
  render() {
    console.log("LifeCycle A render method");
    return (
      <div>
        <h3>LifeCycleA</h3>
        <button onClick={this.changeState}>Change</button>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
