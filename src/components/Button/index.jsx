import React from "react";
import { MDBBtn } from "mdbreact";
import "./button.scss";

const Button = props => {
  return <MDBBtn className={props.className}>{props.children}</MDBBtn>;
};

export default Button;
