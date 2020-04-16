import React from "react";

import "./NewExpenseForm.css";

import Button from "../UI/Button/Button";

const newExpenseForm = (props) => {
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
        <Button btnType="add" clicked={props.clicked}>
          Agregar
        </Button>
        <Button btnType="cancel" clicked={props.clickClosed}>
          Cancelar
        </Button>
      </div>
    </form>
  );
};

export default newExpenseForm;
