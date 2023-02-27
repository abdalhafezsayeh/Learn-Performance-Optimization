import React from "react";

const TextTest = ({ textProps, HandleFn }) => {
  console.log("Text");
  return (
    <>
      <button onClick={HandleFn}>console</button>
      <div
        style={{ border: "1px solid #000", marginTop: "20px", padding: "10px" }}
      >
        {textProps.name} {HandleFn()}
      </div>
    </>
  );
};

// Use State & Variabile
export default React.memo(TextTest);
