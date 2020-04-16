import React from "react";

import "./ItemsList.css";

import ListControls from "../ListControls/ListControls";
import Item from "../Item/Item";

const itemsList = (props) => {
  const items = props.itemsValues.map((item, i) => {
    return (
      <Item
        key={item.itemName + i}
        itemId={i + 1}
        itemName={item.itemName}
        amount={item.amount}
        date={item.date}
        category={item.category}
        itemDeleted={() => props.clickedDeleted(i)}
        clicked={props.descriptionToggle}
      />
    );
  });

  return (
    <section className="itemList__container">
      <ListControls openForm={props.clickedOpened} />
      <section className="itemList__tags">
        <span>Id</span>
        <span>Nombre</span>
        <span>Cantidad</span>
        <span>Fecha</span>
        <span>Categoria</span>
        <span></span>
      </section>
      {items}
    </section>
  );
};

export default itemsList;
