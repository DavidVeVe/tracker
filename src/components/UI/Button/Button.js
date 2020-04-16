import React from "react";

import "./Button.css";

const button = (props) => (
  <button
    onClick={props.clicked}
    style={{ width: props.width }}
    className={["btn", props.btnType].join(" ")}
  >
    {props.children}
  </button>
);

export default button;
