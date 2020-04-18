import React from "react";

import "./ListControls.css";

import Button from "../UI/Button/Button";

const listControls = (props) => (
  <div className="listControls__container">
    <Button
      width="15%"
      fontSize=".9rem"
      btnType="add"
      color="white"
      clicked={props.openForm}
    >
      Nuevo
    </Button>
  </div>
);

export default listControls;
