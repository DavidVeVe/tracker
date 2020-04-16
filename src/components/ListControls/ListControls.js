import React from "react";

import "./ListControls.css";

import Button from "../UI/Button/Button";

const listControls = (props) => (
  <div className="listControls__container">
    <Button width="15%" btnType="add2" clicked={props.clickedOpened}>
      Reportar gasto
    </Button>
  </div>
);

export default listControls;
