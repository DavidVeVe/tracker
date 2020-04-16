import React, { Fragment } from "react";

import "./Item.css";
import deleteIcon from "../../assets/icons/delete.png";

const item = (props) => {
  return (
    <article onClick={props.clicked} className="item__container">
      <span style={{ fontWeight: "bold" }}>{props.itemId}</span>
      <span className="item__name">{props.itemName}</span>
      <span className="item__amount">${props.amount}.00</span>
      <span className="item__date">{props.date}</span>
      <span>{props.category}</span>
      <span>
        <img
          onClick={props.itemDeleted}
          className="item__deleteIcon"
          src={deleteIcon}
          alt="trash icon"
        />
      </span>
    </article>
  );
};

export default item;
