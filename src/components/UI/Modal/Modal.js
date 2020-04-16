import React from "react";

import "./Modal.css";

import Backdrop from "../Backdrop/Backdrop";
import Aux from "../../../hoc/Auxiliary/Auxiliary";

const modal = (props) => (
  <Aux>
    <Backdrop show={props.show} clicked={props.clickClosed} />
    <div
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
      className="modal__container"
    >
      {props.children}
    </div>
  </Aux>
);

export default modal;
