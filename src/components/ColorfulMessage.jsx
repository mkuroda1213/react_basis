import React from "react";

export const ColorfulMassage = (props) => {
  const { color, children } = props;
  const sontentStyle = {
    color,
    fontSize: "18px"
  };
  return <p style={sontentStyle}>{children}</p>;
};
