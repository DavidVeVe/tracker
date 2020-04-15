import React from "react";

import "./Transactions.css";

const transactions = (props) => {
  return (
    <section className="transactions__container">
      <span>Id</span>
      <span>Nombre</span>
      <span>Cantidad</span>
      <span>Fecha</span>
      <span>Categoria</span>
      <span></span>
    </section>
  );
};

export default transactions;
