import React from "react";

const Hello = (props) => {
  const { name, superHero } = props;
  return (
    <div>
      <h1>
        Hello {name} a.k.a {superHero}
      </h1>
    </div>
  );
  //   return React.createElement(
  //     "div",
  //     null,
  //     React.createElement("h1", null, "Hello Hari")
  //   );
};

export default Hello;
