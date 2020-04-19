import React from "react";

import "./DeletePopup.css";

import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";

const deletePopup = (props) => {
  const index = props.itemIndex;
  return (
    <Modal
      show={props.showPopup}
      clickClosed={(e) => props.togglePopup(null, e)}
    >
      <div className="deletePopup__container">
        <p>¿Estas seguro que deseas eliminar este registro?</p>
        <div className="deletePopup__btns">
          <Button
            clicked={(event) => props.itemDeleted(index, event)}
            width="30%"
            color="white"
            btnType="add"
          >
            Eliminar
          </Button>
          <Button
            clicked={(e) => props.togglePopup(null, e)}
            width="30%"
            color="white"
            btnType="cancel"
          >
            Cancelar
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default deletePopup;
