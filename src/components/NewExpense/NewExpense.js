import React from "react";

import "./NewExpense.css";

const newExpense = (props) => {
  const options = props.options.map((option, i) => {
    return (
      <option key={option + i} value={option}>
        {option}
      </option>
    );
  });

  return (
    <form action="" className="newExpense__form">
      <input
        name="itemName"
        type="text"
        placeholder="Nombre"
        value={props.values.itemName}
        onChange={props.changed}
      />
      <select
        name="category"
        value={props.values.category}
        ref={props.reference}
        onChange={props.changed}
      >
        <option value="">-- categoria --</option>
        {options}
      </select>
      <input
        name="amount"
        type="number"
        placeholder="Cantidad"
        value={props.values.amount}
        onChange={props.changed}
      />
      <input
        name="date"
        type="date"
        placeholder="Fecha"
        value={props.values.date}
        onChange={props.changed}
      />
      <div className="newExpense__btnWrapper">
        <button className="newExpense__btn addBtn" onClick={props.clicked}>
          Agregar
        </button>
        <button
          className="newExpense__btn cancelBtn"
          onClick={props.clickClosed}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default newExpense;
