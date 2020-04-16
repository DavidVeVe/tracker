import React from "react";

import "./Item.css";
import deleteIcon from "../../assets/icons/delete.png";

const item = (props) => {
  return (
    <article className="listItem__container">
      <span style={{ fontWeight: "bold" }}>{props.itemId}</span>
      <span className="listItem__name">{props.itemName}</span>
      <span className="listItem__amount">${props.amount}.00</span>
      <span className="listItem__date">{props.date}</span>
      <span>{props.category}</span>
      <span>
        <img
          onClick={props.itemDeleted}
          className="listItem__deleteIcon"
          src={deleteIcon}
          alt="trash icon"
        />
      </span>
    </article>
  );
};

export default item;
