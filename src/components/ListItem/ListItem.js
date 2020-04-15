import React from "react";

import "./ListItem.css";
import deleteIcon from "../../assets/icons/delete.png";

const listItem = (props) => {
  return (
    <article className="listItem__container">
      <span>{props.itemId}</span>
      <span style={{ color: "blue" }}>{props.itemName}</span>
      <span style={{ color: "green" }}>${props.amount}</span>
      <span className="listItem__date">{props.date}</span>
      <span>{props.category}</span>
      <span onClick={props.itemDeleted}>
        <img className="listItem__deleteIcon" src={deleteIcon} alt="" />
      </span>
    </article>
  );
};

export default listItem;
