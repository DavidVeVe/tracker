import React from "react";

import "./ListItemsNames.css";

import Aux from "../../hoc/Auxiliary/Auxiliary";
import Button from "../UI/Button/Button";

const listItemsNames = (props) => (
  <Aux>
    <Button width="15%" btnType="add2" clicked={props.clickedOpened}>
      Agregar gasto
    </Button>
    <section className="transactions__container">
      <span>Id</span>
      <span>Nombre</span>
      <span>Cantidad</span>
      <span>Fecha</span>
      <span>Categoria</span>
      <span></span>
    </section>
  </Aux>
);

export default listItemsNames;
