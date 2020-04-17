import React from "react";

import "./Description.css";

import Button from "../UI/Button/Button";

const description = (props) => {
  return (
    <div className="description__container">
      <h3>Descripción:</h3>
      {props.description ? (
        <p className="description__text">{props.description}</p>
      ) : (
        <p className="noDescription">Este registro no tiene descripción.</p>
      )}
      <Button
        with="auto"
        fontSize=".8rem"
        btnType="cancel"
        clicked={props.descriptionToggle}
      >
        Ok
      </Button>
    </div>
  );
};
export default description;
