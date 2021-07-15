import React from "react";

function InlineStyle() {
  const heading = {
    fontSize: "72px",
    color: "Blue",
  };
  return (
    <div>
      <h1 style={heading}>InlineStyle</h1>
      <h1 className="error">Inline h1 Element</h1>
      {/* <h1 className={styles.success}>CSS Modules</h1> */}
    </div>
  );
}

export default InlineStyle;
