import React, { Fragment } from "react";

import "./Description.css";

import Button from "../UI/Button/Button";

const description = (props) => {
  return (
    <div className="description__container">
      {props.descriptionValues.description ? (
        <Fragment>
          <h3>Descripción:</h3>
          <p className="description__text">
            {props.descriptionValues.description}
          </p>
        </Fragment>
      ) : (
        <p className="noDescription">Este registro no tiene descripción.</p>
      )}
      <Button
        color="white"
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
