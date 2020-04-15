import React from "react";

import "./ListItem.css";
import deleteIcon from "../../assets/icons/delete.png";

const listItem = (props) => {
  return (
    <article className="listItem__container">
      <span>{props.itemId}</span>
      <span style={{ color: "blue", fontWeight: "bold" }}>
        {props.itemName}
      </span>
      <span style={{ color: "green", fontWeight: "bold" }}>
        ${props.amount}
      </span>
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

export default listItem;
