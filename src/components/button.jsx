import React, { Component } from "react";
import "./button.css";

const isOperator = val => {
  if (val >= 0 && val <= 9) return true;
  else return false;
};

const Button = props => (
  <div
    className={`butn ${isOperator(props.children) ? null : "operator"}`}
    onClick={() => props.handleClick(props.children)}
  >
    {props.children}
  </div>
);

export default Button;
