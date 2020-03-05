import React from "react";

const validationComponent = props => {
  const valText = props.inputLength < 5 ? "Not long enough" : "Long enough";
  return <div>{valText}</div>;
};

export default validationComponent;
