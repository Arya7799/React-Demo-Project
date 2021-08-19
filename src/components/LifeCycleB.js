import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Hari",
    };
    console.log("Life cycle B constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycle B getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifeCycleB componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("LifeCycleB should componnet update");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleB getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("LifeCycleB componentDidUpdate");
  }

  render() {
    console.log("LifeCycle B render method");
    return <div>LifeCycleB</div>;
  }
}

export default LifeCycleB;
