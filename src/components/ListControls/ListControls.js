import React from "react";

import "./ListControls.css";

import Button from "../UI/Button/Button";

const listControls = (props) => (
  <div className="listControls__container">
    <Button
      width="6%"
      fontSize="1.5rem"
      btnType="add2"
      color="white"
      clicked={props.openForm}
    >
      +
    </Button>
  </div>
);

export default listControls;
