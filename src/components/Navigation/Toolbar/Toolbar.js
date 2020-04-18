import React, { useState } from "react";

import "./Toolbar.css";

import Button from "../../UI/Button/Button";

const Toolbar = (props) => {
  return (
    <nav className="toolbar__container">
      <Button
        clicked={props.showIncome}
        className="boton"
        width="10%"
        btnType="white"
      >
        Ingresos
      </Button>
      <Button clicked={props.showExpenses} width="10%" btnType="white">
        Gastos
      </Button>
    </nav>
  );
};

export default Toolbar;
