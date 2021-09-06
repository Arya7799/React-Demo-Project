import React, { Component } from "react";
import RegularComp from "./RegularComp";
import PureComp from "./PureComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Hari",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "AnthonySoprano",
      });
    }, 2000);
  }

  render() {
      console.log('Parent Comp Render');
    return (
      <div>
        <h1>ParentComponent</h1>
        <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
