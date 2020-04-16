import React, { Fragment } from "react";

import "./Description.css";

import Button from "../UI/Button/Button";

const description = (props) => (
  <div className="description__container">
    <div>{props.description}(Descripción)</div>
    <Button
      with="auto"
      fontSize=".8rem"
      btnType="cancel"
      clicked={props.descriptionToggle}
    >
      Cerrar
    </Button>
  </div>
);

export default description;
