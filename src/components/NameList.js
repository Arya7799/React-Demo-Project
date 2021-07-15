import React from "react";

function NameList() {
  const namez = ["Natasha", "HawkEye", "TonyStark"];
  const nameList = namez.map((item) => <h2>{item}</h2>);
  return (
    <div>
      {/* <div>{namez[0]}</div>
      <div>{namez[1]}</div>
      <div>{namez[2]}</div> */}
      {/* {namez.map((item) => (
        <h2>{item}</h2>
      ))} */}
      {nameList}
    </div>
  );
}

export default NameList;
