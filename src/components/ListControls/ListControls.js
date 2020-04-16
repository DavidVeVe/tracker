import React from "react";

import "./ListControls.css";

import Button from "../UI/Button/Button";

const listControls = (props) => (
  <div className="listControls__container">
    <Button
      width="8%"
      fontSize="1.5rem"
      btnType="add2"
      clicked={props.openForm}
    >
      +
    </Button>
  </div>
);

export default listControls;
