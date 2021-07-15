import React, { Component } from "react";

class Greet extends Component {
  render() {
    const { name, superHero } = this.props;
    return (
      <h1>
        Hello {name} a.k.a {superHero}
      </h1>
    );
  }
}
export default Greet;
