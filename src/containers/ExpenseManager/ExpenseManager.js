import React, { Component } from "react";

import "./ExpenseManager.css";

import NewExpenseForm from "../../components/NewExpenseForm/NewExpenseForm";
import ItemsList from "../../components/ItemsList/ItemsList";
import Description from "../../components/Description/Description";
import Modal from "../../components/UI/Modal/Modal";

class ExpenseManager extends Component {
  constructor(props) {
    super(props);
    this.category = React.createRef();
  }

  state = {
    data: [],
    form: {
      itemName: "",
      amount: "",
      date: "",
      category: "",
      description: "",
    },
    categories: ["Comida", "Salud", "Servicios", "Transporte", "Otro"],
    show: false,
    showDescription: false,
  };

  itemAddTracker = (e) => {
    e.preventDefault();

    this.setState((prevState) => {
      const itemsData = [...prevState.data];
      itemsData.push(this.state.form);

      return {
        data: itemsData,
        form: {
          itemName: "",
          amount: "",
          date: "",
          category: "",
          description: "",
        },
        show: false,
      };
    });
  };

  itemChangeHandler = ({ target }) => {
    this.setState({
      form: {
        ...this.state.form,
        [target.name]: target.value,
      },
    });
  };

  itemDeletedHandler = (index, e) => {
    e.stopPropagation();
    this.setState((prevState) => {
      const itemsData = [...prevState.data];
      itemsData.splice(index, 1);

      return {
        data: itemsData,
        form: {
          itemName: "",
          amount: "",
          date: "",
          category: "",
          description: "",
        },
      };
    });
  };

  modalToggleHandler = (e) => {
    e.preventDefault();
    const modal = this.state.show;
    this.setState({ show: !modal });
  };

  descriptionToggleHandler = (e) => {
    e.stopPropagation();
    const description = this.state.showDescription;
    this.setState({ showDescription: !description });
  };

  render() {
    return (
      <section className="expenseList__container">
        {this.state.show ? (
          <Modal show={this.state.show} clickClosed={this.modalToggleHandler}>
            <NewExpenseForm
              clickClosed={this.modalToggleHandler}
              clicked={this.itemAddTracker}
              changed={this.itemChangeHandler}
              values={this.state.form}
              options={this.state.categories}
              selectorChanged={this.selectorChanged}
              reference={this.category}
            />
          </Modal>
        ) : (
          <Modal
            show={this.state.showDescription}
            clickClosed={this.descriptionToggleHandler}
          >
            <Description descriptionToggle={this.descriptionToggleHandler} />
          </Modal>
        )}

        <h1>Gestor de gastos</h1>
        <ItemsList
          descriptionToggle={this.descriptionToggleHandler}
          clickedOpened={this.modalToggleHandler}
          itemsValues={this.state.data}
          clickedDeleted={this.itemDeletedHandler}
        />
      </section>
    );
  }
}

export default ExpenseManager;
