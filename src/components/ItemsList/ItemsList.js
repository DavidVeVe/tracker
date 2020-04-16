import React, { Fragment } from "react";

import "./ItemsList.css";

import ListControls from "../ListControls/ListControls";

const itemsList = (props) => (
  <Fragment>
    <ListControls clickedOpened={props.clickedOpened} />
    <section className="transactions__container">
      <span>Id</span>
      <span>Nombre</span>
      <span>Cantidad</span>
      <span>Fecha</span>
      <span>Categoria</span>
      <span></span>
    </section>
  </Fragment>
);

export default itemsList;
