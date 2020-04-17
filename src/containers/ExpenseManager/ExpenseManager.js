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
    uxDescription: "",
    categories: ["comida", "salud", "servicios", "transporte", "otro..."],
    show: false,
    showDescription: false,
    incomeVersion: false,
    selectedItemIndex: null,
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

  descriptionToggleHandler = (index) => {
    const description = this.state.showDescription;

    this.setState({
      showDescription: !description,
      selectedItemIndex: index,
      uxDescription: this.state.data[index],
    });
  };

  render() {
    const uxDescription = this.state.uxDescription;

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
              reference={this.category}
            />
          </Modal>
        ) : (
          <Modal
            show={this.state.showDescription}
            clickClosed={this.descriptionToggleHandler}
          >
            <Description
              descriptionToggle={this.descriptionToggleHandler}
              description={uxDescription ? uxDescription.description : ""}
            />
          </Modal>
        )}
        {this.state.incomeVersion ? (
          <h1>Gestor de ingresos</h1>
        ) : (
          <h1>Gestor de gastos</h1>
        )}
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
